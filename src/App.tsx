import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeToggler/theme-provider";
import { ForecastProvider } from "./hooks/useForecast";
import Layout from "./layout/Layout";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <ForecastProvider>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="theme">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </ForecastProvider>
  );
}

export default App;
