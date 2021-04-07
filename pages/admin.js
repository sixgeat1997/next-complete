import axios from "axios";
import { useState } from "react";

export default function Admin() {
  const [product, setProduct] = useState({
    title: "",
    img: "",
  });

  const postProduct = async () => {
    const results = await axios.post("http://localhost:4000/admin", {
      ...product,
    });
    console.log(results);
  };
  console.log(product);
  return (
    <div>
      <input
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      />
      <input
        onChange={(e) => setProduct({ ...product, img: e.target.value })}
      />
      <button onClick={postProduct}>addProduct</button>
    </div>
  );
}
