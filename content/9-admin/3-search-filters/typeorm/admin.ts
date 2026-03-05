import AdminJS from "adminjs";
import * as AdminJSTypeORM from "@adminjs/typeorm";
import { User } from "./entity";

AdminJS.registerAdapter(AdminJSTypeORM);

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
