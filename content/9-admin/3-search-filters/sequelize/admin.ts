import AdminJS from "adminjs";
import * as AdminJSSequelize from "@adminjs/sequelize";
import { User } from "./models";

AdminJS.registerAdapter(AdminJSSequelize);

const admin = new AdminJS({
  resources: [
    {
      resource: User,
      options: {
        listProperties: ["name", "email", "createdAt"],
        properties: {
          name: { isTitle: true },
        },
        filterProperties: ["name", "email", "createdAt"],
      },
    },
  ],
});
