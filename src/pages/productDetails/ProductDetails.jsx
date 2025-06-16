import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { BsCart } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import ProductDetailsSkeleton from '../../components/common/skeletons/ProductDetailsSkeleton';
import { useProduct } from '../../hooks/useProduct';
import RelatedProducts from './RelatedProducts';
import { useCart } from '../../contexts/CartContext';
import toast from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { addToCart } = useCart();


  if (loading) return <ProductDetailsSkeleton />;
  if (error) return <p className="text-red-600 p-10">{error}</p>;

  return (
    <div className="product_details relative py-10">
      <div className="container m-auto">
        <Link
          onClick={() => navigate(-1)}
          className="text-white bg-primary hover:bg-secondary inline-block font-medium rounded-md text-sm px-5 py-2.5">
          Back
        </Link>

        <div className="animate-slideInUp flex flex-col md:flex-row gap-8 pt-10">
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>

            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded w-max">
              <FaStar className="text-yellow-400" />
              <span>4.1</span>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="flex items-center gap-2 text-base text-gray-600">
              <img src={product.category?.image} className='w-10 h-10 rounded-full' alt={product.category?.slug} />
              <p>{product.category?.name}</p>
            </div>

            <div className="text-2xl font-bold text-primary">
              {product.price} $
            </div>

            <div className="flex gap-3 items-center flex-wrap mt-4">
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                className="p-2 w-20 border border-gray-300 rounded text-sm text-gray-700 outline-none"
              />

              <button
                onClick={() => {
                  if (!isAuthenticated) return toast.error("Please Sign in First");

                  addToCart(product, Number(qty)); // ✅ send qty as number
                }}
                className="flex items-center gap-2 text-white bg-primary hover:bg-secondary  font-medium rounded-md text-sm px-5 py-2.5 cursor-pointer"
              >
                <BsCart />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>

        <RelatedProducts productId={id} />

      </div>
    </div>
  );
};

export default ProductDetails;
