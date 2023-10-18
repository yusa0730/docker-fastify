import { DataSource } from "typeorm";
import { CustomNamingStrategy } from "./strategy";
import { Message } from "./entities";

export default new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? "3306"),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Message],
  migrations: ["./migrations/*.ts"],
  namingStrategy: new CustomNamingStrategy(),
});
