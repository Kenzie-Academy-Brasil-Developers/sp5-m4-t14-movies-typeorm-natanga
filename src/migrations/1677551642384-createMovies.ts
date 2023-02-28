import { MigrationInterface, QueryRunner } from "typeorm";

export class createMovies1677551642384 implements MigrationInterface {
    name = 'createMovies1677551642384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" SET NOT NULL`);
    }

}
