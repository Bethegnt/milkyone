import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Truck, ShieldCheck, Leaf } from 'lucide-react';
import Button from '../components/atoms/Button';

const HomePage = () => {
    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-28">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                            Fresh from Farm to Table 🥛
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                            Purest Milk for <br />
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Healthy Family
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                            Experience the taste of 100% organic, preservative-free milk delivered straight from our happy cows to your doorstep every morning.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/subscribe">
                                <Button size="lg" icon={ArrowRight}>Start Subscription</Button>
                            </Link>
                            <Link to="/products">
                                <Button variant="secondary" size="lg">View Products</Button>
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-500">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500" size={20} />
                                <span>No Preservatives</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500" size={20} />
                                <span>Lab Tested</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500" size={20} />
                                <span>Free Delivery</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl transform translate-x-10 translate-y-10" />
                        <img
                            src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop"
                            alt="Milk Bottle"
                            className="relative z-10 rounded-3xl shadow-2xl shadow-primary/20 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose MilkyOne?</h2>
                    <p className="text-slate-500">We ensure the highest quality standards at every step of the process.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Leaf, title: '100% Organic', desc: 'Our cows graze on organic pastures, ensuring chemical-free milk.' },
                        { icon: ShieldCheck, title: 'Quality Tested', desc: 'Every batch undergoes 25+ quality checks before delivery.' },
                        { icon: Truck, title: 'Morning Delivery', desc: 'Guaranteed delivery before 7 AM every single day.' },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to switch to healthy milk?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Join 5000+ happy families who trust MilkyOne for their daily dairy needs.</p>
                    <Link to="/subscribe">
                        <Button size="lg" className="bg-white text-primary hover:bg-blue-50 shadow-xl shadow-black/10">
                            Get Started Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
