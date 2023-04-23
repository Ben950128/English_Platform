import { useEffect, useState } from "react";
import { API_NEWS_TYPE } from "../../global/constant";
import NewsOutline from "./components/NewsOutline";
import Background from "../../components/Background";
import Footer from "../../components/Footer";

async function fetchNews(news_type, setNewsData) {
  let res = await fetch(API_NEWS_TYPE + news_type);
  let data = await res.json();
  setNewsData(data);
}

const Home = () => {
  const [newsData, setNewsData] = useState([]);

  // 因為是空陣列，因此呼叫setNewsData更改newsData後，並不會再次執行useEffect導致變成無限迴圈
  useEffect(() => {
    fetchNews("all", setNewsData);
  }, []);

  return (
    <>
      <Background></Background>
      <NewsOutline newsData={newsData} />
      <Footer />
    </>
  );
};

export default Home;
