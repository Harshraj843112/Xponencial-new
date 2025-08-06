import React from 'react';

export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#2E4168] border-t-transparent"></div>
    </div>
  );
}
