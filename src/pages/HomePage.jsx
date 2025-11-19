import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ShieldCheck, Truck } from 'lucide-react';
import Button from '../components/atoms/Button';
import AdminStatCard from '../components/molecules/AdminStatCard';
import LoginModal from '../components/organisms/LoginModal';

const Hero = ({ onPrimaryCTA }) => {
    return (
        <section className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="text-center relative z-10 max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-4"
                >
                    <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                        FRESH FROM FARM 🐄
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
                >
                    Pure Milk, <span className="text-primary">Delivered Daily.</span>
                </motion.h1>
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-500 mb-8 leading-relaxed"
                >
                    Experience the taste of unadulterated, lab-tested milk delivered straight to your doorstep. Subscribe today and start your healthy journey.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link to="/products">
                        <Button size="lg" className="w-full sm:w-auto px-8">Shop Now</Button>
                    </Link>
                    <Link to="/subscribe">
                        <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8">Start Subscription</Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

const HomePage = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="space-y-16">
            <Hero onPrimaryCTA={() => { }} />

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AdminStatCard title="Litres Delivered Today" value={120} delta="+4%" color="blue" />
                <AdminStatCard title="Avg Fat Content" value={5.4} delta="-0.2%" color="green" />
                <AdminStatCard title="Active Subscriptions" value={48} delta="+2%" color="purple" />
            </section>

            {/* Features Section */}
            <section className="py-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">Why Choose MilkyOne?</h2>
                    <p className="text-slate-500 mt-2">We promise quality, purity, and convenience.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Lab Tested Quality", desc: "Every batch is tested for Fat & SNF content daily." },
                        { icon: Truck, title: "Free Delivery", desc: "Morning delivery to your doorstep before 7 AM." },
                        { icon: CheckCircle, title: "No Preservatives", desc: "100% natural milk with zero additives or processing." }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow"
                        >
                            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to switch to healthy milk?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">Join 500+ happy families who trust MilkyOne for their daily dairy needs.</p>
                    <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-blue-50 border-none"
                        onClick={() => setShowLogin(true)}
                    >
                        Get Started
                    </Button>
                </div>
                {/* Decorative circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            </section>

            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
        </div>
    );
};

export default HomePage;
