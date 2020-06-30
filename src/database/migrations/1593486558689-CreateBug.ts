import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateBug1593486558689 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
