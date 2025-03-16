import React from 'react';

function Header() {
  return (
    <header className="bg-apple-light backdrop-blur-md bg-opacity-90 sticky top-0 z-10 transition-all duration-300">
      <div className="apple-container py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="NBTCA Logo" className="h-10 w-auto mr-3 rounded-md shadow-sm" />
          <h1 className="text-2xl font-semibold text-apple-dark tracking-tight">NBTCA</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-apple-gray-dark font-medium">
            基于OpenAI API的智能助手
          </div>
          <button className="text-apple-dark hover:text-apple-blue transition-colors duration-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;