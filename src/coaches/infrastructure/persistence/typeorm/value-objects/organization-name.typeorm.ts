import { Column } from 'typeorm';

export class OrganizationNameTypeORM {
  @Column('varchar', {
    name: 'organization_name',
    length: 150,
    nullable: true,
  })
  public value: string;

  private constructor(value: string) {
    this.value = value;
  }

  public static from(value: string): OrganizationNameTypeORM {
    return new OrganizationNameTypeORM(value);
  }
}
