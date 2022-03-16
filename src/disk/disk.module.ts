import { Module } from '@nestjs/common';

import { PowerModule } from '../power/power.module';

import { DiskService } from './disk.service';

@Module({ exports: [DiskService], imports: [PowerModule], providers: [DiskService] })
export class DiskModule {}
