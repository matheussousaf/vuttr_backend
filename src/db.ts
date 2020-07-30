import { createConnection, getConnectionOptions, getConnection } from "typeorm";

interface Connection {
  create: (callback?: Function) => Promise<void>;
  dropDatabase: () => Promise<void>;
}

export const connection: Connection = {
  create: async (callback: Function = () => {}) => {
    const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
    await createConnection({ ...connectionOptions, name: "default" });
    callback();
  },
  dropDatabase: async () => {
    await getConnection("default").dropDatabase();
  },
};
