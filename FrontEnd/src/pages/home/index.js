import { useEffect, useState, useContext } from "react";
import { API_NEWS_TYPE } from "../../global/constant";
import NewsOutline from "./components/js/NewsOutline";
import Background from "../../components/js/Background";
import Footer from "../../components/js/Footer";
import NewsTypeContext from "../../components/js/NewsTypeContext";

async function fetchNews(news_type, offsetNo, setNewsData) {
  let res = await fetch(API_NEWS_TYPE + news_type + `?offset_no=${offsetNo}`);
  let data = await res.json();
  setNewsData(data);
}

const Home = () => {
  const [newsData, setNewsData] = useState([]);
  const { newsType } = useContext(NewsTypeContext);

  // 因為是空陣列，因此呼叫setNewsData更改newsData後，並不會再次執行useEffect導致變成無限迴圈
  useEffect(() => {
    let offsetNo = 0;
    fetchNews(newsType, offsetNo, setNewsData);
  }, [newsType]);

  return (
    <>
      <Background />
      <NewsOutline newsData={newsData} />
      <Footer />
    </>
  );
};

export default Home;
