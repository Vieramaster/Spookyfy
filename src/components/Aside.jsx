import AsideButton from "./buttons/AsideButton";
import IcoHome from "./icons/IcoHome";
import IcoSearch from "./icons/IcoSearch";
import IcoLibrary from "./icons/IcoLibrary";
import LibraryButton from "./buttons/LibraryButton";

export default function Aside() {
  return (
    <section className=" [grid-area:aside]  rounded-lg flex flex-col gap-2 ">
      <div className="w-full h-[120px] p-2 bg-background-base rounded-lg">
        <AsideButton
          name={"Home"}
          height={"h-1/2"}
          svg={<IcoHome className={"w-6 h-6  "} />}
        />
        <AsideButton
          name={"Search"}
          height={"h-1/2"}
          svg={<IcoSearch className={"w-6 h-6"} />}
        />
      </div>
      <div className="w-full h-[calc(100%-100px)] bg-background-base p-2 rounded-lg">
        <AsideButton
          name={"Library"}
          height={"h-[50px]"}
          svg={<IcoLibrary className={"w-6 h-6"} />}
        />
        <LibraryButton />
      </div>
    </section>
  );
}
