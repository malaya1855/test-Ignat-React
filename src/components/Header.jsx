import { Navigation } from "./reUseComponents/Navigation";
import svg from "../assets/sprite.svg";
export const Header = () => {
  return (
    <div>
      <div className="accent">
        <div className="container container-header">
          <div className="info-header">
            <a href="tel:+0989000909">098 900 09 09</a>
            <p>Допомога</p>
          </div>
          <a>Увійти / Зареєструватися</a>
        </div>
      </div>
      <div className="container navigation-header">
        <div className="nav-panel">
          <a className="logo">Ignat</a>
          <Navigation />
        </div>
        <div className="search-panel">
          <form className="search-form">
            <button type="submit" className="search-btn">
              <svg className="icon" width="22" height="22">
                <use href={svg + "#icon-search"}></use>
              </svg>
            </button>
            <input type="search" className="search-input" />
          </form>
          <a className="icon-link">
            <svg className="icon" width="24" height="24">
              <use href={svg + "#icon-heart"}></use>
            </svg>
          </a>
          <a className="icon-link">
            <svg className="icon" width="24" height="24">
              <use href={svg + "#icon-bag"}></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
