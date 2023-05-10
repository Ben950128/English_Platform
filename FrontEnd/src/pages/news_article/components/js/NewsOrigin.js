import "../css/NewsOrigin.css";

function NewsOrigin({ oneNewsData }) {
  // 如果 oneNewsArticle為null或undefined，直接返回空陣列
  const paragraphs = oneNewsData.news_origin?.split("\n") || [];
  const renderParagraphs = () =>
    paragraphs.map((paragraph, index) => (
      <div key={index}>
        <p>{paragraph}</p>
      </div>
    ));

  return <div className="news_origin_article_wrap">{renderParagraphs()}</div>;
}

export default NewsOrigin;
