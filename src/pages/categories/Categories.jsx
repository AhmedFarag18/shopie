import React from 'react'
import { useCategories } from '../../hooks/useCategories'
import CategorySkeleton from '../../components/common/skeletons/CategorySkeleton';
import { Link } from 'react-router';
import { mainIcon } from '../../assets/icons';

function Categories() {

  const { categories, loading, error } = useCategories();

  return (
    <section className='py-10'>
      <div className='container m-auto p-2 py-12'>
        <div className="flex items-center justify-between py-3">
          <h3 className='text-3xl font-semibold text-neutral-900 mb-6'>Explore Our Categories</h3>
        </div>
        <div className='flex gap-5 max-sm:justify-center'>
          <div className="category_page_item flex flex-wrap w-full gap-5 p-5 rounded">
            {loading ?
              <CategorySkeleton length={5} />
              :
              error ?
                <p className="text-red-600 px-2 py-10">Somthing Went wrong Maybe: {error}</p>
                : categories?.map(item => {
                  return (
                    <Link to={`/category/${item.id}?name=${item.name}`} key={item.id}
                      className={`image-item px-4 py-3 text-2xl bg-light hover:bg-gray-100 hover:text-main-color transition duration-300 hover:shadow cursor-pointer flex gap-3 items-center flex-col justify-center rounded-lg`}>
                      <img src={item?.image.indexOf('/any') !== -1 ? mainIcon : item.image} alt='image' className='h-32 rounded-full' />
                      <span className='text-center text-lg text-dark'>{item.name}</span>
                    </Link>
                  )
                })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
