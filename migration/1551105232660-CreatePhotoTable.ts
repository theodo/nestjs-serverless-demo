import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUser1551105232669 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "photo" (
          "id" SERIAL NOT NULL,
          "views" INTEGER NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "photo"`);
  }
}
