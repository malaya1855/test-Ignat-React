import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import PropTypes from "prop-types";
import products from "../../data/products.json";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import svg from "../../assets/sprite.svg";
import { ProductCard } from "../ProductCard/ProductCard";

export const SliderProducts = () => {
  return (
    <Splide
      hasTrack={false}
      aria-label="..."
      className="slider-common"
      options={{
        type: "loop",
        perPage: 3,
        rewind: true,
        width: 1170,
        gap: "30px",
        pagination: false,
      }}
    >
      <SplideTrack>
        {products.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <ProductCard item={item} />
            </SplideSlide>
          );
        })}
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--next">
          <svg className="arrow">
            <use href={svg + "#icon-arrow-left"}></use>
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--prev">
          <svg className="arrow">
            <use href={svg + "#icon-arrow-right"}></use>
          </svg>
        </button>
      </div>
    </Splide>
  );
};

SliderProducts.propTypes = {
  content: PropTypes.array.isRequired,
};
