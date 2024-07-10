import { DataSource } from 'typeorm';
import { Book } from './entities/book';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'bookdb',
  synchronize: true,
  logging: false,
  entities: [Book],
  migrations: [],
  subscribers: [],
});
