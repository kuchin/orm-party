// All fields displayed by default
import AdminJS from "adminjs";
import * as AdminJSSequelize from "@adminjs/sequelize";
import { User } from "./models";

AdminJS.registerAdapter(AdminJSSequelize);

const admin = new AdminJS({
  resources: [User],
});
