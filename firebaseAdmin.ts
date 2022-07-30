import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseCredentialObj = JSON.parse(
  process.env.FIREBASE_CREDENTIAL as string
);

const firebaseCredential = {
  ...firebaseCredentialObj,
  private_key: firebaseCredentialObj.private_key.replace(/\\n/g, "\n"),
};

const firebaseAdmin = initializeApp({
  credential: cert(firebaseCredential),
});

export const firestoreDB = getFirestore(firebaseAdmin);
