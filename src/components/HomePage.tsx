import Hero from "./Hero";
import Up from "./Up";
import Down from "./Down";
import All from "./All";
import { IProduct } from "@/types/product";

const HomePage = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products"
  );

  const products: IProduct[] = await res.json();

  const upProducts = products.filter(
    (product) => product.change.dir === "up"
  );

  const downProducts = products.filter(
    (product) => product.change.dir === "down"
  );

  return (
    <main>
      <Hero />

      <Up products={upProducts} />

      <Down products={downProducts} />

      <All products={products} />
    </main>
  );
};

export default HomePage;