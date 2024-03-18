import { Splide, SplideSlide } from "@splidejs/react-splide";
// import Slider from "react-slick";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Slider } from "../components/reUseComponents/Slider";

const HomePage = () => {
  return (
    <div>
      <section className="hero">
        <Splide aria-label="">
          <SplideSlide>
            <img
              src="./test-Ignat-React/src/assets/images/hero.jpg"
              alt="Sports"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./test-Ignat-React/src/assets/images/hero.jpg"
              alt="Sports"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="./test-Ignat-React/src/assets/images/hero.jpg"
              alt="Sports"
            />
          </SplideSlide>
        </Splide>
      </section>
      <div className="container">
        <section className="cta">
          <div>
            <h2 className="cta-title">
              Ми знаємо, що сподобається вашим “великим” друзям!
            </h2>
            <p className="cta-text">
              Обирай подарунок своїм друзями бодібілдерам із нашою новою
              колекцію термобілизни “Big warm”
            </p>
            <a className="cta-button">До каталогу</a>
          </div>
          <img
            className="cta-image"
            src="./test-Ignat-React/src/assets/images/strongMan.jpg"
            alt="Strong man"
          ></img>
        </section>
        <section className="popular">
          <h3 className="popular-title">Найгарячіші товари</h3>
          <Slider />
        </section>
        <section className="promotions">
          <h2 className="promotions-title">Спіймай всі акції!</h2>
          <p className="promotions-text">
            Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
            будуть з`влятись у нашому магазині. А у нас їх багато :D
          </p>
          <form className="subscribe-form">
            <input placeholder="Введіть"></input>
            <button type="button">Підписатись</button>
          </form>
        </section>
        <section className="feedback">
          <h3>Відгуги наших клієнтів</h3>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
