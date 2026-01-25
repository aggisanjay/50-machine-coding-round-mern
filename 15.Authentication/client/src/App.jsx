import React, { useState, useEffect } from 'react';
import { LogIn, LogOut, User, Lock, Mail, Shield, CheckCircle, XCircle, Home, UserCircle } from 'lucide-react';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const backendUrl = 'http://localhost:3000';

  // Check if user is already logged in
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      verifyToken(savedToken, JSON.parse(savedUser));
    }
  }, []);

  // Verify token with backend
  const verifyToken = async (savedToken, savedUser) => {
    try {
      const response = await fetch(`${backendUrl}/api/auth/verify`, {
        headers: {
          'Authorization': `Bearer ${savedToken}`
        }
      });

      if (response.ok) {
        setToken(savedToken);
        setUser(savedUser);
        setIsAuthenticated(true);
        setCurrentView('dashboard');
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Token verification failed:', error);
    }
  };

  // Login function
  const handleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setUser(data.user);
        setIsAuthenticated(true);
        
        // Save to localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        setCurrentView('dashboard');
        setEmail('');
        setPassword('');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Cannot connect to server. Make sure backend is running on ' + backendUrl);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await fetch(`${backendUrl}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    }

    setIsAuthenticated(false);
    setToken('');
    setUser(null);
    setDashboardData(null);
    setProfileData(null);
    setCurrentView('login');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // Fetch dashboard data (protected route)
  const fetchDashboard = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/api/user/dashboard`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setDashboardData(data);
        setCurrentView('dashboard');
      } else {
        setError('Failed to fetch dashboard data');
      }
    } catch (error) {
      setError('Error fetching dashboard');
    } finally {
      setLoading(false);
    }
  };

  // Fetch profile data (protected route)
  const fetchProfile = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/api/user/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        setCurrentView('profile');
      } else {
        setError('Failed to fetch profile data');
      }
    } catch (error) {
      setError('Error fetching profile');
    } finally {
      setLoading(false);
    }
  };

  // Quick login with demo credentials
  const quickLogin = (demoEmail, demoPassword) => {
    setEmail(demoEmail);
    setPassword(demoPassword);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {!isAuthenticated ? (
          // LOGIN SCREEN
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                  <Shield className="w-12 h-12 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                <p className="text-gray-600">Sign in to access your account</p>
              </div>

              <div className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Signing in...</span>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      <span>Sign In</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-8">
                <p className="text-center text-sm text-gray-600 mb-4">Demo Accounts:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <button
                    onClick={() => quickLogin('john@example.com', 'password123')}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition"
                  >
                    <div className="font-semibold">John Doe</div>
                    <div className="text-xs text-gray-600">User</div>
                  </button>
                  <button
                    onClick={() => quickLogin('jane@example.com', 'password456')}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition"
                  >
                    <div className="font-semibold">Jane Smith</div>
                    <div className="text-xs text-gray-600">User</div>
                  </button>
                  <button
                    onClick={() => quickLogin('admin@example.com', 'admin123')}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition"
                  >
                    <div className="font-semibold">Admin</div>
                    <div className="text-xs text-gray-600">Admin</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // AUTHENTICATED SCREEN
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-300 bg-opacity-20 rounded-full">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{user?.username}</h2>
                    <p className="text-sm opacity-90">{user?.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray bg-opacity-20 hover:bg-opacity-30 rounded-lg transition flex items-center gap-2"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="border-b border-gray-200 px-8">
              <div className="flex gap-4">
                <button
                  onClick={fetchDashboard}
                  className={`px-4 py-3 font-medium border-b-2 transition ${
                    currentView === 'dashboard'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Dashboard
                  </div>
                </button>
                <button
                  onClick={fetchProfile}
                  className={`px-4 py-3 font-medium border-b-2 transition ${
                    currentView === 'profile'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <UserCircle className="w-4 h-4" />
                    Profile
                  </div>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {currentView === 'dashboard' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <div className="text-blue-600 font-semibold text-sm mb-1">Notifications</div>
                      <div className="text-3xl font-bold text-gray-800">
                        {dashboardData?.data?.notifications || 5}
                      </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl">
                      <div className="text-green-600 font-semibold text-sm mb-1">Messages</div>
                      <div className="text-3xl font-bold text-gray-800">
                        {dashboardData?.data?.messages || 12}
                      </div>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <div className="text-purple-600 font-semibold text-sm mb-1">Status</div>
                      <div className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Active
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-4">User Information</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">User ID:</span>
                        <span className="font-medium">{user?.userId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Username:</span>
                        <span className="font-medium">{user?.username}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Email:</span>
                        <span className="font-medium">{user?.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Role:</span>
                        <span className="font-medium capitalize">{user?.role || 'user'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Token:</span>
                        <span className="font-mono text-xs bg-gray-200 px-2 py-1 rounded">
                          {token.substring(0, 20)}...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentView === 'profile' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Profile</h3>
                  
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {user?.username?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800">{user?.username}</h4>
                        <p className="text-gray-600">{user?.email}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          {user?.role || 'User'}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Username
                        </label>
                        <input
                          type="text"
                          value={user?.username}
                          readOnly
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={user?.email}
                          readOnly
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white"
                        />
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">
                          ✅ Successfully authenticated with token-based auth
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
