import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
// import Asosiypage from "./Pages/AsosiyPage";
import NewsProvider from "./context/newsadd";
import Maxsulotlarpage from "./Pages/Maxsulotlarpage";
import Korzinkapage from "./Pages/Korzinkapage";
// import Productspage from "./Pages/Productspage"
import Addpage from "./Pages/Addpage";
import LoginPage from "./Pages/LoginPage";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AsosiyPage from "./Pages/Asosiypage";

function  PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
}
function App() {
  return (
   <AuthProvider>
     <NewsProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>  
            <Route index element={<AsosiyPage />} />
            <Route path="korzinkapage" element={<Korzinkapage />} />
            {/* <Route path="productspage" element={<Productspage/>}/> */}
            <Route path="maxsulotlarpage" element={<Maxsulotlarpage />} />
            <Route path="addpage" element={<PrivateRoute><Addpage /></PrivateRoute>} />

          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </NewsProvider>
   </AuthProvider>
  );
}

export default App;


