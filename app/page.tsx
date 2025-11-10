'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const FeatureCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
         style={{
           background: isDarkMode
             ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%), black`
             : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.05) 0%, transparent 50%), white`
         }}>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-opacity-80 border-b border-opacity-20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              S
            </div>
            <span className="text-2xl font-bold">Scri</span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative p-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative text-xl transition-transform duration-300 group-hover:scale-110">
                {isDarkMode ? '🌙' : '☀️'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative">
        <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">

          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium animate-pulse-glow">
            <span className="mr-2">✨</span>
            Now in Public Beta
          </div>

          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className={`block transition-all duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Turn any website
              </span>
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                into your personal
              </span>
              <span className="block text-5xl md:text-7xl mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                AI agent
              </span>
            </h1>

            <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Crawl docs, wikis, and articles. Chat with them directly in your browser or IDE.
              <br />
              <span className="inline-block mt-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 dark:from-green-500/30 dark:to-blue-500/30 rounded-2xl border border-green-500/30 dark:border-green-500/50">
                <span className="font-bold text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text">
                  🔒 100% Local • ⚡ 100% Private
                </span>
              </span>
            </p>
          </div>

          {/* Enhanced Animated Demo */}
          <div className="relative my-20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse-glow"></div>
            <div className="relative bg-gray-100 dark:bg-gray-900 rounded-3xl p-8 shadow-2xl max-w-5xl mx-auto border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition-transform"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full hover:scale-110 transition-transform"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition-transform"></div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">• react.dev</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">LIVE DEMO</div>
              </div>

              {/* Enhanced 3-step sequence */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div className={`transform transition-all duration-700 hover:scale-105 ${
                  scrollY > 50 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-950 rounded-2xl border border-blue-200 dark:border-blue-800">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-700 dark:text-blue-300">Step 1: Click Extension</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Activate Scri on any website</div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`transform transition-all duration-700 delay-100 hover:scale-105 ${
                  scrollY > 100 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-950 rounded-2xl border border-green-200 dark:border-green-800">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-700 dark:text-green-300">Step 2: Crawling...</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">AI analyzes all content in seconds</div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`transform transition-all duration-700 delay-200 hover:scale-105 ${
                  scrollY > 150 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-semibold text-purple-700 dark:text-purple-300">Step 3: Chat & Get Answers</div>
                      <div className="flex space-x-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Ready</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-black rounded-xl p-3 text-sm shadow-sm">
                        <div className="font-medium text-blue-600 dark:text-blue-400 mb-1">You:</div>
                        How do I use React hooks effectively?
                      </div>
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl p-3 text-sm shadow-sm">
                        <div className="font-medium text-green-600 dark:text-green-400 mb-1">Scri:</div>
                        React Hooks are functions that let you use state and other React features in functional components. The most common hooks are useState for state management and useEffect for side effects...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative flex items-center">
                <span className="mr-3 text-2xl">🚀</span>
                Add to Chrome - It's Free
                <span className="ml-3 text-xl">→</span>
              </span>
            </a>

            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">⭐</span>
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-1">✓</span>
                <span>100K+ users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                From Website to Agent
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-900 dark:text-white">in 3 Simple Steps</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transform any website into your personal knowledge base in seconds
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Enhanced Step 1 */}
            <div className={`transform transition-all duration-1000 hover:scale-105 ${
              scrollY > 300 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <FeatureCard className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border border-blue-200 dark:border-blue-800 hover:shadow-blue-500/25">
                <div className="text-6xl mb-6 text-blue-500">1️⃣</div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  One-Click Crawl
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  Click the extension icon on any site. Our intelligent crawler extracts all relevant content, structure, and context in seconds.
                </p>
                <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl animate-spin-slow flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                        </svg>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                    Instant Content Processing
                  </div>
                </div>
              </FeatureCard>
            </div>

            {/* Enhanced Step 2 */}
            <div className={`transform transition-all duration-1000 delay-100 hover:scale-105 ${
              scrollY > 400 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <FeatureCard className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800 hover:shadow-green-500/25">
                <div className="text-6xl mb-6 text-green-500">2️⃣</div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Chat Instantly
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  Your local AI agent is ready. Ask questions, summarize content, and get accurate answers instantly—no server, no data sharing.
                </p>
                <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-lg">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">You</div>
                      <div className="bg-blue-100 dark:bg-blue-900 rounded-xl p-3 flex-1 text-sm">
                        Explain this concept simply
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">AI</div>
                      <div className="bg-green-100 dark:bg-green-900 rounded-xl p-3 flex-1 text-sm">
                        Here's a clear explanation...
                      </div>
                    </div>
                  </div>
                </div>
              </FeatureCard>
            </div>

            {/* Enhanced Step 3 */}
            <div className={`transform transition-all duration-1000 delay-200 hover:scale-105 ${
              scrollY > 500 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <FeatureCard className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border border-purple-200 dark:border-purple-800 hover:shadow-purple-500/25">
                <div className="text-6xl mb-6 text-purple-500">3️⃣</div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Power Up Your IDE
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  Export your agent with one click and integrate with AI tools like Cursor, Claude, and other AI-native editors.
                </p>
                <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-around">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-2xl mb-2">
                        💻
                      </div>
                      <div className="text-xs font-medium">Browser</div>
                    </div>
                    <div className="text-2xl text-purple-500">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white text-2xl mb-2">
                        🚀
                      </div>
                      <div className="text-xs font-medium">IDE</div>
                    </div>
                  </div>
                </div>
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Why Developers Love
              <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                Scri
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Enhanced Feature 1 */}
            <FeatureCard className="bg-gradient-to-br from-blue-50 via-blue-100 to-purple-100 dark:from-blue-950 dark:via-blue-900 dark:to-purple-900 border border-blue-200 dark:border-blue-800 hover:shadow-blue-500/30">
              <div className="text-5xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                100% Private
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Your data never leaves your machine. No cloud APIs, no third-party tracking, no data collection.
              </p>
              <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                <span className="mr-2">✓</span>
                End-to-end encrypted
              </div>
            </FeatureCard>

            {/* Enhanced Feature 2 */}
            <FeatureCard className="bg-gradient-to-br from-green-50 via-emerald-100 to-green-100 dark:from-green-950 dark:via-emerald-900 dark:to-green-900 border border-green-200 dark:border-green-800 hover:shadow-green-500/30">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Lightning Fast
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Transform 100-page websites into query-ready agents in under 60 seconds. No waiting, no delays.
              </p>
              <div className="flex items-center text-sm font-medium text-green-600 dark:text-green-400">
                <span className="mr-2">✓</span>
                Sub-second responses
              </div>
            </FeatureCard>

            {/* Enhanced Feature 3 */}
            <FeatureCard className="bg-gradient-to-br from-purple-50 via-pink-100 to-purple-100 dark:from-purple-950 dark:via-pink-900 dark:to-purple-900 border border-purple-200 dark:border-purple-800 hover:shadow-purple-500/30">
              <div className="text-5xl mb-6">🔌</div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                IDE Native
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Native MCP support for Cursor, VS Code, and other AI-native editors. Query docs without leaving your code.
              </p>
              <div className="flex items-center text-sm font-medium text-purple-600 dark:text-purple-400">
                <span className="mr-2">✓</span>
                One-click export
              </div>
            </FeatureCard>

            {/* Enhanced Feature 4 */}
            <FeatureCard className="bg-gradient-to-br from-orange-50 via-red-100 to-orange-100 dark:from-orange-950 dark:via-red-900 dark:to-orange-900 border border-orange-200 dark:border-orange-800 hover:shadow-orange-500/30">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Universal
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Works on technical docs, wikis, Confluence, Notion, articles, and any content-heavy website.
              </p>
              <div className="flex items-center text-sm font-medium text-orange-600 dark:text-orange-400">
                <span className="mr-2">✓</span>
                Smart content detection
              </div>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Enhanced Social Proof Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                100K+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-gray-600 dark:text-gray-300">Chrome Store Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Queries Per Day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Stop Context-Switching.
            <br />
            Start Building.
          </h2>
          <p className="text-2xl md:text-3xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of developers who've transformed their workflow with Scri.
            Get instant answers to your documentation questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="#"
              className="group inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-blue-600 bg-white rounded-full hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <span className="mr-3">🎯</span>
              Install Scri Extension
              <span className="ml-3">→</span>
            </a>

            <div className="flex items-center space-x-6 text-white">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 text-2xl">⭐</span>
                <span>Free Forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 text-2xl">✓</span>
                <span>2-min Setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className={`py-16 px-6 border-t ${isDarkMode ? 'border-gray-800 bg-black' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  S
                </div>
                <span className="text-xl font-bold">Scri</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Transform any website into your personal AI agent.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <a href="#" className="block hover:text-blue-500 transition-colors">Features</a>
                <a href="#" className="block hover:text-blue-500 transition-colors">Pricing</a>
                <a href="#" className="block hover:text-blue-500 transition-colors">Changelog</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <a href="#" className="block hover:text-blue-500 transition-colors">About</a>
                <a href="#" className="block hover:text-blue-500 transition-colors">Blog</a>
                <a href="#" className="block hover:text-blue-500 transition-colors">Privacy</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  𝕏
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  GitHub
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  Discord
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            © 2024 Scri. All rights reserved. Made with ❤️ for developers.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(1deg);
          }
          66% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(-1deg);
          }
          66% {
            transform: translateY(-25px) rotate(1deg);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}