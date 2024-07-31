import IcoForwardPlayer from "../icons/IcoFowardPlayer";

export default function FowardPlayerButton() {
  return (
    <button>
      <IcoForwardPlayer
        className={
          " h-4 w-4 fill-text-sub hover:fill-text-base ease-in-out duration-200 "
        }
      />
    </button>
  );
}
