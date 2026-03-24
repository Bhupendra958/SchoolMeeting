import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {
  FiHome,
  FiUser,
  FiMail,
  FiCalendar,
  FiBell,
  FiFileText,
  FiTrendingUp,
  FiUsers,
  FiLogOut,
  FiMenu,
  FiX
} from 'react-icons/fi';

const Layout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isParent = user?.role === 'parent';
  const isTeacher = user?.role === 'teacher';
  const isAdmin = user?.role === 'admin';

  const parentNavItems = [
    { path: '/parent/dashboard', label: 'Dashboard', icon: FiHome },
    { path: '/progress', label: 'Progress', icon: FiTrendingUp },
    { path: '/assignments', label: 'Assignments', icon: FiFileText },
    { path: '/attendance', label: 'Attendance', icon: FiUsers },
    { path: '/behavior', label: 'Behavior', icon: FiFileText },
    { path: '/messages', label: 'Messages', icon: FiMail },
    { path: '/meetings', label: 'Meetings', icon: FiCalendar },
    { path: '/announcements', label: 'Announcements', icon: FiBell },
    { path: '/profile', label: 'Profile', icon: FiUser },
  ];

  const teacherNavItems = [
    { path: '/teacher/dashboard', label: 'Dashboard', icon: FiHome },
    { path: '/assignments', label: 'Assignments', icon: FiFileText },
    { path: '/attendance', label: 'Attendance', icon: FiUsers },
    { path: '/behavior', label: 'Behavior', icon: FiFileText },
    { path: '/messages', label: 'Messages', icon: FiMail },
    { path: '/meetings', label: 'Meetings', icon: FiCalendar },
    { path: '/announcements', label: 'Announcements', icon: FiBell },
    { path: '/profile', label: 'Profile', icon: FiUser },
  ];

  const navItems = isParent ? parentNavItems : teacherNavItems;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-slate-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-800 to-purple-800/70 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">EduConnect</h1>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md text-slate-200 hover:bg-white/5"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`$
            {mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-slate-900/80 shadow-lg transform transition-transform duration-300 ease-in-out pt-16 lg:pt-0`}
        >
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-amber-800/6 hidden lg:block">
              <h1 className="text-2xl font-bold text-white">EduConnect</h1>
              <p className="text-sm text-slate-300 mt-1">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-slate-400 capitalize">{user?.role}</p>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                        isActive
                          ? 'bg-amber-500/10 text-amber-200 font-medium'
                          : 'text-slate-200 hover:bg-white/5'
                      }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-amber-800/6">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-amber-200 hover:bg-white/5 w-full transition-colors"
              >
                <FiLogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-0 pt-16 lg:pt-0">
          <div className="p-4 lg:p-8">{children}</div>
        </main>
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;

