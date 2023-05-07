import { useContext } from "react";
import Menu from "./Menu";
import NewsTypeContext from "./NewsTypeContext";
import "../css/Background.css";

const Background = () => {
  const { setNewsType } = useContext(NewsTypeContext);
  function redirectToIndexUrl() {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
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
