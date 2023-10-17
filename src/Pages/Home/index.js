import React from "react";
import Navigation from "../../components/Navigation";

const Home = () => {
  return (
    <>
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <span className="text-orange-600 font-bold text-3xl">I'm</span>
              <h1 class="text-3xl lg:text-5xl font-bold uppercase">
                apon khan Mahmud
              </h1>

              <p class="mt-3 text-gray-600 dark:text-gray-400">
                A passionate UI/UX Designer and Web Developer based In NYC, USA
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              class="w-full h-full lg:max-w-3xl"
              src="https://i.ibb.co/gzMg6zF/i.webp"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Home;
