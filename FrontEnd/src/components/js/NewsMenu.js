import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import NewsTypeContext from "./NewsTypeContext";
import NextOffsetContext from "../../components/js/NextOffestContext";
import NewsDataContext from "./NewsData.Context";
import "../css/NewsMenu.css";

const NewsMenu = () => {
  const navigate = useNavigate();
  const { setNewsType } = useContext(NewsTypeContext);
  const { setNextOffset } = useContext(NextOffsetContext);
  const { setNewsData } = useContext(NewsDataContext);

  function redirectTypeUrl(category) {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setNewsData([]);
    setNewsType(categoryObject[category]);
    setNextOffset(0);
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
      {/* <div className="empty_div" /> */}
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
      <BurgerMenu
        categoryObject={categoryObject}
        redirectTypeUrl={redirectTypeUrl}
      />
      {/* <div className="user_block">
        <div>
          <img id="user_icon" src="/user.png" />
        </div>
      </div> */}
    </div>
  );
};

export default NewsMenu;
