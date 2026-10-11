import CategoryNavLink from "./CategoryNavLink";

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
    <nav className="w-full border-t border-gray-100 bg-white">
      <div className="scrollbar-hide flex w-full items-center justify-start gap-5 overflow-x-auto px-4 py-3 sm:justify-center sm:gap-6 sm:px-5 md:gap-8">
        {data.map((category) => (
          <CategoryNavLink
            key={category.id}
            slug={category.slug}
            nameBn={category.nameBn}
            icon={category.icon}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;