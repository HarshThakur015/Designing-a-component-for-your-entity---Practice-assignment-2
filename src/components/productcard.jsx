// write product card here
import "../components/productcard.css";
import Button from "./button";

export default function productcard() {
  const product_image =
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wfGVufDB8fDB8fHww";

  const product_name = "ASUS TUF Gaming A15, AMD Ryzen 7";

  const price = "63990";
  return (
    <>
      <div className="product-card">
        <img src={product_image} alt="Product-image" className="product-img" />
        <h3>{product_name}</h3>
        <h2>
          {" "}
          <b>Price: </b>
          {price}
        </h2>
        <Button/>
      </div>
    </>
  );
}