import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API_NEWS_DETAIL } from "../../global/constant";
import Footer from "../../components/Footer";

async function fetchOneNews(news_id, setOneNewsData) {
  let res = await fetch(API_NEWS_DETAIL + news_id);
  let data = await res.json();
  setOneNewsData(data);
}

const News = () => {
  const [oneNewsData, setOneNewsData] = useState([]);
  const url = useLocation();
  useEffect(() => {
    const news_id = url.search.split("=")[1];
    fetchOneNews(news_id, setOneNewsData);
  }, [url]);
  console.log(oneNewsData);

  return (
    <>
      <Footer />
    </>
  );
};

export default News;
