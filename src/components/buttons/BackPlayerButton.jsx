import IcoBackPlayer from "../icons/IcoBackPlayer";

export default function BackPlayerButton() {
  return (
    <button>
      <IcoBackPlayer
        className={
          " h-4 w-4 fill-text-sub hover:fill-text-base ease-in-out duration-200"
        }
      />
    </button>
  );
}
