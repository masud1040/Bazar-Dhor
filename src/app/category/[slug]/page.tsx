import CategoryProducts from "@/components/CategoryProducts";
import { IProduct } from "@/types/product";


const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/bazardor/products?category=${slug}`
  );

  const products: IProduct[] = await res.json();

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="bg-white border rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">
            {products[0]?.categoryIcon}
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              {products[0]?.categoryNameBn}
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              প্রতি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      <CategoryProducts products={products} />
    </main>
  );
};

export default CategoryPage;