import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/orderList";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard with right panel */}
        <Route 
          path="/" 
          element={
            <Layout>
              <Dashboard />
            </Layout>
          } 
        />
        
        {/* Order List without right panel */}
        <Route 
          path="/orders" 
          element={
            <Layout showRightPanel={false}>
              <OrderList />
            </Layout>
          } 
        />
      </Routes>
    </Router>
  );
}