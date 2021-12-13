import React, { useEffect, useState } from "react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Posts from "./pages/Posts";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      return fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    };

    getUser()
      .then((response) => {
        if (!response.ok) {
          throw new Error("Authentication failed!");
        }

        return response.json();
      })
      .then((data) => setUser(data.user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout user={user}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <LoginPage />}
        />
        <Route
          path="/posts/:postId"
          element={user ? <Posts /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
