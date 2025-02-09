// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product, loading }) => {


//     if (loading) {
//         return (
//             <div className="border rounded-xl shadow-lg overflow-hidden bg-white">
//                 <div className="relative">
//                     <div className="w-full h-48 bg-gray-300 animate-pulse" />
//                     <div className="absolute top-2 left-2 bg-gray-400 text-transparent px-3 py-1 text-xs font-semibold rounded-full shadow-md">
//                         <span className="w-12 h-4 bg-gray-300"></span>
//                     </div>
//                 </div>
//                 <div className="p-4">
//                     <div className="w-full h-6 bg-gray-300 animate-pulse mb-2"></div>
//                     <div className="flex items-center gap-2 mt-2">
//                         <div className="w-16 h-4 bg-gray-300 animate-pulse" />
//                         <div className="w-24 h-4 bg-gray-300 animate-pulse" />
//                     </div>
//                     <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
//                         <div className="w-16 h-4 bg-gray-300 animate-pulse" />
//                         <div className="w-16 h-4 bg-gray-300 animate-pulse" />
//                     </div>
//                     <button className="mt-4 w-full bg-gray-300 text-transparent text-sm px-5 py-2 rounded-lg shadow-md animate-pulse">
//                         <span className="w-24 h-6 bg-gray-300 animate-pulse"></span>
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <Link to={`/product/${product._id}`} className="block">
//             <div className="border rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
//                 <div className="relative">
//                     <img
//                         src={product.images[0]}
//                         alt={product.title}
//                         className="w-full h-48 object-cover"
//                     />
//                     {product.discount > 0 && (
//                         <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
//                             -{product.discount}%
//                         </div>
//                     )}
//                 </div>
//                 <div className="p-4">
//                     <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
//                     <div className="flex items-center gap-2 mt-2">
//                         <span className="text-gray-400 line-through text-sm">{product.originalPrice} د.إ</span>
//                         <span className="text-green-600 font-bold text-lg">{product.price} د.إ</span>
//                     </div>
//                     <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
//                         <span className="font-medium">{product.tag}</span>
//                         <span className="font-medium">| SKU: {product.SKU}</span>
//                     </div>
//                     <button className="mt-4 w-full bg-gray-800 text-white text-sm px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all">
//                         ADD TO CART
//                     </button>
//                 </div>
//             </div>
//         </Link>
//     );
// };

// const ProductGrid = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/get-products`);
//                 const data = await response.json();
//                 setProducts(data);
//                 setLoading(false); // Set loading to false once data is fetched
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//                 setLoading(false); // Set loading to false in case of error
//             }
//         };
//         fetchProducts();
//     }, []);

//     return (
//         <div className="container mx-auto px-6 py-10">
//             <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Our Products</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
//                 {products.length === 0 && loading ? (
//                     // Show skeleton loader when no products are loaded
//                     Array(18).fill(null).map((_, index) => (
//                         <ProductCard key={index} loading={true} />
//                     ))
//                 ) : (
//                     // Render the actual product cards once data is fetched
//                     products.map((product) => (
//                         <ProductCard key={product._id} product={product} loading={false} />
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductGrid;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, loading }) => {
    if (loading) {
        return (
            <div className="border rounded-xl shadow-lg overflow-hidden bg-white">
                <div className="relative">
                    <div className="w-full h-48 bg-gray-300 animate-pulse" />
                    <div className="absolute top-2 left-2 bg-gray-400 text-transparent px-3 py-1 text-xs font-semibold rounded-full shadow-md">
                        <span className="w-12 h-4 bg-gray-300"></span>
                    </div>
                </div>
                <div className="p-4">
                    <div className="w-full h-6 bg-gray-300 animate-pulse mb-2"></div>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-16 h-4 bg-gray-300 animate-pulse" />
                        <div className="w-24 h-4 bg-gray-300 animate-pulse" />
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                        <div className="w-16 h-4 bg-gray-300 animate-pulse" />
                        <div className="w-16 h-4 bg-gray-300 animate-pulse" />
                    </div>
                    <button className="mt-4 w-full bg-gray-300 text-transparent text-sm px-5 py-2 rounded-lg shadow-md animate-pulse">
                        <span className="w-24 h-6 bg-gray-300 animate-pulse"></span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <Link to={`/product/${product._id}`} className="block">
            <div className="border rounded-xl shadow-lg overflow-hidden bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="relative">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-48 object-cover"
                    />
                    {product.discount > 0 && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
                            -{product.discount}%
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-gray-400 line-through text-sm">{product.originalPrice} د.إ</span>
                        <span className="text-green-600 font-bold text-lg">{product.price} د.إ</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                        <span className="font-medium">{product.tag}</span>
                        <span className="font-medium">| SKU: {product.SKU}</span>
                    </div>
                    <button className="mt-4 w-full bg-gray-800 text-white text-sm px-5 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </Link>
    );
};

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/get-products`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(true); // Set loading to true in case of error
            } finally {
                if (error) {
                    setLoading(true); // Set loading to false regardless of success or failure
                }
                setLoading(false)
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-6 py-10">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {loading
                    ? Array.from({ length: 12 }).map((_, index) => (
                        <ProductCard key={index} loading />
                    ))
                    : products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
            </div>
        </div>
    );

};

export default ProductGrid;
