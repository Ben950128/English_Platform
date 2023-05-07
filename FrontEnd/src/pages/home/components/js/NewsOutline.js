import "../css/NewsOutline.css";
import { Link } from "react-router-dom";

const NewsOutline = ({ newsData }) => {
  function formatNewsDate(date) {
    let transDate = new Date(date);
    let newDateStr = `${transDate.getFullYear()}-${
      transDate.getMonth() + 1
    }-${transDate.getDate()}`;
    return newDateStr;
  }

  function formatNewsType(type) {
    let newType;
    if (type === "world") {
      newType = "World";
    } else if (type === "business") {
      newType = "Business";
    } else if (type === "technology") {
      newType = "Technology";
    } else if (type === "science_and_environment") {
      newType = "Science & Environment";
    } else if (type === "entertainment_and_arts") {
      newType = "Entertainment & Arts";
    } else if (type === "health") {
      newType = "Health";
    }
    return newType;
  }

  return (
    <div className="news_outline_wrap">
      {newsData.map((item) => {
        const { news_id, title, type, date, image_path } = item;
        const newsUrl = `/news?news_id=${news_id}`;
        return (
          <Link key={news_id} to={newsUrl} id="news_link">
            <div className="news_wrap">
              <div className="img_box">
                <img className="news_image" src={image_path} alt="" />
              </div>
              <div id="news_title">{title}</div>
              <div className="news_type_and_news_date">
                <div id="news_type">{formatNewsType(type)}</div>
                <div id="news_date">{formatNewsDate(date)}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NewsOutline;
