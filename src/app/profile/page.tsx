
"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiLogOut, FiEdit2, FiX } from "react-icons/fi";

const ProfilePage = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newUserData = Object.fromEntries(
      formData.entries()
    ) as {
      name: string;
    };

    const { error } = await authClient.updateUser({
      name: newUserData.name,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("নাম সফলভাবে আপডেট হয়েছে!");
    setShow(false);
  };

  const handleSignout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/sign-in";
  };

  if (isPending) {
    return (
      <main className="min-h-screen bg-[#f5f8f5] px-4 py-10">
        <div className="mx-auto max-w-2xl">
          <span className="loading loading-spinner loading-md text-green-700" />
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#f5f8f5] px-4">
        <div className="card w-full max-w-sm border border-gray-200 bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h1 className="text-lg font-semibold text-gray-800">
              প্রোফাইল দেখতে সাইন ইন করুন
            </h1>

            <p className="text-sm text-gray-500">
              আপনার অ্যাকাউন্টে প্রবেশ করে প্রোফাইল দেখুন।
            </p>

            <Link
              href="/signin"
              className="btn mt-3 border-0 bg-green-700 text-white hover:bg-green-800"
            >
              সাইন ইন
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f8f5] px-4 py-8 sm:py-12">
      <div className="mx-auto max-w-2xl">
        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            আমার প্রোফাইল
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য পরিচালনা করুন।
          </p>
        </div>

        {/* Profile Card */}
        <div className="card border border-gray-200 bg-base-100 shadow-sm">
          <div className="card-body gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex min-w-0 items-center gap-4">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "Profile"}
                  width={64}
                  height={64}
                  unoptimized
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl font-bold text-green-800">
                  U
                </div>
              )}

              <div className="min-w-0">
                <h2 className="truncate font-semibold text-gray-800">
                  {user.name}
                </h2>

                <p className="mt-1 break-all text-sm text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSignout}
              className="btn btn-sm w-full border border-red-200 bg-white text-red-600 hover:bg-red-50 sm:w-auto"
            >
              <FiLogOut size={16} />
              Log Out
            </button>
          </div>
        </div>

        {/* Account Information */}
        <div className="card mt-4 border border-gray-200 bg-base-100 shadow-sm">
          <div className="card-body p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="font-semibold text-gray-800">
                  ব্যক্তিগত তথ্য
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  আপনার নাম আপডেট করুন।
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="btn btn-sm border-0 bg-green-700 text-white hover:bg-green-800"
              >
                {show ? <FiX size={16} /> : <FiEdit2 size={16} />}
                {show ? "বন্ধ করুন" : "Edit"}
              </button>
            </div>

            {show && (
              <form
                onSubmit={handleUpdateProfile}
                className="mt-4 space-y-4"
              >
                <fieldset className="fieldset">
                  <label htmlFor="name" className="fieldset-label">
                    নাম
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={user.name || ""}
                    placeholder="আপনার নাম লিখুন"
                    required
                    className="input input-bordered w-full focus:border-green-700 focus:outline-green-700"
                  />
                </fieldset>

                <button
                  type="submit"
                  className="btn w-full border-0 bg-green-700 text-white hover:bg-green-800"
                >
                  আপডেট করুন
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
