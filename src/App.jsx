import React from 'react';
import { Milk, LayoutDashboard, Users, Package, FileText, Bell } from 'lucide-react';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary/20">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 h-16 flex items-center px-6 justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-xl text-primary">
                        <Milk size={24} strokeWidth={2.5} />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        MilkyOne
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent p-[2px]">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 px-6 max-w-7xl mx-auto pb-10">
                {/* Hero Section */}
                <section className="mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Good Morning, Admin 👋</h1>
                    <p className="text-slate-500">Here's what's happening at your dairy today.</p>
                </section>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {[
                        { label: 'Daily Milk Collected', value: '450 L', icon: Milk, color: 'text-blue-500', bg: 'bg-blue-50' },
                        { label: 'Active Farmers', value: '24', icon: Users, color: 'text-green-500', bg: 'bg-green-50' },
                        { label: 'Pending Orders', value: '12', icon: Package, color: 'text-purple-500', bg: 'bg-purple-50' },
                        { label: 'Today\'s Revenue', value: '$1,240', icon: FileText, color: 'text-orange-500', bg: 'bg-orange-50' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                                    <stat.icon size={24} />
                                </div>
                                <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded-full text-slate-600">+2.5%</span>
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                            <p className="text-sm text-slate-500">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Placeholder for Dashboard Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-8 h-96 flex items-center justify-center text-slate-400">
                        Chart Area Placeholder
                    </div>
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 h-96 flex items-center justify-center text-slate-400">
                        Recent Activity Placeholder
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
