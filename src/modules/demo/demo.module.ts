import { Module } from '@nestjs/common';
import { DemoController } from 'src/modules/demo/demo.controller';
import { DemoService } from 'src/modules/demo/demo.service';

@Module({
  providers: [DemoService],
  controllers: [DemoController],
})
export class DemoModule {}
