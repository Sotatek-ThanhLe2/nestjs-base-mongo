import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DemoDocument = Demo & Document;

@Schema()
export class Demo {
  @Prop()
  name: string;

  @Prop()
  hobbies: string[];

  @Prop()
  job: string;

  @Prop()
  age: number;
}

export const DemoSchema = SchemaFactory.createForClass(Demo);
export const DemoModel: ModelDefinition = { name: Demo.name, schema: DemoSchema };
