import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import Button from '../components/atoms/Button';
import Badge from '../components/atoms/Badge';
import { ShoppingCart, FileText, ArrowLeft, Check } from 'lucide-react';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const { products, addToCart } = useStore();
    const product = products.find(p => p.id === id);

    if (!product) return <div className="text-center py-20">Product not found</div>;

    return (
        <div className="max-w-6xl mx-auto">
            <Link to="/products" className="inline-flex items-center text-slate-500 hover:text-primary mb-8">
                <ArrowLeft size={20} className="mr-2" />
                Back to Products
            </Link>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Image Section */}
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-96 object-contain rounded-xl"
                    />
                </div>

                {/* Details Section */}
                <div className="space-y-8">
                    <div>
                        <Badge variant="primary" className="mb-4 text-sm px-3 py-1">{product.category}</Badge>
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
                        <p className="text-lg text-slate-600 leading-relaxed">{product.description}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-2xl">
                            <span className="text-sm text-blue-600 font-medium">Fat Content</span>
                            <p className="text-2xl font-bold text-blue-900">{product.fatPercent}%</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-2xl">
                            <span className="text-sm text-purple-600 font-medium">SNF Content</span>
                            <p className="text-2xl font-bold text-purple-900">{product.snfPercent}%</p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <span className="text-slate-500 text-sm">Pack Size</span>
                                <p className="font-medium text-slate-900">{product.packSizeLitres} Litre</p>
                            </div>
                            <div className="text-right">
                                <span className="text-slate-500 text-sm">Price</span>
                                <p className="text-3xl font-bold text-slate-900">₹{product.pricePerLitre}</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button
                                size="lg"
                                className="flex-1"
                                onClick={() => addToCart(product)}
                                icon={ShoppingCart}
                            >
                                Add to Cart
                            </Button>
                            <Link to="/subscribe" className="flex-1">
                                <Button size="lg" variant="secondary" className="w-full">
                                    Subscribe
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Lab Report Mock */}
                    <div className="border-t border-slate-200 pt-8">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <FileText size={20} className="text-slate-400" />
                            Quality Assurance
                        </h3>
                        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                    <Check size={20} />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Lab Report #LR-{product.id.toUpperCase()}</p>
                                    <p className="text-xs text-slate-500">Tested on {new Date().toLocaleDateString()}</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-blue-600">Download PDF</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
