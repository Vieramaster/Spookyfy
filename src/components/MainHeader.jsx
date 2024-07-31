import IcoNavigationArrow from "./icons/IcoNavigationArrow";
import IcoSearch from "./icons/IcoSearch";

export default function MainExplorer() {
  return (
    <header className="bg-background-base w-full h-16 flex justify-start gap-10 items-center px-6 fixed z-50">
      <button className="bg-black rounded-full w-8 h-8 grid place-content-center">
        <IcoNavigationArrow className="h-4 w-4 fill-text-sub" />
      </button>
      <fieldset className="relative flex-grow w-full min-w-22 max-w-96 h-4/6 ">
        <input
          type="search"
          name=""
          id=""
          className="bg-background-highlight text-text-sub w-full h-full rounded-full pl-10 overflow-hidden truncate border  border-transparent  hover:border-background-tinted-base  ease-in-out duration-200"
          placeholder="What do you want to reproduce?"
        />
        <IcoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 fill-text-sub " />
      </fieldset>
    </header>
  );
}
