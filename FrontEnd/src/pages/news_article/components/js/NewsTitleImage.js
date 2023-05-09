import "../css/NewsTitleImage.css";

function NewsTitleImage({ oneNewsData }) {
  return (
    <div className="title_image_wrap">
      <div className="main_news_img_box">
        <img className="main_news_image" src={oneNewsData.image_path} alt="" />
      </div>
      <div className="main_news_title_block">
        <span className="main_news_title">{oneNewsData.title}</span>
      </div>
    </div>
  );
}

export default NewsTitleImage;
