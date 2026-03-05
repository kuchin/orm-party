// AdminJS doesn't support inline editing
// Edit related models through their own resource page
import AdminJS from "adminjs";
import * as AdminJSMikroORM from "@adminjs/mikroorm";
import { User } from "./entity";

AdminJS.registerAdapter(AdminJSMikroORM);

const admin = new AdminJS({
  resources: [
    {
      resource: { model: User, orm },
      options: {
        properties: {
          posts: { isVisible: { list: false, show: true } },
        },
      },
    },
  ],
});
