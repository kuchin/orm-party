import { Migration } from "@mikro-orm/migrations";

export class Migration20240115000000 extends Migration {
  override async up(): Promise<void> {
    this.addSql('alter table "users" add column "age" int null;');
  }

  override async down(): Promise<void> {
    this.addSql('alter table "users" drop column "age";');
  }
}
