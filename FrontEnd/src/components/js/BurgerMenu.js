import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../css/BurgerMenu.css";

const BurgerMenu = ({ categoryObject, redirectTypeUrl }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="burger_wrap">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img id="burger_icon" src="/burger-bar.png" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Object.keys(categoryObject).map((category) => (
          <MenuItem
            key={category}
            className="label_font"
            onClick={() => {
              handleClose();
              redirectTypeUrl(category);
            }}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default BurgerMenu;
