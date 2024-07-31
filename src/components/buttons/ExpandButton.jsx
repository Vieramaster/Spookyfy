import IcoExpand from "../icons/IcoExpand";

export default function ExpandButton() {
  return (
    <button>
      <IcoExpand
        className={
          "h-4 w-4 fill-text-sub hover:fill-text-base hover:scale-105 ease-in-out duration-200"
        }
      />
    </button>
  );
}
