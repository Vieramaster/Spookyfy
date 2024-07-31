//Ico
import IcoCirclePlus from "./icons/IcoCirclePlus";
import RandomButton from "./buttons/RandomButton";
import BackPlayerButton from "./buttons/BackPlayerButton";
import PlayPauseButton from "./buttons/PlayPauseButton";
import FowardPlayerButton from "./buttons/FowardPlayerButton";
import RepeatPlayerButton from "./buttons/RepeatPlayerButton";
import ListeningButton from "./buttons/ListeningButton";
import LyricsButton from "./buttons/LyricsButton";
import PlayListButton from "./buttons/PlayListButton";
import DeviceButton from "./buttons/DeviceButton";
import VolumeButton from "./buttons/VolumeButton";
import ExpandButton from "./buttons/ExpandButton";

export default function Player() {
  return (
    <footer className="[grid-area:player]  h-[70px] flex gap-2">
      <section className=" pl-5 w-[30%]">
        <div className="flex h-full w-60 items-center justify-start gap-3">
          <img src="" alt="" className="h-14 w-14 rounded-lg" />
          <span className="max-w-28 ">
            <h3 className="truncate">Title Song</h3>
            <p className=" truncate">Artist</p>
          </span>
          <IcoCirclePlus className={"w-4 h-4"} />
        </div>
      </section>
      <section className="h-full w-[40%] flex flex-col">
        <div className="h-2/3 w-full  flex gap-6 justify-center items-center">
          <RandomButton />
          <BackPlayerButton />
          <PlayPauseButton className={"w-8 h-8 bg-text-base "}/>
          <FowardPlayerButton />
          <RepeatPlayerButton />
        </div>
        <div className="h-1/3 w-full flex place-content-center items-center gap-2">
          <p className="text-text-sub text-xs font-semibold ">0:00</p>
          <input
            type="range"
            name="sliderSong"
            id="sliderSong"
            min={0}
            max={100}
            className="w-full max-w-[620px] h-1 rounded-full text-sub "
          />
          <p className="text-text-sub text-xs font-semibold">03:20</p>
        </div>
      </section>
      <section className=" h-full w-[30%] flex gap-4 justify-end px-2">
        <ListeningButton />
        <LyricsButton />
        <PlayListButton />
        <DeviceButton />
        <div className=" flex-grow flex gap-2 min-w-10 max-w-36 items-center">
          <VolumeButton />
          <input
            type="range"
            name=""
            id=""
            className="w-full h-1 rounded-full"
          />
        </div>

        <ExpandButton />
      </section>
    </footer>
  );
}
