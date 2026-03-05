import AdminJS from "adminjs";
import * as AdminJSMikroORM from "@adminjs/mikroorm";
import { User } from "./entity";

AdminJS.registerAdapter(AdminJSMikroORM);

const admin = new AdminJS({
  resources: [
    {
      resource: { model: User, orm },
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
