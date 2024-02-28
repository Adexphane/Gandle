"use client";

import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { usePathname, useRouter } from "next/navigation";

export default function Privacy() {
  const router = useRouter();

  return (
    <div>
      <section className="bg-[#F5F6F1] pb-52 lg:pb-24">
        <div className=" pt-9 pl-9" onClick={() => router.back()}>
          <BiArrowBack className=" text-[30px] text-[#B81D23]" />
        </div>
        <div className="py-8 px-24 mx-auto max-w-screen-xl text-center lg:py-6">
          <h1 className="mb-10 text-4xl font-bold tracking-tight leading-none text-[#B81D23] md:text-5xl lg:text-6xl">
            Privacy
          </h1>
          <p className="mb-8 text-md font-normal text-gray-800 lg:text-md sm:px-16 lg:px-8">
            Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me
            exige, sin tapujos, que añada cerveza al whisky. Jovencillo
            emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada
            vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el
            éxtasis en un imprevisto baño de whisky y gozó como un duque.
            Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de
            gavilán. El cadáver de Wamba, rey godo de España, fue exhumado y
            trasladado en una caja de zinc que pesó un kilo. El pingüino
            Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a
            su querido cachorro. El veloz murciélago hindú comía feliz cardillo
            y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.
            Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me
            exige, sin tapujos, que añada cerveza al whisky. Jovencillo
            emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada
            vez mejor el saxofón y el búho pedía kiwi y queso. El jefe buscó el
            éxtasis en un imprevisto baño de whisky y gozó como un duque.
            Exhíbanse politiquillos zafios, con orejas kilométricas y uñas de
            gavilán. El cadáver de Wamba, rey godo de España, fue exhumado y
            trasladado en una caja de zinc que pesó un kilo. El pingüino
            Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a
            su querido cachorro. El veloz murciélago hindú comía feliz cardillo
            y kiwi. La cigüeña tocaba el saxofón detrás del palenque de
            paja.Quiere la boca exhausta vid, kiwi, piña y fugaz jamón. Fabio me
            exige, sin tapujos, que añada cerveza al whisky. Jovencillo
            emponzoñado de whisky, ¡qué figurota exhibes! La cigüeña tocaba cada
            vez mejor el saxofón y el búho pedía kiwi y queso. Quiere la boca
            exhausta vid, kiwi, piña yh paja.Quiere la boca exhausta vid, kiwi,
            piña y fugaz jamón. Fabio me exige, sin tapujos, que añada cerveza
            al whisky. Jovencillo
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              onClick={() => router.push("/")}
              className="py-4 px-12 sm:ms-4 text-sm font-medium text-white focus:outline-none bg-[#21201E] rounded-full border border-gray-200 hover:bg-[#3c3a37] focus:z-10 focus:ring-4 focus:ring-gray-100 transition-all"
            >
              Try Gangle
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
