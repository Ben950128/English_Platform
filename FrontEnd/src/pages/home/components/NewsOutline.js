const NewsOutline = ({ newsData }) => {
  console.log(newsData);
  return (
    <div>
      {newsData.map((item) => {
        const { title, date, news_id } = item;
        return <div key={news_id}>{`${title} ${date}`}</div>;
      })}
    </div>
  );
};

export default NewsOutline;
