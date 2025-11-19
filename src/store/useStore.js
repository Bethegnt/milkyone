import { create } from 'zustand';

const MOCK_PRODUCTS = [
    {
        id: 'p1',
        name: 'A2 Cow Milk - Full Cream',
        category: 'milk',
        pricePerLitre: 70,
        packSizeLitres: 1,
        fatPercent: 6.0,
        snfPercent: 8.6,
        description: 'Pure, fresh A2 cow milk with high nutritional value. Perfect for daily consumption.',
        imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1000&auto=format&fit=crop',
        stock: 100
    },
    {
        id: 'p2',
        name: 'Buffalo Milk - Toned',
        category: 'milk',
        pricePerLitre: 68,
        packSizeLitres: 1,
        fatPercent: 5.2,
        snfPercent: 8.4,
        description: 'Rich and creamy buffalo milk, toned for a balanced diet.',
        imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1000&auto=format&fit=crop',
        stock: 80
    },
    {
        id: 'p3',
        name: 'Farm Fresh Ghee',
        category: 'ghee',
        pricePerLitre: 1200,
        packSizeLitres: 0.5,
        fatPercent: 99.5,
        snfPercent: 0,
        description: 'Traditional bilona method ghee with authentic aroma and taste.',
        imageUrl: 'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?q=80&w=1000&auto=format&fit=crop',
        stock: 50
    },
    {
        id: 'p4',
        name: 'Fresh Paneer',
        category: 'paneer',
        pricePerLitre: 400,
        packSizeLitres: 1,
        fatPercent: 20,
        snfPercent: 0,
        description: 'Soft and fresh paneer made from pure cow milk.',
        imageUrl: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=1000&auto=format&fit=crop',
        stock: 30
    }
];

const MOCK_CUSTOMERS = [
    { id: 'c1', name: 'Ramesh Kumar', phone: '9999999999', email: 'ramesh@example.com', loyaltyPoints: 150, addresses: [] },
    { id: 'c2', name: 'Suresh Singh', phone: '8888888888', email: 'suresh@example.com', loyaltyPoints: 50, addresses: [] }
];

const MOCK_ORDERS = [
    {
        id: 'o1',
        customerId: 'c1',
        customerName: 'Ramesh Kumar',
        items: [{ productId: 'p1', qtyLitres: 2, pricePerLitre: 70 }],
        totalAmount: 140,
        status: 'delivered',
        deliveryDate: '2025-11-18',
        createdAt: '2025-11-18T08:00:00Z'
    },
    {
        id: 'o2',
        customerId: 'c2',
        customerName: 'Suresh Singh',
        items: [{ productId: 'p2', qtyLitres: 1, pricePerLitre: 68 }],
        totalAmount: 68,
        status: 'pending',
        deliveryDate: '2025-11-20',
        createdAt: '2025-11-19T10:30:00Z'
    }
];

const MOCK_COLLECTIONS = [
    { id: 'col1', farmId: 'f1', date: '2025-11-19', litres: 120, fatPercentAvg: 5.4, snfPercentAvg: 8.5 },
    { id: 'col2', farmId: 'f1', date: '2025-11-18', litres: 115, fatPercentAvg: 5.2, snfPercentAvg: 8.4 },
    { id: 'col3', farmId: 'f1', date: '2025-11-17', litres: 125, fatPercentAvg: 5.5, snfPercentAvg: 8.6 },
    { id: 'col4', farmId: 'f1', date: '2025-11-16', litres: 118, fatPercentAvg: 5.3, snfPercentAvg: 8.5 },
    { id: 'col5', farmId: 'f1', date: '2025-11-15', litres: 122, fatPercentAvg: 5.4, snfPercentAvg: 8.5 }
];

export const useStore = create((set) => ({
    products: MOCK_PRODUCTS,
    cart: [],
    user: null, // { id, name, role: 'customer' | 'admin' }
    customers: MOCK_CUSTOMERS,
    orders: MOCK_ORDERS,
    collections: MOCK_COLLECTIONS,
    subscriptions: [],

    // Cart Actions
    addToCart: (product, qty = 1) => set((state) => {
        const existingItem = state.cart.find(item => item.id === product.id);
        if (existingItem) {
            return {
                cart: state.cart.map(item =>
                    item.id === product.id ? { ...item, qty: item.qty + qty } : item
                )
            };
        }
        return { cart: [...state.cart, { ...product, qty }] };
    }),
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
    })),
    clearCart: () => set({ cart: [] }),

    // Subscription Actions
    addSubscription: (plan) => set((state) => ({
        subscriptions: [...state.subscriptions, { ...plan, id: `sub_${Date.now()}`, status: 'active' }]
    })),

    // User Actions
    login: (role = 'customer') => set({
        user: {
            id: 'u1',
            name: role === 'admin' ? 'Admin User' : 'Demo Customer',
            role
        }
    }),
    logout: () => set({ user: null }),

    // Admin Actions
    addCollection: (entry) => set((state) => ({
        collections: [entry, ...state.collections]
    })),
    updateOrderStatus: (orderId, status) => set((state) => ({
        orders: state.orders.map(o => o.id === orderId ? { ...o, status } : o)
    }))
}));
