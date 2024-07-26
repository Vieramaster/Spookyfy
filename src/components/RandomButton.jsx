import IcoRandom from "../icons/icoRandom";

export default function RandomButton() {
  return (
    <button className="text-text-sub hover:text-text-base">
      <IcoRandom
        fill={"fill-text-sub hover:fill-text-base "}
        value={"1rem"}
      />
    </button>
  );
}
