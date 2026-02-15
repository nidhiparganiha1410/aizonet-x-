
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Helper to decode JWT without external library
  const parseJwt = (token: string) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  };

  const handleGoogleCallback = (response: any) => {
    const user = parseJwt(response.credential);
    if (user) {
      // Store user info for UI personalization
      localStorage.setItem('admin_user', JSON.stringify({
        name: user.name,
        email: user.email,
        picture: user.picture,
        googleId: user.sub
      }));
      // Set the standard token to bypass ProtectedRoute
      localStorage.setItem('admin_token', response.credential);
      navigate('/admin/dashboard');
    }
  };

  useEffect(() => {
    // Initialize Google Identity Services
    const interval = setInterval(() => {
      if ((window as any).google?.accounts?.id) {
        clearInterval(interval);
        (window as any).google.accounts.id.initialize({
          client_id: process.env.GOOGLE_CLIENT_ID,
          callback: handleGoogleCallback,
          auto_select: false,
          cancel_on_tap_outside: true,
        });

        (window as any).google.accounts.id.renderButton(
          document.getElementById("googleSignInButton"),
          { 
            theme: "filled_blue", 
            size: "large", 
            shape: "pill",
            width: "320",
            text: "signin_with"
          }
        );
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Security requirement: Enforce exactly 6 characters
    if (password.length !== 6) {
      alert('Security violation: Password must be exactly 6 characters.');
      return;
    }

    // Security password check: '141082'
    // Email check removed to allow login via the new placeholder/masking logic
    if (password === '141082') {
      localStorage.removeItem('admin_user'); // Clear Google user if manual login
      localStorage.setItem('admin_token', 'mock_jwt_token_123');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid security password.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(79,70,229,0.15)_0%,rgba(15,23,42,0)_100%)]" />
      
      <div className="w-full max-w-md">
        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-400 transition-all mb-8 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Return to AIZONET Site</span>
        </Link>

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 text-3xl font-black text-indigo-400 mb-4">
            <span className="bg-indigo-600 p-1.5 rounded text-white text-xs">AI</span>
            <span>AIZONET</span>
          </div>
          <h1 className="text-white text-2xl font-black">Management Portal</h1>
          <p className="text-slate-400 mt-2">Sign in to manage the directory</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-10 rounded-3xl shadow-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="xxxxxx" 
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Security Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••" 
                required
                maxLength={6}
                minLength={6}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-white outline-none focus:border-indigo-600 transition-colors"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white font-black py-4 rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all transform active:scale-95"
            >
              Authenticate & Enter
            </button>

            <div className="relative my-8 text-center">
              <hr className="border-slate-800" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-4 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">or use google</span>
            </div>

            <div className="flex justify-center">
              <div id="googleSignInButton"></div>
            </div>
          </form>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500">Security notice: unauthorized access attempts are logged.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
