import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
