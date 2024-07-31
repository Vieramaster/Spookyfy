import PlayPauseButton from "./buttons/PlayPauseButton";

export default function ArtistCard({
  className,
  alt,
  image,
  mainTitle,
  audioTitle,
  roundedImage,
}) {
  return (
    <li
      className={`${className}  h-full flex-grow flex flex-col p-5 hover:bg-background-highlight rounded-lg ease-in-out duration-200 group`}
    >
      <div className="w-full h-auto mx-auto relative">
        <img
          src={image}
          alt={alt}
          className={`w-full h-full ${
            roundedImage ? "rounded-full" : "rounded-xl"
          } group`}
        />
        <span className="absolute bottom-0 right-2 w-auto h-auto opacity-0 group-hover:opacity-100 group-hover:bottom-2 duration-200 ease-in-out ">
          <PlayPauseButton className={"w-14 h-14 bg-green"} />
        </span>
      </div>
      <h3 className="font-semibold  text-text-base mt-2">{mainTitle}</h3>
      <p className="font-semibold text-sm text-text-sub">{audioTitle}</p>
    </li>
  );
}
