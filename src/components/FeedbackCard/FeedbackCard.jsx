import PropTypes from "prop-types";
import svg from "../../assets/sprite.svg";
import mask from "../../assets/images/mask.jpg";

export const FeedbackCard = ({ item }) => {
  return (
    <div className="feedback-item">
      <div className="feedback-highlight">
        <img className="feedback-photo" src={mask} />
        <div>
          <div>
            {[1, 2, 3, 4, 5].map((value) => (
              <span key={value}>
                {value <= item.rating ? (
                  <svg width="8" height="8">
                    <use href={svg + "#icon-star-fill"}></use>
                  </svg>
                ) : (
                  <svg width="8" height="8">
                    <use href={svg + "#icon-star"}></use>
                  </svg>
                )}
              </span>
            ))}
          </div>
          <p className="feedback-name">{item.name}</p>
        </div>
      </div>
      <p className="feedback-message">{item.feedback}</p>
    </div>
  );
};

FeedbackCard.propTypes = {
  item: PropTypes.object.isRequired,
};
