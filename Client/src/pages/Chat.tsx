import React from 'react';
import { useChat } from '../hooks/useChat';

const Chat: React.FC = () => {
  const { rooms, messages, loading, error } = useChat();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Chat</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Rooms</h2>
          {rooms.map((room) => (
            <div key={room.id} className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer">
              {room.name}
            </div>
          ))}
        </div>
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Messages</h2>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex items-start space-x-3">
                <div className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <p className="font-semibold text-sm text-gray-900 dark:text-white">{message.sender}</p>
                  <p className="text-gray-700 dark:text-gray-300">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat; 