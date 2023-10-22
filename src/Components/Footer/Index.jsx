const Footer = () => {
  return (
    <>
      <section className="py-10 bg-black sm:pt-16 mt-10 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-2 xl:gap-x-40">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
              <a href="/">
                <img className="w-32" src="/assets/images/logo.png" alt="" />
              </a>
              <p className="text-xl leading-relaxed text-white  mt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                doloremque ducimus atque aperiam iste eius voluptatem esse?
                Laboriosam, minima nemo?
              </p>
            </div>
            <div className="lg:col-span-2">
              {/* <p className="text-base font-semibold text-gray-900">Company</p> */}

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-2xl text-white transition-all duration-200 hover:text-primary "
                  >
                    {" "}
                    Tentang Kami{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-2xl text-white transition-all duration-200 hover:text-primary "
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-2xl text-white transition-all duration-200 hover:text-primary "
                  >
                    {" "}
                    Layanan{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-2xl text-white transition-all duration-200 hover:text-primary "
                  >
                    {" "}
                    Karir{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-2xl text-white transition-all duration-200 hover:text-primary "
                  >
                    {" "}
                    Pusat Media{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2 mt-4 md:mt-0">
              <p className="text-2xl font-bold text-white">Download</p>

              <ul className="mt-6 space-y-4">
                <div className="flex w-40">
                  <img src="/assets/icon/google play 1.png" alt="" />
                  <img src="/assets/icon/apple store 1.png" alt="" />
                </div>
                <li>
                  <p className="text-2xl font-bold text-white">Social Media</p>
                  <ul className="mt-6 space-y-4">
                    <div className="flex space-x-4">
                      <img src="/assets/icon/face 1.png" alt="" />
                      <img src="/assets/icon/pinterest 1.png" alt="" />
                      <img src="/assets/icon/instagram 1.png" alt="" />
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <div className="flex items-center justify-center">
            <p className="text-xl text-center text-white">
              © Copyright 2023, All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
