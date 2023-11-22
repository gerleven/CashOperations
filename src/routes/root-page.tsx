import { Outlet } from "react-router-dom";
import "../App.css";
import Banner from "../components/banner";

export default function Root() {
  return (
    <>
      <div className="fullscreen">
        <div className="app-wrapper">
          <Banner></Banner>
          <div className="app-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
