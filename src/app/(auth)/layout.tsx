import { P } from "@/components/custom/p";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex items-center justify-center w-full h-screen bg-zinc-900 overflow-hidden">
      {/* Left Side - Info Section */}
      <div className="hidden md:flex flex-1 h-full items-center justify-center p-10 shadow-lg shadow-zinc-800 relative">
        <div className="max-w-md text-center px-6 py-8 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 space-y-4">
          <h1 className="text-white text-4xl font-extrabold tracking-wide drop-shadow-lg">
            Telegram Gains 🚀
          </h1>
          <P className="text-white text-lg opacity-90 leading-relaxed">
            The ultimate platform to monetize your Telegram group effortlessly.
          </P>
        </div>
      </div>

      {/* Right Side - Auth/Form Section */}
      <div className="flex-1 w-full h-full flex items-center justify-center p-6 bg-zinc-300 rounded-tl-3xl rounded-bl-2xl ">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
