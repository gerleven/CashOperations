import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>Root</h1>
      <Outlet />
    </>
  );
}
