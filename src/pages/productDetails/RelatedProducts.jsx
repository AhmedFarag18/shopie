import { useEffect, useState } from "react";
import { getProductRelated } from "../../services/api";
import ProductCard from "../../components/common/ProductCard"
import ProductsSkeleton from "../../components/common/skeletons/ProductsSkeleton";

function RelatedProducts({ productId }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getProductRelated(productId)
      .then((data) => {
        setRelatedProducts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, [productId])


  if (loading) return <ProductsSkeleton length={6} />;

  return (
    <div className="related-products py-10">
      <h2 className="my-4 text-2xl font-bold text-primary py-2">Related Products</h2>
      <div className="grid gap-2 grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">

        {relatedProducts.length > 6 &&
          relatedProducts.slice(0, 6)?.map(product => {
            return (
              <ProductCard product={product} key={product.id} />
            )
          })
        }
      </div>
    </div>
  )
}
export default RelatedProducts;
