import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Mainheader from "./components/Mainheader";
import Contentsection from "./components/Contentsection";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ecomm from "./components/Ecomm";
import Analytics from "./components/Analytics";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar is visible by default
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setIsSmallScreen(true);
        setSidebarOpen(false); // Hide sidebar by default for small screens
      } else {
        setIsSmallScreen(false);
        setSidebarOpen(true); // Show sidebar by default for larger screens
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
     <Router>
          <div className="flex min-h-screen bg-[#F1F5F9]">
            <div
              className={`${
                sidebarOpen ? "block" : "hidden"
              } min-h-screen w-72`}
            >
              <Sidebar toggleSidebar={toggleSidebar} />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="w-full h-[75px] sticky top-0">
                <Mainheader toggleSidebar={toggleSidebar} />
              </div>

              <div className="flex-1 min-h-screen min-w-screen justify-center items-center p-5">
              <Routes>
              <Route path="/" element={<Ecomm />} />
              <Route path="/analytics" element={<Analytics />} />
              
            </Routes>
              </div>
            </div>
          </div>
          </Router>
    </>
  );
}

export default App;
