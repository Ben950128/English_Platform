import "../css/NewsTitleImage.css";

function NewsTitleImage({ oneNewsData }) {
  return (
    <div className="title_image_wrap">
      <img className="news_img" src={oneNewsData.image_path} alt=""></img>
    </div>
  );
}

export default NewsTitleImage;
