import React from 'react'

function ProductsSkeleton({ length }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6`}>
      {Array.from({ length: length }).map((_, idx) => (
        <div
          key={idx}
          className="bg-gray-100 animate-pulse p-4 rounded-xl"
        >
          <div className="bg-gray-300 h-48 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 mb-1 rounded w-full"></div>
          <div className="h-3 bg-gray-200 mb-1 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 mt-4 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}

export default ProductsSkeleton
