'use client';

import React, { useState } from 'react';
import { Eye, Trash2, Plus, Search, Filter } from 'lucide-react';


// Static Data Structure
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
  image: string;
}


const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'AI-001',
    name: 'NeuralEdge AI Coprocessor Kit',
    category: 'Hardware',
    price: 499.00,
    stock: 25,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'AI-002',
    name: 'QuantumAI Developer Cloud Subscription',
    category: 'SaaS / Software',
    price: 89.99,
    stock: 500,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'AI-003',
    name: 'CogniVoice Smart Dictation Hub',
    category: 'Gadgets',
    price: 159.50,
    stock: 4,
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'AI-004',
    name: 'DeepVision Autonomous Drone Core',
    category: 'Robotics',
    price: 1250.00,
    stock: 0,
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'AI-005',
    name: 'Synapse Haptic VR Gloves',
    category: 'Hardware',
    price: 349.00,
    stock: 12,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'AI-006',
    name: 'BioTrack AI Health Band',
    category: 'Wearables',
    price: 199.99,
    stock: 85,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'AI-007',
    name: 'CyberShield ML Firewall Appliance',
    category: 'Security',
    price: 899.00,
    stock: 3,
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'AI-008',
    name: 'AeroFlow AI Smart Thermostat',
    category: 'IoT / Smart Home',
    price: 129.00,
    stock: 40,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'AI-009',
    name: 'Optima SEO AI Article Writer License',
    category: 'SaaS / Software',
    price: 29.00,
    stock: 1000,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 'AI-010',
    name: 'OmniBot LLM Local Server Module',
    category: 'Hardware',
    price: 2400.00,
    stock: 0,
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=150&auto=format&fit=crop&q=60',
  },
];

export default function ManageItemsPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this AI item?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 dark:bg-slate-900 text-slate-800 dark:text-slate-100">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Manage AI Items</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Central database for tracking next-gen AI assets, models, hardware, and tokens.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2.5 rounded-xl transition-colors shadow-sm text-sm">
            <Plus className="w-4 h-4" />
            Add AI Product
          </button>
        </div>

        {/* Filters & Search Utility Bar */}
        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search AI tools or systems..." 
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
          <div className="flex w-full md:w-auto gap-2 justify-end">
            <button className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors w-full md:w-auto justify-center">
              <Filter className="w-4 h-4 text-slate-500" />
              Filter Models
            </button>
          </div>
        </div>

        {/* Products Table (Desktop) / Cards (Mobile) */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm overflow-hidden">
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-700 bg-slate-50/75 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6">AI Product & ID</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Pricing</th>
                  <th className="py-4 px-6">Stock / Nodes</th>
                  <th className="py-4 px-6">Deployment Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-sm font-medium">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="py-4 px-6 flex items-center gap-3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-11 h-11 rounded-lg object-cover bg-slate-100 dark:bg-slate-900"
                      />
                      <div>
                        <p className="text-slate-900 dark:text-slate-100 font-semibold">{product.name}</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{product.id}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300">
                      <span className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md text-xs">
                        {product.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-900 dark:text-slate-100">${product.price.toFixed(2)}</td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300">{product.stock} units</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.status === 'In Stock' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' :
                        product.status === 'Low Stock' ? 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                        'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          title="View Insights"
                          className="p-2 text-slate-400 hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(product.id)}
                          title="Wipe Product"
                          className="p-2 text-slate-400 border hover:text-rose-600 cursor-pointer
                           hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Responsive Card View */}
          <div className="grid grid-cols-1 divide-y divide-slate-100 dark:divide-slate-700 md:hidden">
            {products.map((product) => (
              <div key={product.id} className="p-4 space-y-4">
                <div className="flex items-start gap-3">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-16 h-16 rounded-xl object-cover bg-slate-100 dark:bg-slate-900 flex-shrink-0"
                  />
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{product.category}</span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">{product.name}</h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{product.id}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Price</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">${product.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 dark:text-slate-500">Stock</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{product.stock} units</p>
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === 'In Stock' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' :
                      product.status === 'Low Stock' ? 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                      'bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium py-2 rounded-xl text-xs hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                    View Details
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="flex-1 inline-flex items-center cursor-pointer
                     justify-center gap-2 bg-rose-50 dark:bg-rose-500/10 text-rose-600
                      dark:text-rose-400 font-medium py-2 rounded-xl text-xs hover:bg-rose-100
                       dark:hover:bg-rose-500/20 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}