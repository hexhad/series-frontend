import { db } from "../../../plugins/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function requestGetSeries(params) {
    const seriesCollection = collection(db, "series");
    const data = await getDocs(seriesCollection);
    let struct = data.docs.map((d) => ({ ...d.data(), id_fire: d.id }));
    return struct;
}