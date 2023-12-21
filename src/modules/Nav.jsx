import { useState, useEffect } from "react";

const MenuItem = ({ itemName }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <li className="text-slate-100 text-lg">
      <a href={`#${itemName}`} onClick={handleClick}>
        {itemName}
      </a>
    </li>
  );
};

function NavBar({ children }) {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="flex items-center">
      <nav>
        <button className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </button>
      </nav>

      <div className={menu_class}>{children}</div>
      <h1 className="text-slate-100 text-xl text-center mx-auto absolute top-1 right-2">
        <a href="https://github.com/alexwittwer/">a.w.</a>
      </h1>
    </div>
  );
}

export default function Nav() {
  return (
    <NavBar>
      <ul className="flex gap-1 text-sm ">
        <MenuItem itemName={"Tech"} />
        <MenuItem itemName={"Projects"} />
        <MenuItem itemName={"Photos"} />
      </ul>
    </NavBar>
  );
}
