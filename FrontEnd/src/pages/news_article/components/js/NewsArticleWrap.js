import "../css/NewsArticleWrap.css";
import NewsOrigin from "./NewsOrigin";
import NewsTitleImage from "./NewsTitleImage";
import NewsTranslator from "./NewsTranslator";

const NewsArticleWrap = ({ oneNewsData }) => {
  return (
    <>
      <NewsTitleImage oneNewsData={oneNewsData} />
      <div className="news_article_wrap">
        <NewsOrigin oneNewsData={oneNewsData}></NewsOrigin>
        <NewsTranslator oneNewsData={oneNewsData}></NewsTranslator>
      </div>
    </>
  );
};

export default NewsArticleWrap;
