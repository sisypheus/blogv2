import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NextPage } from "next";
import ActiveLink from "./ActiveLink";
import { useRouter } from "next/router";

const Header: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [top, setTop] = useState(true);

  const location = useRouter();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) setTop(false);
      else if (window.scrollY === 0) setTop(true);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div
      className={`z-10 shadow transition duration-200 ease-in ${location.pathname === "/" ? "fixed" : "sticky"
        } top-0 m-auto w-full max-w-full px-4 py-6 md:px-24 lg:px-24 ${top ? "bg-transparent" : " bg-gray-100"
        }`}
    >
      <div className="m-auto flex items-center justify-between">
        <p
          className={`flex flex-1 items-center font-bold ${location.pathname === "/"
              ? top
                ? "text-white"
                : "text-black"
              : "text-black"
            } whitespace-nowrap text-3xl sm:text-4xl`}
        >
          <Link
            className="items-center text-3xl font-bold tracking-tight"
            href="/"
          >
            Theo Poette
          </Link>
        </p>
        <ul className="hidden items-center space-x-8 lg:flex">
          <div className="space-x-6 font-mono text-white ">
            <button className="transform duration-300 hover:-translate-y-1">
              <ActiveLink
                className="rounded-lg bg-gray-600 p-3 text-lg font-semibold hover:bg-gray-800"
                activeClassName="p-3 text-lg rounded-lg font-semibold bg-indigo-700 hover:bg-indigo-800"
                href="/"
              >
                Home
              </ActiveLink>
            </button>
            <button className="transform duration-300 hover:-translate-y-1">
              <Link
                className="rounded-lg bg-gray-600 p-3 text-lg font-semibold hover:bg-gray-800"
                href="/#featured-posts"
              >
                Featured
              </Link>
            </button>
            <button className="transform duration-300 hover:-translate-y-1">
              <ActiveLink
                className="rounded-lg bg-gray-600 p-3 text-lg font-semibold hover:bg-gray-800"
                activeClassName="p-3 text-lg rounded-lg font-semibold bg-indigo-700 hover:bg-indigo-800"
                href="/posts/"
              >
                Posts
              </ActiveLink>
            </button>
            <button className="transform duration-300 hover:-translate-y-1">
              <a
                href="https://theopoette.me"
                className="rounded-lg bg-gray-600 p-3 text-lg font-semibold hover:bg-gray-800"
              >
                My website
              </a>
            </button>
          </div>
        </ul>
        {/* mobile menu toggle */}
        <div className="flex flex-1 justify-end lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 right-4 top-16 z-20">
              <div className="h-full transform rounded border bg-gray-100 px-4 pt-4 pb-8 shadow-sm transition-all delay-150">
                <nav>
                  <ul className="space-y-6">
                    <li>
                      <button className="transform duration-300 hover:-translate-y-1">
                        <ActiveLink
                          className="rounded-lg p-3 text-lg font-semibold"
                          onClick={() => setIsMenuOpen(false)}
                          activeClassName="p-3 text-lg rounded-lg font-semibold text-indigo-700"
                          href="/"
                        >
                          Home
                        </ActiveLink>
                      </button>
                    </li>
                    <li>
                      <button className="transform duration-300 hover:-translate-y-1">
                        <Link
                          className="rounded-lg p-3 text-lg font-semibold"
                          onClick={() => setIsMenuOpen(false)}
                          href="/#featured-posts"
                        >
                          Featured
                        </Link>
                      </button>
                    </li>
                    <li>
                      <button className="transform duration-300 hover:-translate-y-1">
                        <ActiveLink
                          className="rounded-lg p-3 text-lg font-semibold"
                          onClick={() => setIsMenuOpen(false)}
                          activeClassName="p-3 text-lg rounded-lg font-semibold text-indigo-700"
                          href="/posts/"
                        >
                          Posts
                        </ActiveLink>
                      </button>
                    </li>
                    <li>
                      <button className="transform duration-300 hover:-translate-y-1">
                        <a
                          href="https://theopoette.me"
                          className="rounded-lg p-3 text-lg font-semibold"
                        >
                          My website
                        </a>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
