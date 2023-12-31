import React from "react";

const DefaultLoad = () => {
  return (
    <div className="container">
      <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border">
        <div class="flex-auto p-4">
          <div class="flex flex-wrap -mx-3">
            <div class="max-w-full px-3 lg:w-1/2 lg:flex-none">
              <div class="flex flex-col h-full">
                <p class="pt-2 mb-1 font-semibold">Built by developers</p>
                <h5 class="font-bold">Argon Dashboard</h5>
                <p class="mb-12">
                  From colors, cards, typography to complex elements, you will
                  find the full documentation.
                </p>
                <a
                  class="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500"
                  href="/"
                >
                  Read More
                  <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                </a>
              </div>
            </div>
            <div class="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
              <div class="h-full bg-gradient-to-tl from-blue-500 to-violet-500 rounded-xl">
                <img
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-tailwind/img/shapes/waves-white.svg"
                  class="absolute top-0 hidden w-1/2 h-full lg:block"
                  alt="waves"
                />
                <div class="relative flex items-center justify-center h-full">
                  <img
                    class="relative z-20 w-full pt-6"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-tailwind/img/illustrations/rocket-white.png"
                    alt="rocket"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLoad;
