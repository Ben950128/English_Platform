import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NewsTypeContext from "./NewsTypeContext";
import "../css/Menu.css";

const Menu = () => {
  const navigate = useNavigate();
  const { setNewsType } = useContext(NewsTypeContext);
  function redirectTypeUrl(category) {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setNewsType(categoryObject[category]);
  }
  const categoryObject = {
    World: "world",
    Business: "business",
    Technology: "technology",
    "Science & Environment": "science_and_environment",
    "Entertainment & Arts": "entertainment_and_arts",
    Health: "health",
  };

  return (
    <div className="title_wrapper">
      <div className="empty_div" />
      <div className="categories_block">
        {Object.keys(categoryObject).map((category) => (
          <div
            key={category}
            className="label_font"
            onClick={() => redirectTypeUrl(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="login_block">
        <div className="label_font">log in/sign up</div>
      </div>
    </div>
  );
};

export default Menu;
