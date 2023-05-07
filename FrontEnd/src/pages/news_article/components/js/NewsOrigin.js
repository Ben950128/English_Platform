import React from "react";
import "../css/NewsOrigin.css";

function NewsOrigin({ oneNewsArticle }) {
  // 如果 news_origin 為 undefined，直接返回 null
  if (!oneNewsArticle) {
    return null;
  }

  const paragraphs = oneNewsArticle.split("\n");

  function renderParagraphs() {
    return paragraphs.map((paragraph, index) => (
      <div key={index}>
        <p>{paragraph}</p>
      </div>
    ));
  }

  return <div className="news_origin_article_wrap">{renderParagraphs()}</div>;
}

export default NewsOrigin;
