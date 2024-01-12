import mongoose from "mongoose";

export const dbConnect = () => {
  const dbUserName = process.env.DB_USER_NAME;
  const dbPassword = process.env.DB_PASSWORD;
  const cluster = process.env.CLUSTER;

  const connection = mongoose.createConnection(
    `mongodb+srv://${dbUserName}:${dbPassword}@${cluster}`
  );

  connection.on("connected", () => console.log("db connected"));
  connection.on("open", () => console.log("db open"));
  connection.on("disconnected", () => console.log("db disconnected"));
  connection.on("reconnected", () => console.log("db reconnected"));
  connection.on("disconnecting", () => console.log("db disconnecting"));
  connection.on("close", () => console.log("db close"));
};
