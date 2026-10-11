"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  slug: string;
  nameBn: string;
  icon: string;
}

const CategoryNavLink = ({ slug, nameBn, icon }: IProps) => {
  const pathname = usePathname();
  const href = `/category/${slug}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={` whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${
        isActive
          ? "bg-green-700 text-white"
          : "text-gray-700 hover:bg-green-50 hover:text-green-700"
      }`}
    >
      {icon} {nameBn}
    </Link>
  );
};

export default CategoryNavLink;