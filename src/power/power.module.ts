import { Module } from '@nestjs/common';

import { PowerService } from './power.service';

@Module({ exports: [PowerModule], providers: [PowerService] })
export class PowerModule {}
