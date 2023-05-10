import { useState } from "react";
import SelectButton from "./SelectButton";
import "../css/NewsTranslator.css";

function NewsTranslator({ oneNewsData }) {
  // 如果 oneNewsArticle為null或undefined，直接返回空陣列
  const [translator, setTranslator] = useState("news_tw");
  const paragraphs = oneNewsData[translator]?.split("\n") || [];
  const renderParagraphs = () =>
    paragraphs.map((paragraph, index) => (
      <div key={index}>
        <p>{paragraph}</p>
      </div>
    ));

  return (
    <div className="news_origin_article_wrap">
      <SelectButton translator={translator} setTranslator={setTranslator} />
      {renderParagraphs()}
    </div>
  );
}

export default NewsTranslator;
