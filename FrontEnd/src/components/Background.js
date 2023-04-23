import Menu from "./Menu";
import "./Background.css";

const Background = () => {
  return (
    <>
      <div className="background_block_top">
        <Menu></Menu>
        <div id="homepage_title">Chew News</div>
      </div>
      <div className="background_block_bottom">
        <div className="bottom_yellow"></div>
        <div className="bottom_white"></div>
      </div>
    </>
  );
};

export default Background;
