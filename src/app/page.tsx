import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { ChevronRight, ChevronLeft, Play } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar/>
        
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album1.jpg" alt='Capa para álbum ...' width={100} height={100}/>
              <strong>Playlist #1</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album2.jpg" alt='Capa para álbum ...' width={100} height={100}/>
              <strong>Playlist #2</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album3.jpg" alt='Capa para álbum ...' width={100} height={100}/>
              <strong>This Is Ed Motta</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album4.jpg" alt='Capa para álbum ...' width={100} height={100}/>
              <strong>Wasting Light</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album5.jpg" alt='Capa para álbum ...' width={100} height={100}/>
              <strong>O Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/album6.jpg" alt='Capa para álbum ...' width={100} height={100}/>
              <strong>Justice</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h1 className='font-semibold text-2xl mt-10'>Made for Renan Tiberto</h1>

          <div className='grid grid-cols-6 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album6.jpg" className='w-full' alt='Capa para álbum ...' width={120} height={120}/>
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album5.jpg" className='w-full' alt='Capa para álbum ...' width={120} height={120}/>
              <strong className='font-semibold'>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album4.jpg" className='w-full' alt='Capa para álbum ...' width={120} height={120}/>
              <strong className='font-semibold'>Daily Mix 3</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album3.jpg" className='w-full' alt='Capa para álbum ...' width={120} height={120}/>
              <strong className='font-semibold'>Daily Mix 4</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album2.jpg" className='w-full' alt='Capa para álbum ...' width={120} height={120}/>
              <strong className='font-semibold'>Daily Mix 5</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href='#' className='bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10'>
              <Image src="/album1.jpg" className='w-full' alt='Capa para álbum ...' width={120} height={120}/>
              <strong className='font-semibold'>Daily Mix 6</strong>
              <span className='text-sm text-zinc-500'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>

      <Footer/>
    </div>
  )
}
