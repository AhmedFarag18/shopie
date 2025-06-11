import React from 'react';

const ProductDetailsSkeleton = () => {
  return (
    <div className="product_details padding_after_nav relative py-10 animate-pulse">
      <div className="container m-auto">
        <div className="mb-6 h-10 w-24 bg-gray-300 rounded"></div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Skeleton Image */}
          <div className="w-full md:w-1/2">
            <div className="h-[400px] w-full bg-gray-300 rounded-lg"></div>
          </div>

          {/* Skeleton Info */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="h-8 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-6 w-24 bg-gray-300 rounded"></div>
            <div className="h-20 w-full bg-gray-300 rounded"></div>

            <div className="space-y-2">
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
            </div>

            <div className="h-6 w-20 bg-gray-300 rounded"></div>

            <div className="flex gap-3 items-center flex-wrap mt-4">
              <div className="h-10 w-20 bg-gray-300 rounded"></div>
              <div className="h-10 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
