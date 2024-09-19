"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { useEffect } from 'react';

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

import Services from './services/page'; // Aqui você importa o componente Services
import Resume from './resume/page'; // Aqui você importa o componente Services
import Contact from './contact/page'; // Aqui você importa o componente Services
import Work from './work/page'; // Aqui você importa o componente Services

const Home = () => {
  return (
    <div>
      {/* Seção 1 */}
      <section id="home" className="min-h-screen section bg-primary">
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Game Designer e Desenvolvedor Unity</span>
              <h1 className="h1 mb-6">
                Olá! Eu sou <br /> <span className="text-accent">Pedro Lima</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Sou um desenvolvedor de jogos determinado em desenvolver as melhores experiências possíveis
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 */}
          <Services />


      {/* Seção 3 */}
          <Resume/>

      {/* Seção 4 */}
          <Work/>
    </div>
  );
};

export default Home;
