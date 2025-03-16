import React, { useState } from 'react';

function ChatInput({ onSendMessage, disabled }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center bg-white rounded-xl border border-gray-200 focus-within:ring-1 focus-within:ring-apple-blue focus-within:border-transparent overflow-hidden shadow-sm transition-all duration-200">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="输入您的问题..."
          className="flex-1 p-3 focus:outline-none font-apple text-apple-dark"
          disabled={disabled}
        />
        <button
          type="submit"
          className="p-3 text-apple-blue hover:text-opacity-80 focus:outline-none disabled:text-apple-gray-dark disabled:cursor-not-allowed transition-all duration-200"
          disabled={!message.trim() || disabled}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default ChatInput;