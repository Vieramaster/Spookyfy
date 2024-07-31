export default function AsideButton({ name, svg, height, onClick }) {
  return (
    <button
      className={`w-full ${height} flex items-center place-content-center group fill-text-sub hover:fill-white ease-in-out duration-300 rounded-lg gap-4 lg:justify-start lg:pl-5 `}
      onClick={onClick}
    >
      {svg}
      <h2 className="hidden lg:flex font-semibold text-text-sub group-hover:text-white duration-200 ease-in-out">
        {name}
      </h2>
    </button>
  );
}
