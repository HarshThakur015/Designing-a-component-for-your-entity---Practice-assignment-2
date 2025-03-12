// write product card here
import "../components/productcard.css";
import Button from "./button";

export default function productcard() {
  const product_image =
    "https://i.pinimg.com/736x/41/59/91/415991758da277ff47dc2bf33554468d.jpg";

  const product_name = "HP Victus, Intel Core i5";

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
