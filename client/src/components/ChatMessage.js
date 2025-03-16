import React from 'react';
import ReactMarkdown from 'react-markdown';

function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`chat-message p-4 rounded-lg mb-4 ${isUser ? 'user-message ml-auto max-w-[80%]' : 'assistant-message max-w-[80%]'}`}>
      <div className="flex items-start">
        {!isUser && (
          <div className="flex-shrink-0 mr-3">
            <img src="/logo.jpg" alt="AI Logo" className="w-8 h-8 rounded-full shadow-sm" />
          </div>
        )}
        <div className="flex-1 overflow-hidden">
          <div className="message-content prose">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;