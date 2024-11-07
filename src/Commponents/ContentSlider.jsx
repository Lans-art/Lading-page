import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import produkGold from "../img/Gold.jpg"; 
import produkHitam from "../img/Hitam.jpg";
import produkPolos from "../img/Polos.jpg";

const productData = [
  {
    image: produkGold,
    title: "Plastik STNK Gold",
    description:
      "Plastik pelindung STNK Gold hadir dengan desain elegan dan mewah, dihiasi dengan logo Samsat berwarna emas yang menambah kesan eksklusif pada dokumen kendaraan Anda. Material plastik ini berkualitas tinggi, tebal, dan tahan lama, sehingga melindungi STNK dari kerusakan akibat air, debu, dan lipatan. Cocok untuk Anda yang ingin memberikan sentuhan premium pada penyimpanan dokumen kendaraan, dengan tampilan yang lebih menarik dan berkelas.",
  },
  {
    image: produkHitam,
    title: "Plastik STNK Hitam",
    description:
      "Plastik STNK Hitam adalah pilihan pelindung STNK yang simpel dan elegan. Dengan warna dasar hitam dan logo Samsat berwarna kontras, plastik ini memberikan kesan profesional dan rapi. Bahannya kuat dan tidak mudah robek, memastikan STNK terlindungi dari kelembapan dan debu. Ideal untuk pengguna yang menyukai tampilan minimalis namun tetap menjaga keamanan dokumen penting kendaraan mereka.",
  },
  {
    image: produkPolos,
    title: "Plastik STNK Polos",
    description:
      "Plastik STNK Polos adalah pilihan pelindung dasar yang tidak memiliki logo atau hiasan tambahan, menawarkan tampilan sederhana namun tetap efektif dalam melindungi STNK. Plastik ini transparan, sehingga memudahkan untuk melihat isi STNK tanpa perlu membuka atau melepasnya dari pelindung. Bahannya berkualitas, lentur, dan tahan terhadap air dan debu. Cocok bagi pengguna yang mengutamakan fungsi proteksi dengan gaya sederhana tanpa tambahan aksesori atau warna.",
  },
];

function ContentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === productData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productData.length - 1 : prevIndex - 1,
    );
  };

  const { image, title, description } = productData[currentIndex];

  return (
    <div className="flex flex-col md:flex-row items-center w-11/12 md:w-3/4 mx-auto p-5 rounded-lg bg-black/20">
      <img
        src={image}
        alt={title}
        className="w-40 h-40 md:w-80 md:h-80 md:m-5 rounded-md border-4 border-red-500 shadow-xl shadow-red-500/50 brightness-125"
      />
      <div className="flex flex-col mt-5 md:mt-0 top-0 w-full">
        <h3 className="text-xl font-semibold text-white md:ml-5 mb-3">
          {title}
        </h3>
        <p className="md:m-5 text-justify text-sm sm:text-lg text-white">
          {description}
        </p>
        <div className="flex justify-between mt-5 mx-auto space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-700"
          >
            <FaArrowLeft />
          </button>
          <a
            href="https://shopee.co.id/2-Pcs-GROSIR!!-Plastik-STNK-Asli-Samsat-Logo-Warna-Gold-Warna-Hitam-Plastik-Pelindung-STNK-i.221447459.20132483335?sp_atk=b2ff03a4-3ae9-4865-90f1-ea709c4c47b5&xptdk=b2ff03a4-3ae9-4865-90f1-ea709c4c47b5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-10 bg-red-500 hover:bg-red-400 rounded-md text-center p-2 text-white"
          >
            Buy
          </a>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-700"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentSlider;
