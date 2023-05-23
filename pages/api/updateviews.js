import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";



export default async function handler(req, res) {
    try {
        let arr = [];
        const querySnapshot = await getDocs(collection(db, "siteviews"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            if (doc.id !== 'x5cnb5D6Uals1Dyadr82') arr.push(doc.id);
        });
        await res.status(200).send(arr.length)
    } catch (error) {
        res.status(400).send(error)
    }
}