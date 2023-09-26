import { MongoClient } from "mongodb";

export async function getDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://alfalcone1996:Weierstrass1@cluster0.rtfasqr.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  return { db: client.db(), client };
}

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const db = await getDB();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
