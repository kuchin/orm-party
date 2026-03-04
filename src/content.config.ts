import { defineCollection, z } from "astro:content";
import fs from "node:fs";
import path from "node:path";
import { createHighlighter } from "shiki";

const shikiLang: Record<string, string> = {
  ts: "typescript",
  py: "python",
  prisma: "prisma",
  sh: "bash",
};

const snippetLoader = {
  name: "snippet-loader",
  async load({ store, logger }: { store: any; logger: any }) {
    const contentDir = path.resolve("./content");

    if (!fs.existsSync(contentDir)) {
      logger.warn("No content directory found");
      return;
    }

    const dirs = (dir: string) =>
      fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .sort((a, b) => a.name.localeCompare(b.name));

    // Collect unique languages
    const langs = new Set<string>();
    for (const cat of dirs(contentDir)) {
      for (const scenario of dirs(path.join(contentDir, cat.name))) {
        for (const orm of dirs(path.join(contentDir, cat.name, scenario.name))) {
          const ormPath = path.join(contentDir, cat.name, scenario.name, orm.name);
          for (const file of fs.readdirSync(ormPath).filter((f) => !f.startsWith("."))) {
            const ext = path.extname(file).slice(1);
            langs.add(shikiLang[ext] || ext);
          }
        }
      }
    }

    const highlighter = await createHighlighter({
      themes: ["github-dark"],
      langs: [...langs],
    });

    for (const cat of dirs(contentDir)) {
      for (const scenario of dirs(path.join(contentDir, cat.name))) {
        for (const orm of dirs(path.join(contentDir, cat.name, scenario.name))) {
          const ormPath = path.join(contentDir, cat.name, scenario.name, orm.name);
          const files = fs.readdirSync(ormPath).filter((f) => !f.startsWith(".")).sort();

          const snippetFiles = files.map((file) => {
            const ext = path.extname(file).slice(1);
            const lang = shikiLang[ext] || ext;
            const code = fs.readFileSync(path.join(ormPath, file), "utf-8");
            const html = highlighter.codeToHtml(code.trim(), {
              lang,
              theme: "github-dark",
            });
            return { filename: file, language: ext, code, html };
          });

          store.set({
            id: `${cat.name}/${scenario.name}/${orm.name}`,
            data: {
              categorySlug: cat.name,
              scenarioSlug: scenario.name,
              ormId: orm.name,
              files: snippetFiles,
            },
          });
        }
      }
    }

    highlighter.dispose();
    logger.info(`Loaded ${store.keys().length} snippets`);
  },
};

const snippets = defineCollection({
  loader: snippetLoader,
  schema: z.object({
    categorySlug: z.string(),
    scenarioSlug: z.string(),
    ormId: z.string(),
    files: z.array(
      z.object({
        filename: z.string(),
        language: z.string(),
        code: z.string(),
        html: z.string(),
      }),
    ),
  }),
});

export const collections = { snippets };
