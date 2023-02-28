import { MigrationInterface, QueryRunner } from "typeorm";

export class createMovies1677551134181 implements MigrationInterface {
    name = 'createMovies1677551134181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "name" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "name" DROP NOT NULL`);
    }

}
