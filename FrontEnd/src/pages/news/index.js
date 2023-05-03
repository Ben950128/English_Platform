import { useEffect, useState } from "react";
import { API_NEWS_DETAIL } from "../../global/constant";
import Footer from "../../components/Footer";

async function fetchOneNews(news_id, setOneNewsData) {
  let res = await fetch(API_NEWS_DETAIL + news_id);
  let data = await res.json();
  setOneNewsData(data);
}

const News = () => {
  const [oneNewsData, setOneNewsData] = useState([]);

  useEffect(() => {
    let news_id = "f9c60dd2-63c6-41a6-abd8-4ccbee31e051";
    fetchOneNews(news_id, setOneNewsData);
  }, []);
  console.log(oneNewsData);

  return (
    <>
      <Footer />
    </>
  );
};

export default News;
