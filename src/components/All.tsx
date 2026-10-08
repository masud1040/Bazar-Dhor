import { IProduct } from "@/types/product";
import ProductCard from "./ProductCard";

interface IProps {
  products: IProduct[];
}

const All = ({ products }: IProps) => {
  return (
    <section
      id="সব-পণ্য"
      className="container  mx-auto px-4 py-6"
    >
      <h2 className="text-2xl font-bold mb-4">
        সব পণ্য
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default All;