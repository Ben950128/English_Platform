import { useContext } from "react";
import NewsTypeContext from "./NewsTypeContext";
import "./Menu.css";

const Menu = () => {
  const categoryObject = {
    World: "world",
    Business: "business",
    Technology: "technology",
    "Science & Environment": "science_and_environment",
    "Entertainment & Arts": "entertainment_and_arts",
    Health: "health",
  };
  const { setNewsType } = useContext(NewsTypeContext);

  return (
    <div className="title_wrapper">
      <div className="empty_div" />
      <div className="categories_block">
        {Object.keys(categoryObject).map((category) => (
          <div
            key={category}
            className="label_font"
            onClick={() => setNewsType(categoryObject[category])}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="login_block">
        <div className="label_font">登入/註冊</div>
      </div>
    </div>
  );
};

export default Menu;
