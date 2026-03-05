// All fields displayed by default
import AdminJS from "adminjs";
import * as AdminJSMikroORM from "@adminjs/mikroorm";

AdminJS.registerAdapter(AdminJSMikroORM);

const admin = new AdminJS({
  resources: [{ resource: { model: User, orm } }],
});
