"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const SignInPage = () => {
  return (
    <main className="min-h-screen bg-[#f5f9f5] px-4 py-10">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-gray-800">
            সাইন ইন করুন
          </h1>

          <p className="text-gray-500 mt-2">
            আপনার অ্যাকাউন্টে প্রবেশ করে বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ইমেইল
              </label>

              <input
                type="email"
                name="email"
                placeholder="masud@gmail.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                পাসওয়ার্ড
              </label>

              <input
                type="password"
                name="password"
                placeholder="আপনার পাসওয়ার্ড"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-medium"
            >
              সাইন ইন করুন
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-gray-200 flex-1"></div>

            <span className="text-sm text-gray-500">অথবা</span>

            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="border border-gray-200 rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2"
            >
              <FcGoogle size={20} />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              className="border border-gray-200 rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2"
            >
              <FaGithub size={20} />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-5">
            অ্যাকাউন্ট নেই?{" "}
            <a
              href="/signup"
              className="text-green-600 font-medium"
            >
              সাইন আপ করুন
            </a>
          </p>
        </div>

        <Link
          href="/"
          className="block text-center text-sm text-gray-500 mt-7"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default SignInPage;