import { Outlet } from "react-router-dom";
import "../App.css";
import Banner from "../components/banner";

export default function Root() {
  return (
    <>
      <div className="fullscreen">
        <div className="app-wrapper">
          <Banner></Banner>
          <h1>Root</h1>
          <div className="app">
            <h3>Mercado Pago</h3>
          </div>
          <div className="app-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
