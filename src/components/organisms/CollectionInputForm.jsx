import React from 'react';
import { useStore } from '../../store/useStore';
import Button from '../atoms/Button';
import { Plus } from 'lucide-react';

const CollectionInputForm = () => {
    const addCollection = useStore((state) => state.addCollection);
    const [formData, setFormData] = React.useState({
        litres: '',
        fat: '',
        snf: '',
        date: new Date().toISOString().split('T')[0]
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addCollection({
            id: `col_${Date.now()}`,
            farmId: 'f1',
            date: formData.date,
            litres: Number(formData.litres),
            fatPercentAvg: Number(formData.fat),
            snfPercentAvg: Number(formData.snf)
        });
        setFormData({ ...formData, litres: '', fat: '', snf: '' });
        alert('Collection added successfully!');
    };

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Add Daily Collection</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                        <input
                            type="date"
                            required
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                            value={formData.date}
                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Litres Collected</label>
                        <input
                            type="number"
                            required
                            placeholder="0.0"
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                            value={formData.litres}
                            onChange={e => setFormData({ ...formData, litres: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Avg Fat %</label>
                        <input
                            type="number"
                            step="0.1"
                            required
                            placeholder="0.0"
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                            value={formData.fat}
                            onChange={e => setFormData({ ...formData, fat: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Avg SNF %</label>
                        <input
                            type="number"
                            step="0.1"
                            required
                            placeholder="0.0"
                            className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/50 focus:outline-none"
                            value={formData.snf}
                            onChange={e => setFormData({ ...formData, snf: e.target.value })}
                        />
                    </div>
                </div>
                <Button type="submit" className="w-full" icon={Plus}>
                    Add Entry
                </Button>
            </form>
        </div>
    );
};

export default CollectionInputForm;
