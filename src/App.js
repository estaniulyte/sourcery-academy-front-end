import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/header";
import Footer from "components/footer";
import { useAuth } from "features/userData";
import { PrivateRoutes, PublicRoutes } from "routes";
import ScrollToTop from "utils/ScrollToTop";

const App = () => {
  const { isLoggedIn, isLoading } = useAuth();

  return (
    !isLoading && (
      <Router basename="/sourcery-academy-front-end">
        <ScrollToTop />
        <div className="app">
          {isLoggedIn ? (
            <>
              <Header />
              <div className="app__content">
                <PrivateRoutes />
              </div>
              <Footer />
            </>
          ) : (
            <PublicRoutes />
          )}
        </div>
      </Router>
    )
  );
};

export default App;
