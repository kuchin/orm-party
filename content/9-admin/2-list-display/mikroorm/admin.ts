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
        sort: { sortBy: "createdAt", direction: "desc" },
      },
    },
  ],
});
