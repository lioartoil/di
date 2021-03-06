import { Module } from '@nestjs/common';

import { PowerModule } from '../power/power.module';

import { CpuService } from './cpu.service';

@Module({ exports: [CpuService], imports: [PowerModule], providers: [CpuService] })
export class CpuModule {}
