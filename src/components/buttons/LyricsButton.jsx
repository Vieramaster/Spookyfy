import IcoMicrophone from "../icons/IcoMicrophone";

export default function LyricsButton() {
  return (
    <button>
      <IcoMicrophone
        className={
          "h-4 w-4 fill-text-sub hover:fill-text-base hover:scale-105 ease-in-out duration-200"
        }
      />
    </button>
  );
}
