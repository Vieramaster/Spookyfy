import Player from "./components/Player";
import Aside from "./components/Aside";
import Main from "./components/Main";

export default function App() {
  return (
    <div
      className="w-screen h-screen bg-red-900 min-w-[500px] p-2 gap-2 grid-cols-[70px,1fr] grid-rows-[1fr,auto] lg:grid-cols-[275px,1fr] 2xl:grid-cols-[275px,1fr] "
      id="App"
    >
      <Aside />
      <Main />
      <Player />
    </div>
  );
}
