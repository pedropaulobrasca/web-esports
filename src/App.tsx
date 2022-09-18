import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

import "./styles/main.css";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBunner } from "./components/CreateAdBanner";

import logoImg from "./assets/logo-nlw-esports.svg";
import { CreateAdModal } from "./components/CreateAdModal";

export interface Game {
  id: number;
  title: string;
  bannerUrl: string;
  ads: [];
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col m-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlwGradient bg-clip-text">
          duo
        </span>{" "}
        esta aqui.
      </h1>

      {/* //TODO: Usar o Keen-Slider para carrosel */}
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            source={game.bannerUrl}
            title={game.title}
            adsCount={game?.ads.length}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBunner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
