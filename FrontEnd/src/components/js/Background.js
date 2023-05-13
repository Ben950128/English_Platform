import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NewsMenu from "./NewsMenu";
import NewsTypeContext from "./NewsTypeContext";
import NextOffsetContext from "./NextOffestContext";
import NewsDataContext from "./NewsData.Context";
import "../css/Background.css";

const Background = () => {
  const { setNewsType } = useContext(NewsTypeContext);
  const { setNextOffset } = useContext(NextOffsetContext);
  const { setNewsData } = useContext(NewsDataContext);

  const navigate = useNavigate();
  function redirectToIndexUrl() {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setNewsType("all");
    setNewsData([]);
    setNextOffset(0);
  }
  return (
    <>
      <div className="background_block_top">
        <NewsMenu />
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
