import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const dbName = process.env.DB_NAME;
    const dbUserName = process.env.DB_USER_NAME;
    const dbPassword = process.env.DB_PASSWORD;
    const cluster = process.env.CLUSTER;

    const connectionUri = `mongodb+srv://${dbUserName}:${dbPassword}@${cluster}/${dbName}`;

    const connection = mongoose.createConnection(connectionUri);
    connection.on("connected", () => console.log("db connected"));
    connection.on("open", () => console.log("db open"));
    connection.on("disconnected", () => console.log("db disconnected"));
    connection.on("reconnected", () => console.log("db reconnected"));
    connection.on("disconnecting", () => console.log("db disconnecting"));
    connection.on("close", () => console.log("db close"));

    await mongoose.connect(connectionUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
