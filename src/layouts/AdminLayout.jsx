import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Package, FileText, LogOut, Milk } from 'lucide-react';
import { useStore } from '../store/useStore';

const AdminLayout = () => {
    const { user, logout } = useStore();
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        if (!user || user.role !== 'admin') {
            navigate('/');
        }
    }, [user, navigate]);

    const sidebarLinks = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Orders', path: '/admin/orders', icon: Package },
        { name: 'Customers', path: '/admin/customers', icon: Users },
        { name: 'Collections', path: '/admin/collections', icon: Milk },
        { name: 'Reports', path: '/admin/reports', icon: FileText },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 fixed h-full z-10 hidden lg:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-slate-200">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
                            <Milk size={20} strokeWidth={2.5} />
                        </div>
                        <span className="text-lg font-bold text-slate-900">MilkyOne Admin</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {sidebarLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location.pathname === link.path
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                        >
                            <link.icon size={20} />
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <button
                        onClick={() => { logout(); navigate('/'); }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 w-full transition-colors"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 min-h-screen">
                <header className="h-16 bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-20 px-6 flex items-center justify-between lg:justify-end">
                    <div className="lg:hidden">
                        {/* Mobile Menu Trigger Placeholder */}
                        <Milk size={24} className="text-primary" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-medium text-slate-900">{user?.name}</p>
                            <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                            <img src={`https://ui-avatars.com/api/?name=${user?.name}&background=random`} alt="Admin" />
                        </div>
                    </div>
                </header>
                <div className="p-6 max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
