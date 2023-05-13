import { useEffect, useState, useContext, useRef } from "react";
import { API_NEWS_TYPE } from "../../global/constant";
import NewsOutline from "./components/js/NewsOutline";
import Background from "../../components/js/Background";
import Footer from "../../components/js/Footer";
import NewsTypeContext from "../../components/js/NewsTypeContext";
import NextOffsetContext from "../../components/js/NextOffestContext";
import NewsDataContext from "../../components/js/NewsData.Context";

const Home = () => {
  const [isIntersecting, setIsIntersecting] = useState(null);
  const { newsType } = useContext(NewsTypeContext);
  const { nextOffset, setNextOffset } = useContext(NextOffsetContext);
  const [ifNewsData, setIfNewsData] = useState(true);
  const { newsData, setNewsData } = useContext(NewsDataContext);
  const NextRef = useRef(null);

  async function fetchNews(offsetNo) {
    let res = await fetch(API_NEWS_TYPE + newsType + `?offset_no=${offsetNo}`);
    let data = await res.json();
    if (!data.length) {
      setIfNewsData(false);
    } else {
      setIfNewsData(true);
    }
    setNewsData(newsData.concat(data));
  }

  useEffect(() => {
    let offsetNo = 0;
    fetchNews(offsetNo);
  }, [newsType, setNewsData]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(NextRef.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      setNextOffset(nextOffset + 12);
      if (ifNewsData) {
        fetchNews(nextOffset);
      }
    }
  }, [isIntersecting]);

  return (
    <>
      <Background />
      <NewsOutline newsData={newsData} />
      <Footer NextRef={NextRef} />
    </>
  );
};

export default Home;
