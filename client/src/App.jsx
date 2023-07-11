import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Admin from "./components/Admin";
// import Dashboard from './components/Dashboard';
import DashContainer from "./container/DashContainer";
import Gene from "./components/Gene";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Addmovies from "./components/Addmovies";
console.log("store", store);

export default function App() {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const admin = JSON.parse(window.localStorage.getItem("admin"));
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/add" element={<Addmovies />} />
            {/* <Route path="/dash" element={<DashContainer />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Home />} />
            <Route path="/gen" element={<Gene />} /> */}
            {user || admin ? (
              <Route
                path="/signin"
                element={
                  <>
                    <h3>Unable to access this page right now</h3>
                  </>
                }
              />
            ) : (
              <Route path="/signin" element={<Signin />} />
            )}
            /
            {user || admin ? (
              <Route
                path="/signup"
                element={
                  <>
                    <h3>Unable to access this page right now</h3>
                  </>
                }
              />
            ) : (
              <Route path="/signup" element={<Signup />} />
            )}
            {user ? (
              <Route
                path="/admin"
                element={
                  <>
                    <h1>404 error</h1>
                  </>
                }
              />
            ) : (
              <Route path="/admin" element={<Admin />} />
            )}
            <Route path="/" element={<Home />} />
            {user || admin ? (
              <Route path="/gen" element={<Gene />} />
            ) : (
              <Route
                path="/gen"
                element={
                  <>
                    <h3>Unable to access this page right now</h3>
                  </>
                }
              />
            )}
            {user || admin ? (
              <Route path="/dash" element={<DashContainer />} />
            ) : (
              <Route
                path="/dash"
                element={
                  <>
                    <h3>Unable to access this page right now</h3>
                  </>
                }
              />
            )}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
