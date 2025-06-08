import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import axios from 'axios';
import { BsCart } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import ProductDetailsSkeleton from './ProductDetailsSkeleton';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError('Failed to load product', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const productWithQty = { ...product, quantity: parseInt(qty) };
    console.log('Product added to cart:', productWithQty);
  };

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

        <div className="flex flex-col md:flex-row gap-8 pt-10">
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
              <span>{(Math.random() * 2 + 3).toFixed(1)}</span>
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
                onChange={(e) => setQty(e.target.value)}
                className="p-2 w-20 border border-gray-300 rounded text-sm text-gray-700 outline-none"
              />
              <button
                onClick={addToCart}
                className="flex items-center gap-2 text-white bg-primary hover:bg-secondary  font-medium rounded-md text-sm px-5 py-2.5 cursor-pointer"
              >
                <BsCart />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
