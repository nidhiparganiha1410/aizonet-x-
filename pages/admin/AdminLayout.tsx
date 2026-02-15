
import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const userJson = localStorage.getItem('admin_user');
  const user = userJson ? JSON.parse(userJson) : null;

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex items-center justify-between px-8">
          <h1 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-wider">{title}</h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-black text-slate-400">Admin Account</p>
              <p className="text-sm font-bold dark:text-white">{user?.email || 'Authenticated Session'}</p>
            </div>
            {user?.picture ? (
              <img src={user.picture} className="h-10 w-10 rounded-full border-2 border-indigo-600 shadow-sm" alt="Profile" />
            ) : (
              <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                {user?.email?.charAt(0).toUpperCase() || 'A'}
              </div>
            )}
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
