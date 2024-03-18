import PropTypes from "prop-types";

export const ProductCard = ({ item }) => {
  const { title, gender, properties, src, price } = item;
  return (
    <div>
      <img href={src} alt={title} />
      <p>{title}</p>
      <p>{gender}</p>
      <p>{properties}</p>
      <p>{price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
};
