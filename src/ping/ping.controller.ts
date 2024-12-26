import { Controller, Get } from '@nestjs/common';
import { PingService } from './ping.service';
import { HealthStatusResponse } from './ping.dto';

@Controller('api/ping')
export class PingController {
  constructor(private pingService: PingService) {}

  @Get()
  getHealth(): HealthStatusResponse {
    return this.pingService.getHealthStatus();
  }
}
