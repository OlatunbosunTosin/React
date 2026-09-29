import { Link } from "react-router";

const ProductCard = ({ product }) => {

  return (
    <li
      key={product.id}
      className="bg-white flex flex-col rounded-md border border-slate-200 shadow-sm relative"
    >
      <Link
        to={`/products/${product.id}`}
        className="rounded-md block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full aspect-[18/24] object-cover object-top"
        />

        <div className="p-4">
          <h3 className="text-sm md:text-base font-semibold text-slate-900 line-clamp-2">
            {product.title}
          </h3>

          <p className="text-base mt-2 font-semibold text-slate-700">
            ${product.price}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
