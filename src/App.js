import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { db } from "./utils/firebase.js";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [seriesSet, setSeriesSet] = useState();

  async function call() {
    const seriesCollection = collection(db, "series");
    const data = await getDocs(seriesCollection);
    let struct = data.docs.map((d) => ({ ...d.data(), id_fire: d.id }));
    setSeriesSet(struct);
  }

  useEffect(() => {
    call();
  }, []);

  const renderList = useMemo(() => {
    return (
      <div>
        {!!seriesSet?.length &&
          Object?.values(seriesSet).map((e) => (
            <div key={e.id}>
              <p>{e.permalink}</p>
            </div>
          ))}
      </div>
    );
  }, [seriesSet]);

  return (
    <div className="App">
      <div>{!!seriesSet?.length && renderList}</div>
    </div>
  );
}

export default App;
