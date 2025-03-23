import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
const App = () => {
  return (
    <div className="w-full xl:h-screen flex items-center relative xl:p-7 py-0 px-2">
      <Sidebar />
      <div className="w-[calc(100%-80px)] h-full bg-background xl:ml-[250px] ml-[70px] xl:rounded-2xl flex xl:flex-row flex-col items-start border border-main-border/70">
        <Dashboard />
        <Profile />
      </div>
    </div>
  );
};

export default App;
