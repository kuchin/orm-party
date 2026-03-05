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
