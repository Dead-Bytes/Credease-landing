import React from 'react';
import businessImage from '../assets/usiness.png';
import logoImage from '../assets/logo.jpeg';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* First Section - Everything Human */}
      <section className="min-h-screen flex flex-col relative">
        {/* Floating Header */}
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between w-3/4 max-w-6xl">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src={logoImage} 
              alt="CredEase Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-black font-medium text-base sm:text-lg">CredEase</span>
          </div>
          
          {/* Navigation */}
          <nav className="flex space-x-6 sm:space-x-8">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // Create a new window with the docs page
                const newWindow = window.open('', '_blank');
                if (newWindow) {
                  newWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <title>CredEase Docs</title>
                        <script src="https://cdn.tailwindcss.com"></script>
                      </head>
                      <body>
                        <div id="root"></div>
                        <script>
                          // This would normally load the docs component
                          // For now, we'll show a placeholder
                          document.getElementById('root').innerHTML = \`
                            <div class="min-h-screen bg-white flex items-center justify-center">
                              <div class="text-center">
                                <h1 class="text-4xl font-bold text-gray-800 mb-4">CredEase Documentation</h1>
                                <p class="text-gray-600">Documentation will be available here.</p>
                                <button onclick="window.close()" class="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                                  Close
                                </button>
                              </div>
                            </div>
                          \`;
                        </script>
                      </body>
                    </html>
                  `);
                }
              }}
              className="text-black hover:text-gray-600 transition-colors text-sm sm:text-base underline decoration-1 underline-offset-4"
            >
              Docs
            </a>
            <a href="#" className="text-black hover:text-gray-600 transition-colors text-sm sm:text-base underline decoration-1 underline-offset-4">Blogs</a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-start flex-1 px-4 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-36 relative z-10">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-pixelify text-black text-center mb-6 sm:mb-8 leading-tight">
            Everything Human
          </h1>
        </main>

        {/* Black Card Component - spans full width and acts as divider */}
        <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-black flex items-center justify-center">
          {/* Laptop Illustration positioned on the black card */}
          <div className="relative">
            {/* Laptop Screen */}
            <div className="w-[36rem] h-80 sm:w-[44rem] sm:h-[24rem] md:w-[56rem] md:h-[32rem] lg:w-[68rem] lg:h-[40rem] xl:w-[76rem] xl:h-[44rem] 2xl:w-[84rem] 2xl:h-[48rem] bg-white border-8 sm:border-10 md:border-12 lg:border-16 xl:border-16 border-black rounded-2xl sm:rounded-3xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl relative z-10 overflow-hidden">
              {/* Screen content - @usiness.png */}
              <img 
                src={businessImage} 
                alt="Business illustration" 
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl"
              />
            </div>
            
            {/* Laptop Base - Left side */}
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-12 xl:-bottom-16 -left-22 sm:-left-26 md:-left-32 lg:-left-40 xl:-left-44 w-28 h-14 sm:w-32 sm:h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-52 xl:h-26 bg-black rounded-lg"></div>
            
            {/* Laptop Base - Right side */}
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-12 xl:-bottom-16 -right-22 sm:-right-26 md:-right-32 lg:-right-40 xl:-right-44 w-28 h-14 sm:w-32 sm:h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-52 xl:h-26 bg-black rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Second Section - Internet Can Be Human Again */}
      <section className="min-h-screen flex flex-col relative">
        {/* Black Card Component continues from first section */}
        <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-black"></div>

        {/* Header with colored bars */}
        <header className="w-full">
          {/* Black bar */}
          <div className="w-full h-3 sm:h-4 bg-black"></div>
          
          {/* Colored progress bars */}
          <div className="w-full h-1.5 sm:h-2 flex">
            <div className="flex-1 bg-blue-500"></div>
            <div className="flex-2 bg-red-500"></div>
            <div className="flex-1 bg-green-500"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center flex-1 px-4 py-8 sm:py-12">
          {/* Motto */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 text-center">
            We Live By One Goal
          </p>
          
          {/* Main Headline */}
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-pixelify text-black text-center mb-6 sm:mb-8 leading-tight px-2">
            Internet Can Be Human Again!
          </h1>
          
          {/* Description */}
          <div className="max-w-3xl lg:max-w-4xl mx-auto text-center px-2">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black leading-relaxed">
              AI content is everywhere, making it hard to spot real humans online. Mercle uses your facial features to create a unique credential that proves you're human. Authenticate your posts, chats, and content with it, so everyone knows it's genuinely <span className="font-bold">YOU</span>.
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-gray-300 py-3 sm:py-4 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto space-y-2 sm:space-y-0">
            {/* Left side - Logo and Brand */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src={logoImage} 
                alt="CredEase Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
              <span className="text-black font-medium text-xs sm:text-sm md:text-base">CredEase</span>
            </div>
            
            {/* Right side - Copyright */}
            <div className="text-black text-xs sm:text-sm text-center sm:text-right">
              All Rights Reserved © Pay2oll 2028
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;
