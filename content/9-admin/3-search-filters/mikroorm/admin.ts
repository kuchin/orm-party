import AdminJS from "adminjs";
import * as AdminJSMikroORM from "@adminjs/mikroorm";
import { User } from "./entity";

AdminJS.registerAdapter(AdminJSMikroORM);

const admin = new AdminJS({
  resources: [
    {
      resource: { model: User, orm },
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
