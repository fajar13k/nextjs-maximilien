import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.9fe0w.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  return client;
}
