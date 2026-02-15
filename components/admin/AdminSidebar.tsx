
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    { label: 'Overview', path: '/admin/dashboard', icon: '📊' },
    { label: 'Manage Tools', path: '/admin/tools', icon: '🛠️' },
    { label: 'Submissions', path: '/admin/submissions', icon: '📥' },
    { label: 'Blog Posts', path: '/admin/blog', icon: '✍️' },
    { label: 'Users', path: '/admin/users', icon: '👥' },
    { label: 'Categories', path: '/admin/categories', icon: '🏷️' },
    { label: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ];

  const handleSignOut = () => {
    // Clear all auth-related storage
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    
    // Revoke Google session if exists
    if ((window as any).google?.accounts?.id) {
      (window as any).google.accounts.id.disableAutoSelect();
    }
    
    navigate('/');
  };

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col border-r border-slate-800">
      <div className="p-6 border-b border-slate-800">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-indigo-400">
          <span className="bg-indigo-600 p-1 rounded text-white text-xs">AI</span>
          <span>AIZONET ADM</span>
        </Link>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-bold text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
        >
          <span>🚪</span>
          <span className="font-bold text-sm">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
