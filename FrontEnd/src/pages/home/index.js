import { useEffect, useState } from "react";
import { API_NEWS_TYPE } from "../../global/constant";
import NewsOutline from "./components/NewsOutline";
import Background from "../../components/Background";
import Footer from "../../components/Footer";
import NewsTypeContext from "../../components/NewsTypeContext";

async function fetchNews(news_type, offsetNo, setNewsData) {
  let res = await fetch(API_NEWS_TYPE + news_type + `?offset_no=${offsetNo}`);
  let data = await res.json();
  setNewsData(data);
}

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const [newsType, setNewsType] = useState("all");

  // 因為是空陣列，因此呼叫setNewsData更改newsData後，並不會再次執行useEffect導致變成無限迴圈
  useEffect(() => {
    let offsetNo = 0;
    fetchNews(newsType, offsetNo, setNewsData);
  }, [newsType]);

  return (
    // { newsType, setNewsType }為物件的鍵和值變數名稱相同時，可以使用的簡寫語法
    <NewsTypeContext.Provider value={{ newsType, setNewsType }}>
      <Background />
      <NewsOutline newsData={newsData} />
      <Footer />
    </NewsTypeContext.Provider>
  );
};

export default Home;
