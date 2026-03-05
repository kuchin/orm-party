import AdminJS from "adminjs";
import * as AdminJSSequelize from "@adminjs/sequelize";
import { User } from "./models";

AdminJS.registerAdapter(AdminJSSequelize);

const admin = new AdminJS({
  resources: [
    {
      resource: User,
      options: {
        properties: {
          createdAt: {
            isVisible: { edit: false, show: true, list: true },
          },
          updatedAt: {
            isVisible: { edit: false, show: true, list: true },
          },
        },
      },
    },
  ],
});
