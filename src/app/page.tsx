import {
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Library,
  List,
  Maximize2,
  Mic2,
  MonitorSmartphone,
  Play,
  Repeat,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume1,
} from "lucide-react";
import Image from "next/image";
import Sidebar from "./../components/Sidebar";
import Footer from "./../components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 ">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded- full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded- full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-8">Bem vindo!</h1>

          <div className="grid grid-cols-3 gap-4 mt-4 ">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
              />
              <strong>Melhor Álbum</strong>
              <button className="shadow-inner shadow-black invisible flex group-hover:visible w-10 h-10  items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 ">
                <Play />
              </button>
            </a>

            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
              />
              <strong>Melhor Álbum</strong>
              <button className="invisible flex group-hover:visible w-10 h-10  items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
              />
              <strong>Melhor Álbum</strong>
              <button className="invisible flex group-hover:visible w-10 h-10  items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
              />
              <strong>Melhor Álbum</strong>
              <button className="invisible flex group-hover:visible w-10 h-10  items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
              />
              <strong>Melhor Álbum</strong>
              <button className="invisible flex group-hover:visible w-10 h-10  items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
              />
              <strong>Melhor Álbum</strong>
              <button className="invisible flex group-hover:visible w-10 h-10  items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-8">Feito para Você!</h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">NightWish Forever</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">NightWish Forever</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">NightWish Forever</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">NightWish Forever</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">NightWish Forever</span>
            </a>
            <a
              href=""
              className="flex flex-col gap-2 bg-white/5 p-3 rounded-md hover:bg-white/10"
            >
              <Image
                src="/Night.webp"
                width={104}
                height={104}
                alt="Capa do Álbum"
                className="w-full"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">NightWish Forever</span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
