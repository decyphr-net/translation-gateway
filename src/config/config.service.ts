import { Injectable } from '@nestjs/common';

import * as path from 'path';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {
  static constants() {
    const baseDir = path.join(__dirname, '../../.env');
    const config = dotenv.parse(fs.readFileSync(baseDir));
    return {
      translatorServiceHost: config.TRANSLATOR_SERVICE_HOST,
      translatorServicePort: config.TRANSLATOR_SERVICE_PORT,
    };
  }
}
