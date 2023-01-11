import { NextPage } from "next";

const Footer: NextPage = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex items-center justify-center py-8">
      <p className="text-sm text-gray-500">
        © {year} Theo Poette. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

