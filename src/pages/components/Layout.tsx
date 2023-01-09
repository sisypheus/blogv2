import { NextPage } from "next";
/* import Footer from "./Footer"; */
import Header from "./Header";

const Layout: NextPage = ({ children }: any) => {
  return (
    <main className="min-h-screen bg-[#232323]">
      <div className="mx-auto">
        <div className="mx-auto flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          {/* <Footer /> */}
        </div>
      </div>
    </main>
  );
};

export default Layout;
