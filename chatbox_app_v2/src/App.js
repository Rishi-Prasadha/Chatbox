import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AccountSettings1 from "./pages/AccountSettings1";
import AccountSettings from "./pages/AccountSettings";
import Settings from "./pages/Settings";
import SearchScreen from "./pages/SearchScreen";
import Profile from "./pages/Profile";
import SearchHistory from "./pages/SearchHistory";
import Home from "./pages/Home";
import SignUpScreen1 from "./pages/SignUpScreen1";
import Profile1 from "./pages/Profile1";
import SignUpScreen from "./pages/SignUpScreen";
import SignInScreen from "./pages/SignInScreen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/account-settings":
        title = "";
        metaDescription = "";
        break;
      case "/settings":
        title = "";
        metaDescription = "";
        break;
      case "/search-screen":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/search-history":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/signup-screen1":
        title = "";
        metaDescription = "";
        break;
      case "/-profile":
        title = "";
        metaDescription = "";
        break;
      case "/signup-screen":
        title = "";
        metaDescription = "";
        break;
      case "/sign-in-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AccountSettings1 />} />
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/search-screen" element={<SearchScreen />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search-history" element={<SearchHistory />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup-screen1" element={<SignUpScreen1 />} />
      <Route path="/-profile" element={<Profile />} />
      <Route path="/signup-screen" element={<SignUpScreen />} />
      <Route path="/sign-in-screen" element={<SignInScreen />} />
    </Routes>
  );
}
export default App;
