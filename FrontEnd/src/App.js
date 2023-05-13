import Home from "./pages/home";
import News from "./pages/news_article";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NewsTypeContext from "./components/js/NewsTypeContext";
import NextOffsetContext from "./components/js/NextOffestContext";
import NewsDataContext from "./components/js/NewsData.Context";

const App = () => {
  const [newsType, setNewsType] = useState("all");
  const [nextOffset, setNextOffset] = useState(0);
  const [newsData, setNewsData] = useState([]);

  return (
    // { newsType, setNewsType }為物件的鍵和值變數名稱相同時，可以使用的簡寫語法
    <NewsTypeContext.Provider value={{ newsType, setNewsType }}>
      <NextOffsetContext.Provider value={{ nextOffset, setNextOffset }}>
        <NewsDataContext.Provider value={{ newsData, setNewsData }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </NewsDataContext.Provider>
      </NextOffsetContext.Provider>
    </NewsTypeContext.Provider>
  );
};

export default App;
