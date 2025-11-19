import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import AdminLayout from './layouts/AdminLayout';

import ProductDetailsPage from './pages/ProductDetailsPage';
import SubscribePage from './pages/SubscribePage';
import CartPage from './pages/CartPage';

// Placeholder Pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));

const AdminOrders = () => <div>Admin Orders</div>;
const AdminCustomers = () => <div>Admin Customers</div>;
const AdminCollections = () => <div>Admin Collections</div>;

function App() {
    return (
        <React.Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
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
        </React.Suspense>
    );
}

export default App;
