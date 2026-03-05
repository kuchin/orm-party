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
        sort: { sortBy: "createdAt", direction: "desc" },
      },
    },
  ],
});
