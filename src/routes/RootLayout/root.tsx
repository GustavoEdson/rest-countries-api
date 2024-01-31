import { Outlet } from "react-router-dom";
import { NavBar, Theme } from "./style";
import moon from "../../assets/moon.svg";

export default function RootLayout() {
  return (
    <>
      <header>
        <NavBar>
          <h1>Where in the world</h1>
          <Theme>
            <img src={moon} alt="" />
            dark mode
          </Theme>
        </NavBar>
      </header>
      <Outlet />
    </>
  );
}
