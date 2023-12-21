  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Header from './components/headers/header';
  import NavigationBar from './components/navigation/navigationBar';
  import Footer from './components/footers/footer';
  import routes from './pages/routes';

  // import MainContent from './components/contents/mainContent';

  import NotFound from './pages/404';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faSearch, faPlus, faSignInAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';

  library.add(faSearch, faPlus, faSignInAlt, faGlobe);

  function App() {
    return (
      <Router>
        <div className="flex flex-col h-screen mx-auto max-w-full">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <div className="flex flex-col md:flex-row flex-grow">
            {/* Navigation Bar (Left Column) */}
            <div className="md:w-2/12 bg-gray-200">
              <NavigationBar />
            </div>

            {/* Main Content Area (Right Column) */}
            <div className="flex-1 p-4 mx-auto">
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={<route.component />}
                  />
                ))}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    );
  }

  export default App;
