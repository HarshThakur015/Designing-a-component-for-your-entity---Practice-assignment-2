import "../components/productcard.css";
import Button from "./button";

export default function ProductCard() { // Fixed component name
  const product_image =
    "https://i.pinimg.com/736x/41/59/91/415991758da277ff47dc2bf33554468d.jpg";

  const product_name = "HP Victus, Intel Core i5";
  const price = "$1100";

  return (
    <div className="product-card">
      <img src={product_image} alt="Product-image" className="product-img" />
      <h3 className="product-name">{product_name}</h3>
      <h2 className="product-price">
        <b>Price: </b>
        {price}
      </h2>
      <Button />
    </div>
  );
}
