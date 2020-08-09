import { createConnection, getConnection, ConnectionOptions } from "typeorm";
interface Connection {
  create(retries?: number, environment?: string): Promise<void>;
  dropDatabase(): Promise<void>;
}

export const db: Connection = {
  create: async (retries: number = 5, environment: string = "other") => {
    while (retries) {

      try {
        const testConfig: ConnectionOptions = {
          type: "mysql",
          database: process.env.TEST_DATABASE,
          host: process.env.HOST,
          username: process.env.USERNAME,
          password: process.env.PASSWORD,
          port: 3306,
          name: "default",
          entities: [process.env.ENTITIES_FOLDER],
          synchronize: true,
          dropSchema: true
        };

        await createConnection(environment === "test" ? testConfig : null);
        break;
      } catch (error) {
        retries -= 1;
        console.log(`# Retries left: ${retries}`);
        await new Promise((res) => setTimeout(res, 5000));
        console.log(error);
      }
    }
  },
  dropDatabase: async () => {
    await getConnection().dropDatabase();
  },
};
