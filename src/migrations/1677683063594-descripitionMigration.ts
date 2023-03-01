import { MigrationInterface, QueryRunner } from "typeorm";

export class descripitionMigration1677683063594 implements MigrationInterface {
    name = 'descripitionMigration1677683063594'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "deletedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
