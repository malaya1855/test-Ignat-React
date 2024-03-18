import { Link } from "react-router-dom";
import { Navigation } from "./reUseComponents/Navigation";

export const Footer = () => {
  return (
    <div className="border-footer">
      <div className="container group-footer">
        <div>
          <p className="title-footer">Контакт - центр</p>
          <ul className="list-footer">
            <li className="item-footer">
              <a href="tel:+0989000909">098 900 09 09</a>
            </li>
            <li className="item-footer">Пн - Пт 09:00 - 21:00</li>
            <li className="item-footer">Пн - Пт 09:00 - 21:00</li>
          </ul>
        </div>
        <div className="group-list-footer">
          <div>
            <p className="title-footer">Покупцям</p>
            <ul className="list-footer">
              <li className="item-footer">
                <Link to="/404">Оплата і доставка</Link>
              </li>
              <li className="item-footer">
                <Link to="/404">Повернення</Link>
              </li>
              <li className="item-footer">
                <Link to="/404">Питання та відповіді</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="title-footer">Особистий кабінет</p>
            <ul className="list-footer">
              <li className="item-footer">
                <Link to="/404">Мої дані</Link>
              </li>
              <li className="item-footer">
                <Link to="/404">Історія замовлень</Link>
              </li>
              <li className="item-footer">
                <Link to="/404">Улюблені</Link>
              </li>
              <li className="item-footer">
                <Link to="/404">Розсилки</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="title-footer">Про компанію</p>
            <ul className="list-footer">
              <li className="item-footer">
                <Link to="/404">Про нас</Link>
              </li>
              <li className="item-footer">
                <Link to="/404">Новини</Link>
              </li>
              <li className="item-footer">
                <Link to="/404">Стати партнером</Link>
              </li>
              <li className="item-footer">
                <Link to="/404">Угода користувача</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accent">
        <div className="container navigation-footer">
          <Navigation />
          <p className="rights">© 2022 — 2023 IGNAT. Усі права захищені.</p>
        </div>
      </div>
    </div>
  );
};
