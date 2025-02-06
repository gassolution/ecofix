"use client"

// Libs

// UI Libs
import { HeroParallax } from "@/components/ui/hero-parallax";

// Font
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] })

// Icons

// Constructor
const gallery = [
  {
    title: "Grease Trap",
    link: "#",
    thumbnail:
      "/images/onfield-3.jpg",
  },
  {
    title: "Kunjungan",
    link: "#",
    thumbnail:
      "/images/onfield-2.jpg",
  },
  {
    title: "Persiapan Teknisi",
    link: "#",
    thumbnail:
      "/images/onfield-1.jpg",
  },

  {
    title: "Teknisi On Field",
    link: "#",
    thumbnail:
      "/images/onfield-4.jpg",
  },
  {
    title: "Perawatan Grease Trap",
    link: "#",
    thumbnail:
      "/images/onfield-3.jpg",
  },
  {
    title: "Kunjungan SMK",
    link: "#",
    thumbnail:
      "/images/onfield-2.jpg",
  },

  {
    title: "Teknisi PT GAS",
    link: "#",
    thumbnail:
      "/images/onfield-1.jpg",
  },
  {
    title: "Teknisi PT GAS On Field",
    link: "#",
    thumbnail:
      "/images/onfield-4.jpg",
  },
  {
    title: "Grease Trap Service",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "/images/onfield-3.jpg",
  },
  {
    title: "Kunjungan Acara",
    link: "https://smartbridgetech.com",
    thumbnail:
      "/images/onfield-2.jpg",
  },
  {
    title: "Teknisi Ecofix",
    link: "https://renderwork.studio",
    thumbnail:
      "/images/onfield-1.jpg",
  },
];

export default function About() {

  return (
    <>
      <main>
        <div className={`${outfit.className} overflow-x-hidden flex flex-col items-center justify-center p-8 pb-20 sm:p-20 rounded-xl xl:mx-20`}>

          <div className="w-full -my-40">
            <HeroParallax products={gallery} />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-black font-semibold mt-10">
              Visi PT GAS
            </h2>
            <p className="text-md sm:text-xl w-full sm:w-2/3 text-justify">
              Menjadi perusahaan yang terbaik dibidang engineering dan berintegritas.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-black font-semibold mt-10">
              Misi PT GAS
            </h2>
            <div className="text-md sm:text-xl w-full sm:w-2/3 text-justify">
              <ol className="list-decimal">
                <li>
                  Menjadi mitra yang kompeten, profesional, disiplin, dan bertanggung jawab dalam setiap pekerjaan.
                </li>
                <li>
                  Mengutamakan kepuasaan pelanggan.
                </li>
                <li>
                  Selalu berinovasi terhadap kemajuan sistem pelayanan.
                </li>
              </ol>
            </div>
          </div>

        </div>
      </main >
    </>
  );
}