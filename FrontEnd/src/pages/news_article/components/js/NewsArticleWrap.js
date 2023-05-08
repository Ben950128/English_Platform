import "../css/NewsArticleWrap.css";
import NewsOrigin from "./NewsOrigin";
import NewsTitleImage from "./NewsTitleImage";

const NewsArticleWrap = ({ oneNewsData }) => {
  console.log(oneNewsData);
  return (
    <>
      <NewsTitleImage oneNewsData={oneNewsData} />
      <div className="news_article_wrap">
        <NewsOrigin oneNewsArticle={oneNewsData.news_origin}></NewsOrigin>
        <NewsOrigin oneNewsArticle={oneNewsData.news_tw}></NewsOrigin>
      </div>
    </>
  );
};

export default NewsArticleWrap;
