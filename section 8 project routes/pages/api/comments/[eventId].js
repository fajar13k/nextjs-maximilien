import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://root:root@cluster0.9fe0w.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    // Add server-side validation
    const { email, name, text } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();

    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);

    newComment.id = result.insertedId;

    res.status(201).json({ message: "Comment added!", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "First comment!" },
      { id: "c2", name: "Manuel", text: "Second comment!" },
    ];

    console.log(dummyList);
    res
      .status(200)
      .json({ message: "Successfully retrieving data", comments: dummyList });
  }

  client.close();
}
