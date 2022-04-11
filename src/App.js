import React from "react"
import './App.css';
import { Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header'
import StoriesPage from "./pages/StoriesPage/StoriesPage";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import SavedStores from "./pages/SavedStores/SavedStores";
import LikedProducts from "./pages/LikedProducts/LikedProducts";
import ViewProducts from "./pages/ViewProducts/ViewProducts";
import WalletHistory from "./pages/WalletHistory/WalletHistory";
import ProfilSetting from "./pages/ProfilSetting/ProfilSetting";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='app-body'>
          <div className="sidebar-section">
            <SideBar />
          </div>
          <div className="right-section">
            <div className="app-header">
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<StoriesPage />} />
              <Route path="/orders" element={<OrderHistory />} />
              <Route path="/saveds" element={<SavedStores />} />
              <Route path="/likes" element={<LikedProducts />} />
              <Route path="/views" element={<ViewProducts />} />
              <Route path="/wallets" element={<WalletHistory />} />
              <Route path="/profil" element={<ProfilSetting />} />

            </Routes>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
