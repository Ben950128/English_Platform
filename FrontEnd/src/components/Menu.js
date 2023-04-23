import "./Menu.css";

const Menu = () => {
  const categoryArray = [
    "World",
    "Business",
    "Technology",
    "Science & Environment",
    "Entertainment & Arts",
    "Health",
  ];

  return (
    <div className="title_wrapper">
      <div className="categories_block">
        {categoryArray.map((category) => (
          <div key={category} className="label_font">
            {category}
          </div>
        ))}
      </div>
      <div className="login_block">
        <div className="label_font">登入/註冊</div>
      </div>
    </div>
  );
};

export default Menu;
