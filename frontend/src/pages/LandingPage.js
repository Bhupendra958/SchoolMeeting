import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiTrendingUp, FiMail, FiCalendar, FiShield } from 'react-icons/fi';

const LandingPage = () => {
  return (
    <div
      className="min-h-screen relative
      bg-[url('./assets/home.png')]
      bg-cover bg-center bg-no-repeat"
    >
      {/* Global dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/90"></div>

      <div className="relative">

        {/* Header – glass, no white */}
        <header className="bg-white/5 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-cyan-300 drop-shadow">
              EduConnect
            </h1>
            <div className="space-x-4">
              <Link
                to="/login"
                className="text-cyan-200 hover:text-cyan-100 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg
                bg-white/10 backdrop-blur
                text-cyan-100
                border border-white/20
                hover:bg-white/20 hover:border-cyan-300/40
                transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Connect, Track, and Succeed Together
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              A comprehensive platform that bridges the gap between parents and teachers,
              enabling seamless communication and real-time student progress tracking.
            </p>
            <div className="space-x-4">
              <Link
                to="/register"
                className="inline-block px-8 py-3 rounded-lg
                bg-gradient-to-r from-cyan-500/70 via-teal-500/70 to-emerald-400/70
                text-white font-medium
                shadow-[0_0_30px_rgba(56,189,248,0.6)]
                hover:shadow-[0_0_50px_rgba(56,189,248,0.9)]
                transition"
              >
                Get Started Free
              </Link>
              <Link
                to="/login"
                className="inline-block px-8 py-3 rounded-lg
                bg-white/10 backdrop-blur
                text-cyan-100
                border border-white/20
                hover:bg-white/20
                transition"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Everything You Need in One Place
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={FiTrendingUp} title="Progress Tracking" description="Monitor student academic performance with detailed grade tracking, assignment status, and progress analytics." />
            <FeatureCard icon={FiUsers} title="Attendance Management" description="Real-time attendance tracking with detailed reports and notifications for parents." />
            <FeatureCard icon={FiMail} title="Secure Messaging" description="Direct, secure communication between parents and teachers with real-time messaging." />
            <FeatureCard icon={FiCalendar} title="Meeting Scheduler" description="Schedule and manage parent-teacher meetings with calendar integration and reminders." />
            <FeatureCard icon={FiShield} title="Behavior Reports" description="Track and report student behavior with detailed insights and recommendations." />
            <FeatureCard icon={FiUsers} title="Announcements" description="Stay updated with school announcements, events, and important notifications." />
          </div>
        </section>

        {/* CTA – blended, no blue block */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div
            className="rounded-3xl p-14 text-center
            bg-white/10 backdrop-blur-2xl
            border border-white/20
            shadow-[0_0_80px_rgba(56,189,248,0.35)]"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-cyan-100 mb-8">
              Join thousands of parents and teachers already using our platform.
            </p>
            <Link
              to="/register"
              className="inline-block px-10 py-3 rounded-lg
              bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-400
              text-white font-semibold
              shadow-[0_0_40px_rgba(56,189,248,0.8)]
              hover:shadow-[0_0_60px_rgba(56,189,248,1)]
              transition"
            >
              Create Your Account
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/70 backdrop-blur text-cyan-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 EduConnect. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div
      className="bg-white/10 backdrop-blur-xl
      border border-white/20
      p-6 rounded-2xl
      hover:-translate-y-2
      hover:shadow-[0_0_40px_rgba(56,189,248,0.45)]
      transition-all duration-500"
    >
      <div className="bg-cyan-400/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(56,189,248,0.6)]">
        <Icon className="text-cyan-300" size={24} />
      </div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-cyan-100 text-sm">{description}</p>
    </div>
  );
};

export default LandingPage;
