import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./Firebase/FirebaseConnect";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the current user
      setLoading(false); // Stop loading once the auth state is determined
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  if (loading) {
    // Show a loading indicator while checking the authentication state
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to Home if user is logged in, otherwise SignIn */}

        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/signin" replace />}
        />

        {/* Redirect to Home if user is logged in, otherwise render SignIn */}
        <Route
          path="/signin"
          element={user ? <Navigate to="/" replace /> : <SignIn />}
        />

        {/* Redirect to SignIn if user is logged in, otherwise render SignUp */}
        <Route
          path="/signup"
          element={user ? <Navigate to="/signin" replace /> : <SignUp />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
