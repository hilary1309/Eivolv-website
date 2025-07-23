// components/Modal.tsx
import React from 'react';

export default function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-4 text-gray-500 hover:text-[#FF890A] text-xl">&times;</button>
        {children}
      </div>
    </div>
  );
}
