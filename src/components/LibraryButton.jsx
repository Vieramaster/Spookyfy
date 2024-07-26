export default function ButtonLibrary() {
  return (
    <button className=" w-[90%] h-16 rounded-lg flex items-center justify-center hover:bg-slate-500 ease-in-out duration-300">
      <img src="" alt="" className="h-12 w-12 border-b-orange-300 rounded-lg" />
      <div className=" hidden ">
        <h3>Likes</h3>
        <p>30 songs</p>
      </div>
    </button>
  );
}
