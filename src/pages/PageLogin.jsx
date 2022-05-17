import  AppContext  from "../AppContext";
import { useContext } from "react";
export function PageLogin() {
  const {siteStatus} = useContext(AppContext);
  return (
    <div className="page-login">
      <p>Status: {siteStatus}</p>
      <p>This is Login page</p>
    </div>
  );
}
