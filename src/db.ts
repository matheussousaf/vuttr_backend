import { createConnection, getConnectionOptions } from "typeorm";

interface Connection {
  create: (callback?: Function) => Promise<void>;
}

export const connection: Connection = {
  create: async (callback: Function = () => {}) => {
    const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
    await createConnection({ ...connectionOptions, name: "default" });
    callback();
  },
};
