import { FaGithub, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import FooterLinks from "../components/FooterLinks";

const QUICK_LINKS = [
  { title: "Index", url: "/index" },
  { title: "Home", url: "/home" },
  { title: "Airing", url: "/airing" },
  { title: "Recent", url: "/recent" },
  { title: "API", url: "https://api.anipub.xyz/?ref=freepublicapis.com#" },
  { title: "Sitemaps", url: "/sitemaps" },
];
const COMMUNITY = [
  { title: "Chat Room", url: "#" },
  { title: "Contribute", url: "#" },
  { title: "AI", url: "#" },
  { title: "Commex", url: "#" },
  { title: "AniBlocker (Our Own Ad Blocker)", url: "#" },
  { title: "Premium", url: "#" },
];
const LEGAL = [
  { title: "About Us", url: "#" },
  { title: "Privacy Policy", url: "#" },
  { title: "Terms of Service", url: "#" },
  { title: "Contact", url: "#" },
];

const Footer = () => {
  return (
    <footer className="divide-y-1 divide-anime-cyan bg-anime-bg text-white p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10">
        <div className="flex flex-col gap-5 sm:col-span-2 md:col-span-1">
          <NavLink to={"/"}>
            <img
              src="bg-remove.png"
              alt=""
              className="w-12 sm:w-20 md:w-22 lg:w-25"
            />
          </NavLink>
          <p className="text-xs md:text-base">
            The revolutionary anime streaming platform built by fans, for fans.
            Ad-free, open-source, and community-driven.
          </p>
          <div className="flex gap-5">
            <NavLink
              className={`border-anime-cyan border rounded-full bg-anime-cyan group hover:bg-anime-text transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1`}
            >
              <FaGithub
                className={`text-anime-bg group-hover:text-anime-cyan text-lg md:text-2xl lg:text-4xl`}
              />
            </NavLink>
            <NavLink
              className={`border-anime-cyan border rounded-full bg-anime-cyan group hover:bg-anime-text transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1`}
            >
              <FaFacebook
                className={`text-anime-bg group-hover:text-anime-cyan text-lg md:text-2xl lg:text-4xl`}
              />
            </NavLink>
          </div>
        </div>
        <FooterLinks heading={`Quick Links`} links={QUICK_LINKS} />
        <FooterLinks heading={`Community`} links={COMMUNITY} />
        <FooterLinks heading={`Legal`} links={LEGAL} />
      </div>
      <p className="text-center text-slate-300 pt-6 text-xs md:text-base">
        © 2025 AniDay. Built with ❤️ by anime fans worldwide. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
