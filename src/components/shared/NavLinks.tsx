import Link from "next/link";

interface ICategory {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories"
  );

  const data: ICategory[] = await res.json();

  return (
    <div className="flex items-center justify-center gap-8 py-3">
      {data.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="text-sm font-medium"
        >
          {category.icon} {category.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;