import AdminJS from "adminjs";
import * as AdminJSSequelize from "@adminjs/sequelize";
import { User } from "./models";

AdminJS.registerAdapter(AdminJSSequelize);

const admin = new AdminJS({
  resources: [
    {
      resource: User,
      options: {
        actions: {
          delete: {
            isAccessible: ({ currentAdmin }) =>
              currentAdmin?.role === "admin",
          },
          edit: {
            isAccessible: ({ currentAdmin }) =>
              currentAdmin?.role === "admin",
          },
        },
      },
    },
  ],
});
