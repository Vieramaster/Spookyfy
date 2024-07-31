import MainHeader from "./MainHeader";
import MainHome from "./MainHome";

export default function Main() {
  return (
    <section className="[grid-area:main] bg-background-base rounded-xl overflow-auto">
      <MainHeader />
      <MainHome/>
    </section>
  );
}
