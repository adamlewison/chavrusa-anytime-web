import React from "react";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Header */}
      <header className="bg-white shadow-md p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* App Logo */}
            <div className="flex items-baseline">
              <span className="text-3xl font-extrabold text-[#FA7D00] tracking-tight">
                Chavrusa
              </span>
              <span className="text-3xl font-semibold text-[#1972E6] tracking-tight">
                Anytime
              </span>
            </div>

            {/* Test Badge */}
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              Style Test
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 space-y-8">
        {/* Typography Test */}
        <section className="card space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Typography Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">English Text</h3>
              <h1 className="text-4xl font-extrabold mb-2">Heading 1</h1>
              <h2 className="text-3xl font-bold mb-2">Heading 2</h2>
              <h3 className="text-2xl font-semibold mb-2">Heading 3</h3>
              <p className="text-base text-gray-700">
                This is a paragraph with regular text. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="hebrew" dir="rtl">
              <h3 className="text-xl font-semibold mb-3">Hebrew Text</h3>
              <h1 className="text-4xl font-extrabold mb-2">כותרת ראשית</h1>
              <h2 className="text-3xl font-bold mb-2">כותרת משנית</h2>
              <h3 className="text-2xl font-semibold mb-2">כותרת קטנה</h3>
              <p className="text-base text-gray-700">
                זהו טקסט בעברית לבדיקת התצוגה והפונטים. מערכת חברותא בכל זמן.
              </p>
            </div>
          </div>
        </section>

        {/* Color Test */}
        <section className="card space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Brand Colors Test
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FA7D00] rounded-2xl mx-auto mb-2"></div>
              <p className="text-sm font-medium">Primary Orange</p>
              <p className="text-xs text-gray-600">#FA7D00</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1972E6] rounded-2xl mx-auto mb-2"></div>
              <p className="text-sm font-medium">Primary Blue</p>
              <p className="text-xs text-gray-600">#1972E6</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#43E97B] rounded-2xl mx-auto mb-2"></div>
              <p className="text-sm font-medium">Success Green</p>
              <p className="text-xs text-gray-600">#43E97B</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FF6B6B] rounded-2xl mx-auto mb-2"></div>
              <p className="text-sm font-medium">Error Red</p>
              <p className="text-xs text-gray-600">#FF6B6B</p>
            </div>
          </div>
        </section>

        {/* Gradient Test */}
        <section className="card space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Gradients Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-24 gradient-primary rounded-2xl flex items-center justify-center">
              <span className="text-white font-semibold">Primary Gradient</span>
            </div>
            <div className="h-24 gradient-secondary rounded-2xl flex items-center justify-center">
              <span className="text-white font-semibold">
                Secondary Gradient
              </span>
            </div>
            <div className="h-24 gradient-success rounded-2xl flex items-center justify-center">
              <span className="text-white font-semibold">Success Gradient</span>
            </div>
          </div>
        </section>

        {/* Component Test */}
        <section className="card space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Components Test</h2>
          <div className="space-y-6">
            {/* Buttons */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="btn bg-[#1972E6] text-white hover:bg-[#0F5DBD] interactive">
                  <i className="fas fa-play mr-2"></i>
                  Primary Button
                </button>
                <button className="btn bg-[#FA7D00] text-white hover:bg-[#E06A00] interactive">
                  <i className="fas fa-plus mr-2"></i>
                  Secondary Button
                </button>
                <button className="btn bg-gray-100 text-gray-800 hover:bg-gray-200 interactive">
                  <i className="fas fa-cog mr-2"></i>
                  Neutral Button
                </button>
              </div>
            </div>

            {/* Form Elements */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Form Elements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input"
                />
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="card interactive cursor-pointer">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#1972E6] rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <i className="fas fa-users text-white"></i>
                    </div>
                    <h4 className="font-semibold text-gray-800">
                      Find Chavrusa
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Discover study partners
                    </p>
                  </div>
                </div>

                <div className="card interactive cursor-pointer">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#FA7D00] rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <i className="fas fa-book-open text-white"></i>
                    </div>
                    <h4 className="font-semibold text-gray-800">
                      Torah Library
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Explore texts & topics
                    </p>
                  </div>
                </div>

                <div className="card interactive cursor-pointer">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#43E97B] rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <i className="fas fa-chart-line text-white"></i>
                    </div>
                    <h4 className="font-semibold text-gray-800">My Progress</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Track learning journey
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animation Test */}
        <section className="card space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Animations Test</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card text-center animate-fade-in">
              <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Fade In</p>
            </div>
            <div className="card text-center animate-slide-up">
              <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Slide Up</p>
            </div>
            <div className="card text-center animate-scale-in">
              <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Scale In</p>
            </div>
            <div className="card text-center animate-float">
              <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Float</p>
            </div>
          </div>
        </section>

        {/* Loading States Test */}
        <section className="card space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Loading States Test
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-3">
              <div className="skeleton h-4 w-3/4"></div>
              <div className="skeleton h-4 w-1/2"></div>
              <div className="skeleton h-4 w-2/3"></div>
            </div>
            <div className="flex justify-center items-center h-24">
              <div className="loading-spinner"></div>
            </div>
            <div className="flex justify-center items-center h-24">
              <div className="animate-pulse">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility Test */}
        <section className="card space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Accessibility Test
          </h2>
          <div className="space-y-4">
            <button
              className="btn bg-blue-600 text-white focus-visible"
              tabIndex={0}
            >
              Focus Test (Tab to me)
            </button>
            <div className="sr-only">This text is screen reader only</div>
            <p className="text-sm text-gray-600">
              Tab through this page to test focus management and keyboard
              navigation.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 p-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            ✅ If you can see all styles correctly, globals.css is working
            properly!
          </p>
        </div>
      </footer>
    </div>
  );
}
