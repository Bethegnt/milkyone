```
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import Button from '../atoms/Button';
import { useStore } from '../../store/useStore';

const ProductCard = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }} 
      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col overflow-hidden group"
    >
      <div className="h-48 bg-slate-50 relative overflow-hidden flex items-center justify-center">
        {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
        ) : (
            <div className="text-6xl">🥛</div>
        )}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
            <span className="bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded-lg shadow-sm text-slate-600">
                {product.packSizeLitres}L
            </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
            <div className="flex gap-2 mt-2">
                <span className="text-xs font-medium px-2 py-1 bg-amber-50 text-amber-700 rounded-md border border-amber-100">
                    Fat: {product.fatPercent}%
                </span>
                <span className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-100">
                    SNF: {product.snfPercent}%
                </span>
            </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">Price</span>
            <span className="text-xl font-bold text-slate-900">₹{product.pricePerLitre}</span>
          </div>
          <div className="flex gap-2">
            <Link to={`/ products / ${ product.id } `}>
               <Button size="sm" variant="ghost" className="border border-slate-200">Details</Button>
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
```
