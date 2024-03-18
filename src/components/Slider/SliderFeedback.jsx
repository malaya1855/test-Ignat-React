import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import feedback from "../../data/feedback.json";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import svg from "../../assets/sprite.svg";
import { FeedbackCard } from "../FeedbackCard/FeedbackCard";

export const SliderFeedback = () => {
  return (
    <Splide
      hasTrack={false}
      aria-label="..."
      className="slider-common"
      options={{
        type: "loop",
        perPage: 4,
        rewind: true,
        width: 1170,
        gap: "30px",
        pagination: false,
      }}
    >
      <SplideTrack>
        {feedback.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <FeedbackCard item={item} />
            </SplideSlide>
          );
        })}
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--next">
          <svg className="arrow">
            <use href={svg + "#icon-arrow-right"}></use>
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--prev">
          <svg className="arrow">
            <use href={svg + "#icon-arrow-left"}></use>
          </svg>
        </button>
      </div>
    </Splide>
  );
};
