import { NavLink } from "react-router-dom"

const FooterLinks = ({heading, links}) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-5">
        <h2 className="text-anime-cyan sm:text-sm md:text-lg lg:text-xl font-semibold">{heading}</h2>
        {
            links.map((link, index) => {
                return <NavLink key={index} to={link.url} className={`hover:translate-x-1 transition-all duration-300 text-[10px] sm:text-xs md:text-sm ease-in-out hover:text-anime-cyan`}>{link.title}</NavLink>
            })
        }
    </div>
  )
}

export default FooterLinks