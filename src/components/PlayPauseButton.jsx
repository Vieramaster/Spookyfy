import IcoPlay from "../icons/IcoPlay";
import IcoPause from "../icons/IcoPause";

export default function PlayPauseButton({ value }) {
  return (
    <button className="w-10 h-10 rounded-full bg-text-base hover:scale-105 duration-200 ease-in-out flex items-center place-content-center ">
      {value ? (
        <IcoPlay
          fill={"fill-background-base"}
          value={"1.5rem"}
        />
      ) : (
        <IcoPause
          fill={"fill-background-base"}
          value={"1.5rem"}
        />
      )}
    </button>
  );
}
