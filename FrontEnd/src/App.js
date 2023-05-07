import Home from "./pages/home";
import News from "./pages/news_article";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NewsTypeContext from "./components/js/NewsTypeContext";

const App = () => {
  const [newsType, setNewsType] = useState("all");

  return (
    // { newsType, setNewsType }為物件的鍵和值變數名稱相同時，可以使用的簡寫語法
    <NewsTypeContext.Provider value={{ newsType, setNewsType }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </NewsTypeContext.Provider>
  );
};

export default App;
