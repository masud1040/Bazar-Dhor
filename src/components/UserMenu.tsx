
"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
  const { error } = await authClient.signOut();

  if (error) {
    toast.error(error.message);
    return;
  }

  toast.success("সফলভাবে লগ আউট হয়েছে!");

  setTimeout(() => {
    window.location.href = "/sign-in";
  }, 1000);
};

  if (isPending) {
    return <div className="h-10 w-24 animate-pulse rounded-lg bg-gray-100" />;
  }

  return (
    <div className="flex items-center gap-3 text-sm">
      {user ? (
        <>
          <div className="flex items-center gap-3">
            <Link href="/profile">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "Profile"}
                    width={40}
                     height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg font-bold text-green-700">
                  U
                </div>
              )}
            </Link>

            <Link
              href="/profile"
              className="max-w-32 truncate font-semibold text-gray-800"
            >
              {user.name}
            </Link>
          </div>

          <button
            onClick={handleSignout}
            className="rounded-lg bg-red-500 px-3 py-2 text-white transition hover:bg-red-600"
          >
            Log Out
          </button>
        </>
      ) : (
        <div className="flex items-center gap-2">
          <Link
            href="/sign-in"
            className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            সাইন ইন
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white transition hover:bg-green-700"
          >
            সাইন আপ
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
