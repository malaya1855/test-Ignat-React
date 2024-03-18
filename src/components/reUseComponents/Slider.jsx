import { Splide, SplideSlide } from "@splidejs/react-splide";
import products from "../../data/products.json";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ProductCard } from "./ProductCard";

export const Slider = () => {
  return (
    <Splide
      aria-label=""
      options={{
        type: "loop",
        perPage: 3,
        rewind: true,
        width: 1170,
        gap: "30px",
      }}
    >
      {products.map((item, index) => {
        return (
          <SplideSlide key={index}>
            <ProductCard item={item} />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};
