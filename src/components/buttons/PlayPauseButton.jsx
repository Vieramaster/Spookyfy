import IcoPlay from "../icons/IcoPlay";
import IcoPause from "../icons/IcoPause";

export default function PlayPauseButton({ className, boolean }) {
  return (
    <button
      className={`${className}  rounded-full  hover:scale-105 duration-200 ease-in-out flex items-center place-content-center`}
    >
      {boolean ? (
        <IcoPlay className={"w-4 h-4 fill-background-base"} />
      ) : (
        <IcoPause className={" w-4 h-4 fill-background-base"} />
      )}
    </button>
  );
}
