import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Home() {
  const [dataFetch, setDataFetch] = useState();
  const fecth = async () => {
    const results = await axios.get("http://localhost:4000/admin");
    setDataFetch(results.data);
    console.log(results.data);
  };

  useEffect(() => {
    fecth();
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", margin: 5 }}>
        {dataFetch
          ? dataFetch.map((item, key) => {
              return (
                <div style={{ margin: 10 }} key={key}>
                  <Card data={item} />;
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
