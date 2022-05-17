import { createContext, useState } from "react";
const AppContext = createContext();
export function AppProvider({ children }) {
  const [siteStatus, setSiteStatus] = useState("development");
  const toggleStatus = () => {
    setSiteStatus(siteStatus === "development" ? "live" : "development");
  };
  return (
    <AppContext.Provider value={{ siteStatus, toggleStatus, setSiteStatus }}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContext;
