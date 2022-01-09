export default function handler(req, res) {
  const eventId = req.query.eventId;

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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);
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
}
