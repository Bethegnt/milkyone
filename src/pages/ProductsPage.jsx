import React from 'react';
import { useStore } from '../store/useStore';
import ProductCard from '../components/molecules/ProductCard';
import { Search } from 'lucide-react';

const ProductsPage = () => {
    const products = useStore((state) => state.products);
    const [filter, setFilter] = React.useState('all');
    const [search, setSearch] = React.useState('');

    const categories = ['all', 'milk', 'ghee', 'paneer', 'curd'];

    const filteredProducts = products.filter(p => {
        const matchesCategory = filter === 'all' || p.category === filter;
        const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Our Products</h1>
                    <p className="text-slate-500">Fresh and organic dairy products for your family.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-64"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* Filter */}
                    <div className="flex bg-white p-1 rounded-full border border-slate-200 overflow-x-auto max-w-full">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-colors whitespace-nowrap ${filter === cat
                                        ? 'bg-primary text-white shadow-md'
                                        : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-slate-400 text-lg">No products found matching your criteria.</p>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
