import { useState } from "react";
import ArtistCard from "./ArtistCard";

export default function MainPlaylist({
  playList,
  title,
  subTitle,
  ImageCircular,
}) {
  const [rounded] = useState(ImageCircular);

  return (
    <>
      <ul className="w-full h-20 flex justify-between items-center px-5">
        <li>
          <h2 className="font-bold text-2xl text-text-base">{title}</h2>
        </li>
        <li>
          <p className="font-bold text-md text-text-base">{subTitle}</p>
        </li>
      </ul>
      <ul className="flex">
        {playList?.map((item, index) => (
          <ArtistCard
            key={index}
            alt={item.alt}
            image={item.image}
            mainTitle={item.mainTitle}
            audioTitle={item.audioTitle}
            roundedImage={rounded}
            className={`${
              index === 4
                ? "hidden lg:flex"
                : index === 5
                ? "hidden xl:flex"
                : index === 6
                ? "hidden 2xl:flex"
                : ""
            }`}
          />
        ))}
      </ul>
    </>
  );
}
