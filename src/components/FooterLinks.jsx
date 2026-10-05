import { NavLink } from "react-router-dom"

const FooterLinks = ({heading, links}) => {
  return (
    <div className="flex flex-col gap-5">
        <h2 className="text-anime-cyan text-xl font-semibold">{heading}</h2>
        {
            links.map(link => {
                return <NavLink to={link.url} className={`hover:translate-x-1 transition-all duration-300 ease-in-out hover:text-anime-cyan`}>{link.title}</NavLink>
            })
        }
    </div>
  )
}

export default FooterLinks