import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import NewsTypeContext from "./NewsTypeContext";
import "../css/Background.css";

const Background = () => {
  const { setNewsType } = useContext(NewsTypeContext);
  const navigate = useNavigate();
  function redirectToIndexUrl() {
    if (window.location.pathname !== "/") {
      navigate("/");
    } else {
      setNewsType("all");
    }
  }
  return (
    <>
      <div className="background_block_top">
        <Menu />
        <div id="homepage_title_block">
          <span id="homepage_title" onClick={() => redirectToIndexUrl()}>
            Chew News
          </span>
        </div>
      </div>
      <div className="background_block_bottom">
        <div className="bottom_yellow" />
        <div className="bottom_white" />
      </div>
    </>
  );
};

export default Background;
