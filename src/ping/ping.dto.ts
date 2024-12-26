export class HealthStatus {
  constructor(name: string, isHealthy: boolean) {
    this.name = name;
    this.isHealthy = isHealthy;
  }

  name: string;
  isHealthy: boolean;
}

export class HealthStatusResponse {
  constructor(isHealthy: boolean, status: HealthStatus[]) {
    this.isHealthy = isHealthy;
    this.status = status;
  }

  isHealthy: boolean;
  status: HealthStatus[];
}
