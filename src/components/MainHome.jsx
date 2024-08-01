import MainPlaylist from "./MainPlaylist";
import MainFooter from "./MainFooter";

export default function MainHome() {
  const list = [
    {
      alt: "titulo",
      image: "./images/Foto.jfif",
      mainTitle: "Artist",
      audioTitle: "Artist Song",
    },
    {
      alt: "titulo",
      image: "./images/Foto.jfif",
      mainTitle: "Artist",
      audioTitle: "Artist Song",
    },
    {
      alt: "titulo",
      image: "./images/Foto.jfif",
      mainTitle: "Artist",
      audioTitle: "Artist Song",
    },
    {
      alt: "titulo",
      image: "./images/Foto.jfif",
      mainTitle: "Artist",
      audioTitle: "Artist Song",
    },
    {
      alt: "titulo",
      image: "./images/Foto.jfif",
      mainTitle: "Artist",
      audioTitle: "Artist Song",
    },
    {
      alt: "titulo",
      image: "./images/Foto.jfif",
      mainTitle: "Artist",
      audioTitle: "Artist Song",
    },
    {
      alt: "titulo",
      image: "./images/Foto.jfif",
      mainTitle: "Artist",
      audioTitle: "Artist Song",
    },
  ];

  return (
    <div className=" my-16 mx-5 flex flex-col ">
      <MainPlaylist
        title={"Popular artist"}
        subTitle={"Show everything"}
        playList={list}
        ImageCircular={true}
      />
      <MainPlaylist
        title={"Popular albums"}
        subTitle={"Show everything"}
        playList={list}
        ImageCircular={false}
      />
      <MainPlaylist
        title={"Popular stations"}
        subTitle={"Show everything"}
        playList={list}
        ImageCircular={false}
      />
      <MainPlaylist
        title={"Featured list"}
        subTitle={"Show everything"}
        playList={list}
        ImageCircular={false}
      />
      <MainPlaylist
        title={"Spotify playlist"}
        subTitle={"Show everything"}
        playList={list}
        ImageCircular={false}
      />
      <MainFooter />
    </div>
  );
}
