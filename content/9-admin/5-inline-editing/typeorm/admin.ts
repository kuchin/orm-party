// AdminJS doesn't support inline editing
// Edit related models through their own resource page
import AdminJS from "adminjs";
import * as AdminJSTypeORM from "@adminjs/typeorm";
import { User } from "./entity";

AdminJS.registerAdapter(AdminJSTypeORM);

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
