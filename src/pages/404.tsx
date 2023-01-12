import { NextPage } from "next";
import Link from "next/link";

const Custom404: NextPage = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="text-center text-xl font-semibold">
          404 - This page could not be found.
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Link
            className="mt-1 rounded-lg bg-indigo-800 p-3 text-lg font-semibold text-white hover:bg-gray-800"
            href="/"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
