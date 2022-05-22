import { Field, ID, ObjectType } from '@nestjs/graphql';
import {Column, DataType, Table, Model} from "sequelize-typescript";

interface CreatePageAttrs {
  content: string
}

@ObjectType({description: 'page'})
@Table({tableName: "pages"})
export class Page extends Model<Page, CreatePageAttrs> {
  @Field(() => ID)
  @Column({type: DataType.STRING, unique: true, autoIncrement: true, primaryKey: true})
  id: string

  @Field(() => String)
  @Column({type: DataType.STRING, allowNull: false})
  content: string
}