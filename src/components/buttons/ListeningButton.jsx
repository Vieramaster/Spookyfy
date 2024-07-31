import IcoListening from "../icons/IcoListening";

export default function ListeningButton() {
  return (
    <button>
      <IcoListening
        className={
          "h-4 w-4 fill-text-sub hover:fill-text-base hover:scale-105 ease-in-out duration-200"
        }
      />
    </button>
  );
}
