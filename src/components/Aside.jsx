import AsideButton from "./AsideButton";
import IcoHome from "../icons/IcoHome";
import IcoSearch from "../icons/IcoSearch";
import IcoLibrary from "../icons/IcoLibrary";
import LibraryButton from "./LibraryButton";

export default function Aside() {
  return (
    <section className=" [grid-area:aside] bg-green-900 rounded-lg flex flex-col gap-2 ">
      <div className="w-full h-[120px] p-2 bg-slate-400 rounded-lg">
        <AsideButton
          name={"Home"}
          height={"h-1/2"}
          svg={<IcoHome value={"1.5rem"} />}
        />
        <AsideButton
          name={"Search"}
          height={"h-1/2"}
          svg={<IcoSearch value={"1.5rem"} />}
        />
      </div>
      <div className="w-full h-[calc(100%-100px)] bg-slate-400 rounded-xl flex flex-col gap-2 items-center">
        <AsideButton
          name={"Search"}
          height={"h-[50px]"}
          svg={<IcoLibrary value={"1.5rem"} />}
        />
        <LibraryButton />
      </div>
    </section>
  );
}
