import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { Demo, DemoDocument } from 'src/schemas/demo.schema';

@Injectable()
export class DemoService {
  constructor(@InjectModel(Demo.name) private readonly demoModel: Model<DemoDocument>) {}

  async create(): Promise<DemoDocument> {
    const demo = new this.demoModel({
      name: 'demo',
      hobbies: ['eat', 'sleep'],
      age: 1,
      job: 'Dev',
    });
    return demo.save();
  }

  getAll(): Observable<DemoDocument[]> {
    return from(this.demoModel.find().exec());
  }
}
