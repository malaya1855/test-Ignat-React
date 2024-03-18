import PropTypes from "prop-types";
import svg from "../../assets/sprite.svg";

export const ProductCard = ({ item }) => {
  const { title, gender, properties, src, price } = item;
  console.log(src);
  return (
    <div className="productCard">
      <img src={src} alt={title} className="productImg" />
      <p className="product-title">{title}</p>
      <p className="product-prop">{gender}</p>
      <p className="product-prop">{properties}</p>
      <p className="product-price">{price}</p>
      <button type="button">
        <svg className="" width="" height="">
          <use href={svg + "#icon-heart"}></use>
        </svg>
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};
