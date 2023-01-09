import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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
  }, []);

  return (
    <div
      className={`z-10 transition duration-200 ease-in ${
        location.pathname === "/" ? "fixed" : "sticky"
      } top-0 m-auto w-full bg-transparent px-4 py-6 sm:max-w-xl md:max-w-full md:px-24 lg:px-24 ${
        top ? "" : " bg-gray-100"
      }`}
    >
      <div className="m-auto flex items-center justify-between">
        <p
          className={`flex-1 font-bold ${
            location.pathname === "/"
              ? top
                ? "text-white"
                : "text-black"
              : "text-black"
          } whitespace-nowrap text-3xl sm:text-4xl`}
        >
          <Link className="tracking-tighter" href="/">
            {"<THEO'S BLOG>"}
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
        <a
          href="https://github.com/sisypheus"
          className={`invisible flex flex-1 justify-end sm:visible`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              location.pathname === "/"
                ? top
                  ? "text-white"
                  : "text-black"
                : "text-black"
            }  fill-current hover:text-gray-500`}
            fill="white"
            width={32}
            height={32}
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        {/* mobile menu toggle */}
        <div className="flex flex-1 justify-end lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
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
            <div className="absolute top-0 right-0 z-20">
              <div className="h-full transform rounded border bg-gray-100 pt-4 pb-8 pl-8 pr-4 shadow-sm transition-all delay-150">
                <div className="mb-4 flex items-center justify-between space-x-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <span className="text-center text-xl font-bold uppercase tracking-wide text-gray-800">
                        {"<THEO'S BLOG>"}
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="focus:shadow-outline rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
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
                          /* onAnchorLinkClick={() => setIsMenuOpen(false)} */
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
