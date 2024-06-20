import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeToggler/theme-provider";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />{" "}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
