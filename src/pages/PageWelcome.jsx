import  AppContext from "../AppContext"
import { useContext } from "react";
export function PageWelcome() {
  const {siteStatus,toggleStatus}=useContext(AppContext);
  return <>
  <h1>This is Welcome page</h1>
  <p>Status: {siteStatus} <button onClick={toggleStatus}>Toggle</button></p></>;
}
