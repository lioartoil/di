import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    console.debug(`Supplying ${watts} worth of power.`);
  }
}
