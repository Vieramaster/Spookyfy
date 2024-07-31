import ICoRepeatPlayer from "../icons/IcoRepeatPlayer";

export default function RepeatPlayerButton() {
  return (
    <button>
      <ICoRepeatPlayer
        className={
          "w-4 h-4 fill-text-sub hover:fill-text-base ease-in-out duration-200"
        }
      />
    </button>
  );
}
