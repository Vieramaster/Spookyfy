export default function AsideButton({ name, svg, height, onClick }) {
  return (
    <button
      className={`w-full ${height}  flex items-center place-content-center hover:fill-white ease-in-out duration-300 rounded-lg`}
      onClick={onClick}
    >
      {svg}
      <h2 className="hidden">{name}</h2>
    </button>
  );
}
