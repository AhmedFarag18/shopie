import React from 'react'
import { Link, useParams } from 'react-router'
import { useCategoryProducts } from '../../hooks/useCategoryProducts'
import ProductCard from '../../components/common/ProductCard';
import { BiLoaderAlt } from "react-icons/bi";
import ProductsSkeleton from '../../components/common/skeletons/ProductsSkeleton';

function CategoryProducts() {
  let categoryName = window.location.search.slice(6).replace("%20", " ").replace("%27", "'");
  const { categoryId } = useParams();

  const { categoryProducts, loading, error } = useCategoryProducts(categoryId)

  return (
    <section>
      <div className='category_item_details'>
        <div className='container p-3 flex justify-center items-center flex-col h-full'>
          <h1 className='text-base pt-10 text-white'>
            <Link to="/categories">Category</Link>
            <span> / </span>
            <span className='text-primary'>{categoryName}</span>
          </h1>
          <p className='text-4xl text-white mt-10'>Explore <span className='text-primary'>{categoryName}</span> Products</p>
        </div>
      </div>

      <div className="container p-4 m-auto">
        <div className={loading ? "" : 'py-10 grid grid-cols-4 max-lg:grid-cols-3  max-md:grid-cols-2  max-sm:grid-cols-1 gap-3'}>
          {
            loading ? <ProductsSkeleton length={8} />
              :
              error ? <p>Somthing went wrong: {error}</p>
                :
                (categoryProducts.length > 0) ?
                  categoryProducts.map(item => {
                    return (
                      <ProductCard product={item} key={item.id} />
                    )
                  })
                  : <p className='text-2xl text-center'>Don't have any Products</p>
          }
        </div>
      </div>
    </section>
  )
}

export default CategoryProducts
