import { Injectable } from '@nestjs/common';
import { HealthStatus, HealthStatusResponse } from './ping.dto';

@Injectable()
export class PingService {
  private getApplicationHealth(): HealthStatus {
    return new HealthStatus('application', true);
  }

  getHealthStatus(): HealthStatusResponse {
    return new HealthStatusResponse(true, [this.getApplicationHealth()]);
  }
}
