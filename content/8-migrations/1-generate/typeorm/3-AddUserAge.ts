// Generated: src/migrations/1234567890-AddUserAge.ts

export class AddUserAge1234567890
  implements MigrationInterface
{
  async up(qr: QueryRunner) {
    await qr.query(
      `ALTER TABLE "user" ADD "age" integer`
    );
  }

  async down(qr: QueryRunner) {
    await qr.query(
      `ALTER TABLE "user" DROP COLUMN "age"`
    );
  }
}
