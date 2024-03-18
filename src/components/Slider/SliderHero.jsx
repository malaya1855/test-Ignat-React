import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import svg from "../../assets/sprite.svg";

export const SliderHero = () => {
  return (
    <Splide
      hasTrack={false}
      aria-label=""
      options={{
        type: "loop",
        rewind: true,
      }}
    >
      <SplideTrack>
        <SplideSlide>
          <img
            src="./test-Ignat-React/src/assets/images/hero.jpg"
            alt="Sports"
          />
        </SplideSlide>
      </SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--next">
          <svg className="arrow">
            <use href={svg + "#icon-big-arrow-left"}></use>
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--prev">
          <svg className="arrow">
            <use href={svg + "#icon-big-arrow-right"}></use>
          </svg>
        </button>
      </div>
    </Splide>
  );
};
