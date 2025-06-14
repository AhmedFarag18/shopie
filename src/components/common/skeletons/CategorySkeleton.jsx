import React from 'react';

function CategorySkeleton({ length = 3 }) {
  return (
    <>
      {Array.from({ length }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse bg-gray-100 rounded-lg flex flex-col items-center justify-center px-4 py-6 w-40 max-sm:w-32 shadow"
        >
          <div className="w-24 h-24 max-sm:w-20 max-sm:h-20 bg-gray-300 rounded-full mb-4"></div>
          <div className="w-20 h-4 bg-gray-300 rounded"></div>
        </div>
      ))}
    </>
  );
}

export default CategorySkeleton;
