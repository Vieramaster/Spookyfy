import IcoPlayList from "../icons/IcoPlayList";

export default function PlayListButton() {
  return (
    <button>
      <IcoPlayList
        className={
          "h-4 w-4 fill-text-sub hover:fill-text-base hover:scale-105 ease-in-out duration-200"
        }
      />
    </button>
  );
}
