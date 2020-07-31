import { createConnection, getConnection } from "typeorm";

interface Connection {
  create(): Promise<void>;
  dropDatabase(): Promise<void>;
}

export const db: Connection = {
  create: async () => {
    let retries = 5;
    while (retries) {
      try {
        await createConnection();
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
