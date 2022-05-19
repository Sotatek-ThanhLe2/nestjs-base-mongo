import { getConfig } from 'src/configs/index';

interface IMongoDatabaseConfig {
  env: string;
  host: string;
  port: string;
  database: string;
  user: string;
  password: string;
  debug: boolean;
}

export const mongoDatabaseConfig: IMongoDatabaseConfig = {
  env: getConfig().get<string>('app.node_env'),
  host: getConfig().get<string>('database.host'),
  port: getConfig().get<string>('database.port'),
  database: getConfig().get<string>('database.database'),
  password: getConfig().get<string>('database.password'),
  user: getConfig().get<string>('database.user'),
  debug: getConfig().get<boolean>('database.debug'),
};
