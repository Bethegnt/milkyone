import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import AdminLayout from './layouts/AdminLayout';

// Placeholder Pages
const HomePage = () => <div className="text-center py-20"><h1 className="text-4xl font-bold text-slate-900">Welcome to MilkyOne</h1><p className="mt-4 text-slate-500">Fresh Milk Delivered to Your Doorstep</p></div>;
const ProductsPage = () => <div className="text-center py-20"><h1 className="text-3xl font-bold">Our Products</h1></div>;
const ProductDetailsPage = () => <div className="text-center py-20"><h1>Product Details</h1></div>;
const SubscribePage = () => <div className="text-center py-20"><h1>Subscribe</h1></div>;
const CartPage = () => <div className="text-center py-20"><h1>Your Cart</h1></div>;

const AdminDashboard = () => <div className="text-center py-20"><h1 className="text-3xl font-bold">Admin Dashboard</h1></div>;
const AdminOrders = () => <div>Admin Orders</div>;
const AdminCustomers = () => <div>Admin Customers</div>;
const AdminCollections = () => <div>Admin Collections</div>;

function App() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="products/:id" element={<ProductDetailsPage />} />
                <Route path="subscribe" element={<SubscribePage />} />
                <Route path="cart" element={<CartPage />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="customers" element={<AdminCustomers />} />
                <Route path="collections" element={<AdminCollections />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
