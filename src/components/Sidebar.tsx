import { HomeIcon, Search, Library } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-300 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="space-y-5 mt-10 rounded">
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
        >
          <Search />
          Buscar
        </a>

        <a
          href=""
          className="flex items-center gap-3 text-xs font-semibold text-zinc-200"
        >
          <Library />
          Biblioteca
        </a>
      </nav>

      <nav className="mt-6 pt-10 rounded  border-t border-zinc-800 flex flex-col gap-1">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Elevate
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Treino Pesado
        </a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          Pop Nacional
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
