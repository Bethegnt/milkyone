import React, { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Button from '../atoms/Button';
import { X, Mail, Phone, Chrome } from 'lucide-react';

const LoginModal = ({ onClose }) => {
    const [step, setStep] = useState('choose');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const signInWithEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOtp({ email });
        setLoading(false);
        if (error) setMessage(error.message);
        else setMessage('Check your email for the login link');
    };

    const signInWithPhone = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOtp({ phone });
        setLoading(false);
        if (error) setMessage(error.message);
        else setMessage('Check your phone for OTP');
    };

    const signInWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
        if (error) setMessage(error.message);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <X size={20} className="text-slate-500" />
                </button>

                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">🥛</div>
                    <h3 className="text-2xl font-bold text-slate-900">Welcome to MilkyOne</h3>
                    <p className="text-slate-500 mt-2">Sign in to manage your subscriptions</p>
                </div>

                {step === 'choose' && (
                    <div className="space-y-3">
                        <Button
                            className="w-full justify-center"
                            onClick={() => setStep('phone')}
                            icon={Phone}
                        >
                            Continue with Phone
                        </Button>
                        <Button
                            variant="secondary"
                            className="w-full justify-center"
                            onClick={() => setStep('email')}
                            icon={Mail}
                        >
                            Continue with Email
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full justify-center border border-slate-200"
                            onClick={signInWithGoogle}
                            icon={Chrome}
                        >
                            Continue with Google
                        </Button>
                    </div>
                )}

                {step === 'email' && (
                    <form onSubmit={signInWithEmail} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="flex gap-3 pt-2">
                            <Button variant="ghost" onClick={() => setStep('choose')} className="flex-1">Back</Button>
                            <Button type="submit" className="flex-1" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Link'}
                            </Button>
                        </div>
                    </form>
                )}

                {step === 'phone' && (
                    <form onSubmit={signInWithPhone} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                                placeholder="+91 99999 99999"
                            />
                            <p className="text-xs text-slate-400 mt-1">Format: +919999999999</p>
                        </div>
                        <div className="flex gap-3 pt-2">
                            <Button variant="ghost" onClick={() => setStep('choose')} className="flex-1">Back</Button>
                            <Button type="submit" className="flex-1" disabled={loading}>
                                {loading ? 'Sending...' : 'Send OTP'}
                            </Button>
                        </div>
                    </form>
                )}

                {message && (
                    <div className="mt-6 p-4 bg-blue-50 text-blue-700 rounded-xl text-sm text-center">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginModal;
