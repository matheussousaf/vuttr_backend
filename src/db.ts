import { createConnection, getConnectionOptions, getConnection } from "typeorm";

interface Connection {
  create(): Promise<void>;
  dropDatabase(): Promise<void>;
}

export const db: Connection = {
  create: async (callback: Function = () => {}) => {
    let retries = 5;
    while (retries) {
      try {
        const connectionOptions = await getConnectionOptions(
          process.env.NODE_ENV
        );
        await createConnection({ ...connectionOptions, name: "default" });
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
    await getConnection("default").dropDatabase();
  },
};
