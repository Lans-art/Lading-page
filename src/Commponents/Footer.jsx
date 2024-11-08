import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-slate-800 text-white py-6 ">
        <div className="w-full sm:w-11/12 md:w-4/5 mx-auto flex gap-2 flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6 place-items-center p-4 md:p-0">
          {/* About Us Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="text-sm mt-2 max-w-md md:mx-0 text-justify">
              KONCI.ID merupakan perusahaan yang bergerak di bidang Perguruan
              Tinggi (PT) dan memfokuskan diri pada Akreditasi PT, Pendirian PT,
              Penambahan Program Studi, dll.
            </p>
          </div>

          {/* Our Services Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Our Services</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-2 text-left">
              <ul className="text-sm space-y-1 md:list-disc">
                <li>Akreditasi</li>
                <li>Pendirian Perguruan Tinggi</li>
                <li>Penambahan Program Studi Baru</li>
                <li>Alih Kelola Perguruan Tinggi</li>
              </ul>
              <ul className="text-sm space-y-1 md:list-disc">
                <li>SEO Service</li>
                <li>Hardware & Networking</li>
                <li>Online Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <ul className="text-sm space-y-1 ">
                <li>
                  <a
                    href="https://www.facebook.com/people/CV-Konci/100068441943105/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cvkonciid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://konci.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500"
                  >
                    Konci.Id
                  </a>
                </li>
              </ul>
              <ul className="text-sm space-y-1 ">
                <li>
                  <a
                    href="https://www.tokopedia.com/rame-tech?source=universe&st=product"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500"
                  >
                    Tokopedia
                  </a>
                </li>
                <li>
                  <a
                    href="https://shopee.co.id/konci.id?entryPoint=ShopBySearch&searchKeyword=rame%20tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500"
                  >
                    Shopee
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lazada.co.id/shop/rame-tech/?itemId=4954902817&spm=a2o4j.pdp_revamp.seller.1.6c2645d3tij1NI&path=promotion-433727-0.htm&tab=promotion&channelSource=pdp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500"
                  >
                    Lazada
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="w-full text-center mt-4">
          <p className="text-xs">
            © {new Date().getFullYear()} CV. Konci. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
