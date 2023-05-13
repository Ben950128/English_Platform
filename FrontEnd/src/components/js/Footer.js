import "../css/Footer.css";

const Footer = ({ NextRef }) => {
  return (
    <footer className="page_bottom">
      <div ref={NextRef}>
        <div id="footer_description_1">資料來源 : https://www.bbc.com/news</div>
        <div id="footer_description_2">本網站僅為練習使用，無商業用途</div>
      </div>
    </footer>
  );
};

export default Footer;
