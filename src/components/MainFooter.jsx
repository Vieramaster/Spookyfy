import IcoInstagram from "./icons/IcoInstagram";
import IcoFacebook from "./icons/IcoFacebook";
import IcoTwitter from "./icons/IcoTwitter";

export default function MainFooter() {
  return (
    <footer className="flex p-2 h-auto w-full mt-16">
      <div className="flex-1 h-auto flex flex-col gap-2 ">
        <h2 className="text-text-base font-semibold text-lg">Company</h2>
        <ul>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://www.spotify.com/us/about-us/contact/"
              target="_blank"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://www.lifeatspotify.com/"
              target="_blank"
            >
              Employment
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://newsroom.spotify.com/"
              target="_blank"
            >
              For the Record
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 h-auto flex flex-col gap-5">
        <h2 className="text-text-base font-semibold text-lg">Community</h2>
        <ul>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://artists.spotify.com/home"
            >
              For artists
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://developer.spotify.com/"
            >
              Developers
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://ads.spotify.com/en-US/"
            >
              Advertising
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://investors.spotify.com/home/default.aspx"
            >
              Investors
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://spotifyforvendors.com/"
            >
              Supliers
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 h-auto flex flex-col gap-5">
        <h2 className="text-text-base font-semibold text-lg">Helpful Links</h2>
        <ul>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://support.spotify.com/us/"
            >
              Help
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://www.spotify.com/us/free/"
            >
              Free mobile app
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 h-auto flex flex-col gap-5">
        <h2 className="text-text-base font-semibold text-lg">Spotify plans</h2>
        <ul>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://www.spotify.com/us/premium/?ref=spotifycom_footer_premium_individual"
            >
              Single premium
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://www.spotify.com/us/duo/?ref=spotifycom_footer_premium_duo"
            >
              Premium duo
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://www.spotify.com/us/family/?ref=spotifycom_footer_premium_family"
            >
              Family premium
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://www.spotify.com/us/student/?ref=spotifycom_footer_premium_student"
            >
              Premium for students
            </a>
          </li>
          <li>
            <a
              className="text-text-sub font-semibold hover:text-text-base hover:underline"
              href="https://www.spotify.com/us/free/?ref=spotifycom_footer_free"
            >
              Free version
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 h-auto flex gap-5  justify-end  ">
        <a
          className="bg-background-highlight w-10 h-10 rounded-full flex items-center justify-center hover:bg-background-tinted-highlight"
          href="https://www.instagram.com/spotify"
        >
          <IcoInstagram className={"w-5 h-5 fill-text-sub"} />
        </a>
        <a
          className="bg-background-highlight w-10 h-10 rounded-full flex items-center justify-center hover:bg-background-tinted-highlight"
          href="https://x.com/spotify"
        >
          <IcoTwitter className={"w-5 h-5 fill-text-sub"} />
        </a>
        <a
          className="bg-background-highlight w-10 h-10 rounded-full flex items-center justify-center hover:bg-background-tinted-highlight"
          href="https://www.facebook.com/spotifyusa?locale=es_LA"
        >
          <IcoFacebook className={"w-5 h-5 fill-text-sub"} />
        </a>
      </div>
    </footer>
  );
}
