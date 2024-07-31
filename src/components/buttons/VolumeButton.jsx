import IcoVolume from "../icons/IcoVolume";

export default function VolumeButton() {
  return (
    <button>
      <IcoVolume
        className={
          "h-4 w-4 fill-text-sub hover:fill-text-base  ease-in-out duration-200"
        }
      />
    </button>
  );
}
