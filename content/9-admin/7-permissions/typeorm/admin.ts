import AdminJS from "adminjs";
import * as AdminJSTypeORM from "@adminjs/typeorm";
import { User } from "./entity";

AdminJS.registerAdapter(AdminJSTypeORM);

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
