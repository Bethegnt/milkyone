import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Droplets, Info } from 'lucide-react';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import { useStore } from '../../store/useStore';

const ProductCard = ({ product }) => {
    const addToCart = useStore((state) => state.addToCart);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden flex flex-col"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                    <Badge variant="primary" className="backdrop-blur-md bg-white/90">
                        {product.category}
                    </Badge>
                </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{product.name}</h3>
                </div>

                <p className="text-sm text-slate-500 mb-4 line-clamp-2 flex-1">{product.description}</p>

                <div className="flex items-center gap-3 mb-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">
                        <Droplets size={14} className="text-blue-500" />
                        <span>Fat: {product.fatPercent}%</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg">
                        <Info size={14} className="text-purple-500" />
                        <span>SNF: {product.snfPercent}%</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div className="flex flex-col">
                        <span className="text-xs text-slate-400">Price ({product.packSizeLitres}L)</span>
                        <span className="text-lg font-bold text-slate-900">₹{product.pricePerLitre}</span>
                    </div>
                    <div className="flex gap-2">
                        <Link to={`/products/${product.id}`}>
                            <Button size="sm" variant="secondary">Details</Button>
                        </Link>
                        <Button
                            size="sm"
                            onClick={() => addToCart(product)}
                            icon={ShoppingCart}
                        >
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
