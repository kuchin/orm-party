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
