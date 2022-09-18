interface Props {
  source: string;
  title: string;
  adsCount: number;
}

export function GameBanner({ source, title, adsCount }: Props) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={source} alt="" />

      <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block mt-1">
          {adsCount} anuncios
        </span>
      </div>
    </a>
  );
}
