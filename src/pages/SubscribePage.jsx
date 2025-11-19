import React from 'react';
import { useStore } from '../store/useStore';
import Button from '../components/atoms/Button';
import { Calendar, Clock, Package } from 'lucide-react';

const SubscribePage = () => {
    const { products, addSubscription } = useStore();
    const [step, setStep] = React.useState(1);
    const [plan, setPlan] = React.useState({
        productId: '',
        frequency: 'daily',
        quantity: 1,
        startDate: '',
        timeSlot: 'morning'
    });

    const handleSubscribe = () => {
        addSubscription(plan);
        alert('Subscription started successfully!');
        // Redirect or reset
    };

    const selectedProduct = products.find(p => p.id === plan.productId);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Build Your Subscription Plan</h1>
                <p className="text-slate-500">Get fresh milk delivered to your doorstep automatically.</p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                {/* Progress Bar */}
                <div className="flex border-b border-slate-100">
                    {[1, 2, 3].map(i => (
                        <div
                            key={i}
                            className={`flex-1 h-2 ${step >= i ? 'bg-primary' : 'bg-slate-100'}`}
                        />
                    ))}
                </div>

                <div className="p-8">
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <Package className="text-primary" /> Select Product
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {products.map(product => (
                                    <div
                                        key={product.id}
                                        onClick={() => setPlan({ ...plan, productId: product.id })}
                                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${plan.productId === product.id
                                                ? 'border-primary bg-primary/5'
                                                : 'border-slate-100 hover:border-slate-200'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <img src={product.imageUrl} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                                            <div>
                                                <h3 className="font-bold text-slate-900">{product.name}</h3>
                                                <p className="text-slate-500 text-sm">₹{product.pricePerLitre} / {product.packSizeLitres}L</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end pt-6">
                                <Button onClick={() => setStep(2)} disabled={!plan.productId}>Next Step</Button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <Calendar className="text-primary" /> Schedule & Quantity
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Frequency</label>
                                    <div className="flex gap-4">
                                        {['daily', 'alternate', 'weekly'].map(freq => (
                                            <button
                                                key={freq}
                                                onClick={() => setPlan({ ...plan, frequency: freq })}
                                                className={`px-6 py-3 rounded-xl font-medium capitalize transition-all ${plan.frequency === freq
                                                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                                    }`}
                                            >
                                                {freq}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Quantity (Litres)</label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setPlan(p => ({ ...p, quantity: Math.max(1, p.quantity - 0.5) }))}
                                            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-600 hover:bg-slate-200"
                                        >-</button>
                                        <span className="text-2xl font-bold text-slate-900 w-16 text-center">{plan.quantity}</span>
                                        <button
                                            onClick={() => setPlan(p => ({ ...p, quantity: p.quantity + 0.5 }))}
                                            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-600 hover:bg-slate-200"
                                        >+</button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Start Date</label>
                                    <input
                                        type="date"
                                        className="px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                                        onChange={(e) => setPlan({ ...plan, startDate: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between pt-6">
                                <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
                                <Button onClick={() => setStep(3)} disabled={!plan.startDate}>Next Step</Button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                <Clock className="text-primary" /> Review & Confirm
                            </h2>

                            <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Product</span>
                                    <span className="font-medium text-slate-900">{selectedProduct?.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Frequency</span>
                                    <span className="font-medium text-slate-900 capitalize">{plan.frequency}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Quantity</span>
                                    <span className="font-medium text-slate-900">{plan.quantity} Litres</span>
                                </div>
                                <div className="flex justify-between border-t border-slate-200 pt-4">
                                    <span className="font-bold text-slate-900">Estimated Monthly Cost</span>
                                    <span className="font-bold text-primary text-lg">
                                        ₹{(selectedProduct?.pricePerLitre * plan.quantity * 30).toFixed(0)}
                                    </span>
                                </div>
                            </div>

                            <div className="flex justify-between pt-6">
                                <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
                                <Button onClick={handleSubscribe} size="lg">Confirm Subscription</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubscribePage;
