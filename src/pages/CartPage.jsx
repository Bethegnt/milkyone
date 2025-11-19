import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import Button from '../components/atoms/Button';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useStore();

    const total = cart.reduce((acc, item) => acc + (item.pricePerLitre * item.qty), 0);

    if (cart.length === 0) {
        return (
            <div className="text-center py-20">
                <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                    <ShoppingBag size={48} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
                <p className="text-slate-500 mb-8">Looks like you haven't added any products yet.</p>
                <Link to="/products">
                    <Button size="lg">Browse Products</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                            <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900">{item.name}</h3>
                                <p className="text-slate-500 text-sm">{item.qty} Litres x ₹{item.pricePerLitre}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-slate-900 mb-2">₹{item.pricePerLitre * item.qty}</p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Order Summary</h3>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-slate-600">
                                <span>Subtotal</span>
                                <span>₹{total}</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Delivery</span>
                                <span className="text-green-600">Free</span>
                            </div>
                            <div className="border-t border-slate-100 pt-3 flex justify-between font-bold text-slate-900 text-lg">
                                <span>Total</span>
                                <span>₹{total}</span>
                            </div>
                        </div>
                        <Button className="w-full mb-3" size="lg" icon={ArrowRight} onClick={() => alert('Checkout functionality coming soon!')}>
                            Checkout
                        </Button>
                        <Button variant="ghost" className="w-full text-red-500 hover:bg-red-50 hover:text-red-600" onClick={clearCart}>
                            Clear Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
