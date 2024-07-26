import IcoCirclePlus from "../icons/IcoCirclePlus";
import RandomButton from "./RandomButton";
import BackPlayerButton from "./BackPlayerButton";
import PlayPauseButton from "./PlayPauseButton";
import FowardPlayerButton from "./FowardPlayerButton";
import RepeatPlayerButton from "./RepeatPlayerButton";

export default function Player() {
  return (
    <footer className="[grid-area:player] bg-yellow-900 h-[75px] flex gap-2">
      <section className="bg-slate-200 pl-5 w-[30%]">
        <div className="flex h-full w-60 items-center justify-start gap-3">
          <img src="" alt="" className="h-14 w-14 rounded-lg" />
          <span className="max-w-28 ">
            <h3 className="truncate">Title Song</h3>
            <p className=" truncate">Artist</p>
          </span>
          <IcoCirclePlus value={"1rem"} />
        </div>
      </section>
      <section className="bg-slate-400 h-full w-[40%] flex flex-col">
        <div className="h-2/3 w-full bg-violet-500 flex gap-5 justify-center items-center">
          <RandomButton/>
          <BackPlayerButton />
          <PlayPauseButton />
          <FowardPlayerButton />
          <RepeatPlayerButton />
        </div>
        <div className="h-1/3 w-full bg-violet-900"></div>
      </section>
      <section className="bg-slate-600 h-full w-[30%]"></section>
    </footer>
  );
}
