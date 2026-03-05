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
        sort: { sortBy: "createdAt", direction: "desc" },
      },
    },
  ],
});
