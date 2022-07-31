// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from "firebase-admin";
import type { NextApiRequest, NextApiResponse } from "next";
import { firestoreDB } from "../../firebaseAdmin";

type Email = {
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Email>
) {
  if (req.method === "POST") {
    const email = req.body.email;
    try {
      await firestoreDB.collection("pre-user").add({
        email,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      return res.status(200).end();
    } catch (e) {
      return res.status(500).end();
    }
  } else {
    return res.status(404).end();
  }
}
