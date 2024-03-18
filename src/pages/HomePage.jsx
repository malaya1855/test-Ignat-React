import { SliderProducts } from "../components/Slider/SliderProducts";
import { SliderHero } from "../components/Slider/SliderHero";
import { SliderFeedback } from "../components/Slider/SliderFeedback";

const HomePage = () => {
  return (
    <div>
      <section className="hero">
        <SliderHero />
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
            src="/assets/images/strongMan.jpg"
            alt="Strong man"
          ></img>
        </section>
        <section className="popular">
          <h3 className="popular-title">Найгарячіші товари</h3>
          <p className="pagination">01 / 03</p>
          <SliderProducts />
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
          <p className="pagination">01 / 03</p>
          <SliderFeedback />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
