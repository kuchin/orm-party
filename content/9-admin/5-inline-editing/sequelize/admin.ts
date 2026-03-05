// AdminJS doesn't support inline editing
// Edit related models through their own resource page
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
          posts: { isVisible: { list: false, show: true } },
        },
      },
    },
  ],
});
