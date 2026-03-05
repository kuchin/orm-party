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
          deactivate: {
            actionType: "bulk",
            component: false,
            handler: async (request, response, context) => {
              const { records } = context;
              await Promise.all(
                records.map((r) => r.update({ isActive: false }))
              );
              return {
                records: records.map((r) => r.toJSON()),
              };
            },
          },
        },
      },
    },
  ],
});
