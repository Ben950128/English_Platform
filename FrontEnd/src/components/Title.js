import "./Title.css";

const Title = () => {
  const titleList = [
    "World",
    "Business",
    "Technology",
    "Science & Environment",
    "Entertainment & Arts",
    "Health",
  ];

  return (
    <div className="title_wrapper">
      <div className="news_title_font">News</div>
      <div className="categories_block">
        {titleList.map((title) => (
          <div key={title} className="label_font">
            {title}
          </div>
        ))}
      </div>
      <div className="login_block">
        <div className="label_font">登入/註冊</div>
      </div>
    </div>
  );
};

export default Title;
