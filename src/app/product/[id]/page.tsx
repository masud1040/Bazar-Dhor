import { notFound } from "next/navigation";
import { IProduct } from "@/types/product";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products/${id}`
  );

  if (!res.ok) {
    notFound();
  }

  const product: IProduct = await res.json();

  const minPrice = Math.min(...product.markets.map((market) => market.min));
  const maxPrice = Math.max(...product.markets.map((market) => market.max));

  const average = (minPrice + maxPrice) / 2;
  
 

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center justify-center bg-gray-100 rounded-xl w-full md:w-1/3 h-56">
            <span className="text-7xl">{product.image}</span>
          </div>

          <div className="flex-1">
            <p className="text-sm text-gray-500">
              {product.categoryIcon} {product.categoryNameBn}
            </p>

            <h1 className="text-3xl font-bold mt-2">{product.nameBn}</h1>

            <p className="text-gray-500 mt-2">প্রতি {product.unit}</p>

            <div className="mt-6">
              <p className="text-sm text-gray-500">আজকের দাম</p>

              <p className="text-3xl font-bold">
                {product.today} টাকা
              </p>
            </div>

            <p className="text-gray-600 mt-4">
              {product.change.dir === "up" && "আজ দাম বেড়েছে"}
              {product.change.dir === "down" && "আজ দাম কমেছে"}
              {product.change.dir === "flat" && "আজ দাম অপরিবর্তিত"}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-gray-500">সর্বনিম্ন দাম</p>
          <p className="text-2xl font-bold mt-2 text-green-600">{minPrice} টাকা</p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-gray-500 ">সর্বোচ্চ দাম</p>
          <p className="text-2xl font-bold mt-2 text-red-700">{maxPrice} টাকা</p>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <p className="text-sm text-gray-500">গড় দাম</p>
          <p className="text-2xl font-bold mt-2 text-green-600">
            {average.toFixed(0)} টাকা
          </p>
        </div>
      </div>

      <div className="bg-white border rounded-2xl mt-6 overflow-x-auto">
        <div className="p-5">
          <h2 className="text-2xl font-bold">বাজারভিত্তিক দাম</h2>
          <p className="text-gray-500 mt-1">
            বিভিন্ন বাজারে আজকের দামের তালিকা
          </p>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="border-t border-b bg-gray-50">
              <th className="p-4">বাজার</th>
              <th className="p-4">বিভাগ</th>
              <th className="p-4">সর্বনিম্ন</th>
              <th className="p-4">সর্বোচ্চ</th>
            </tr>
          </thead>

          <tbody>
            {product.markets.map((market) => (
              <tr
                key={`${market.market}-${market.division}`}
                className="border-b"
              >
                <td className="p-4 font-medium">{market.market}</td>
                <td className="p-4">{market.division}</td>
                <td className="p-4">{market.min} টাকা</td>
                <td className="p-4">{market.max} টাকা</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ProductDetails;