import { ConnectionOptions } from 'typeorm';

export const config: ConnectionOptions = {
  name: 'default',
  type: 'mysql',
  host: process.env.MONGO_HOST,
  port: parseInt(process.env.MONGO_PORT),
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DATABASE,
  entities: [__dirname + '/models/entities/**/*{.ts,.js}'],
  logging: true,
  logger: 'file',
  migrationsTableName: 'migrate_tables',
  synchronize: false,
  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    // location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
};

module.exports = config;
