import { getFirestore } from "firebase/firestore";
import FirebaseApp from "./config";

const db = FirebaseApp.database();

export default async function getData(collection: string, id: string, query: any) {
	db.collection(collection).where(...query).then(
		(res) => {
			console.log(res)
		}
	).catch((err) => {
		console.log(err)
	})
}
