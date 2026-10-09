
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";

interface Product {
  id: number;
  nameBn: string;
  categoryIcon: string;
  unit: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const Marquee = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  const data: Product[] = await res.json();

  return (
    <div className="border-y border-gray-200 bg-white">
      <div className="container mx-auto flex w-full max-w-full px-2 sm:px-4 md:px-6">
        <MarqueeText
          className="py-2 text-sm sm:text-base"
          direction="right"
          duration={20}
        >
          {data.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="mx-3 whitespace-nowrap sm:mx-4 md:mx-6"
            >
              <span>{product.categoryIcon}</span>{" "}
              <span>{product.nameBn}</span>{" "}
              <span>
                {product.today} টাকা/{product.unit}
              </span>{" "}
              {product.change.dir === "up" ? (
                <span className="text-red-500">
                  <FaArrowTrendUp className="inline" />{" "}
                  {product.change.pct}%
                </span>
              ) : (
                <span className="text-green-600">
                  <FaArrowTrendDown className="inline" />{" "}
                  {product.change.pct}%
                </span>
              )}
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;