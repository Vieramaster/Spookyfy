import IcoRandom from "../icons/icoRandom";

export default function RandomButton() {
  return (
    <button className="text-text-sub hover:text-text-base">
      <IcoRandom
        className={
          "w-4 h-4 fill-text-sub hover:fill-text-base ease-in-out duration-200"
        }
      />
    </button>
  );
}
