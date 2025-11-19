import React from 'react';
import { useStore } from '../store/useStore';
import AdminStatCard from '../components/molecules/AdminStatCard';
import { Users, ShoppingBag, Droplets, IndianRupee } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

import CollectionInputForm from '../components/organisms/CollectionInputForm';

const AdminDashboard = () => {
    const { customers, orders, collections } = useStore();

    // Calculate KPIs
    const totalCustomers = customers.length;
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);
    const todayCollection = collections.find(c => c.date === new Date().toISOString().split('T')[0])?.litres || 0;

    // Chart Data Preparation
    const collectionData = collections.slice().reverse().map(c => ({
        date: c.date.split('-').slice(1).join('/'),
        litres: c.litres,
        fat: c.fatPercentAvg
    }));

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                <p className="text-slate-500">Welcome back, here's what's happening today.</p>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AdminStatCard
                    title="Total Customers"
                    value={totalCustomers}
                    icon={Users}
                    color="blue"
                    delta="+12%"
                />
                <AdminStatCard
                    title="Total Orders"
                    value={totalOrders}
                    icon={ShoppingBag}
                    color="purple"
                    delta="+5%"
                />
                <AdminStatCard
                    title="Today's Collection"
                    value={`${todayCollection} L`}
                    icon={Droplets}
                    color="green"
                    delta="-2%"
                />
                <AdminStatCard
                    title="Total Revenue"
                    value={`₹${totalRevenue}`}
                    icon={IndianRupee}
                    color="orange"
                    delta="+8%"
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Collection Input Form */}
                <div className="lg:col-span-1">
                    <CollectionInputForm />
                </div>

                {/* Milk Collection Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Milk Collection Trends</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={collectionData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    cursor={{ fill: '#f8fafc' }}
                                />
                                <Bar dataKey="litres" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={32} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Fat % Trend Chart */}
            {/* This chart was removed as per the instruction's new layout */}

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Orders Table */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900">Recent Orders</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-500">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Order ID</th>
                                    <th className="px-6 py-4 font-medium">Customer</th>
                                    <th className="px-6 py-4 font-medium">Amount</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {orders.slice(0, 5).map((order) => (
                                    <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">#{order.id}</td>
                                        <td className="px-6 py-4 text-slate-600">{order.customerName}</td>
                                        <td className="px-6 py-4 font-bold text-slate-900">₹{order.totalAmount}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                          ${order.status === 'delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}
                        `}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Customers */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100">
                        <h3 className="text-lg font-bold text-slate-900">Top Customers</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-500">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Customer</th>
                                    <th className="px-6 py-4 font-medium">Loyalty Pts</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {customers.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">{customer.name}</td>
                                        <td className="px-6 py-4 text-slate-600">{customer.loyaltyPoints}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                                Active
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
