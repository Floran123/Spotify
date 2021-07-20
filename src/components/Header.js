import { Link, useLocation } from "react-router-dom";

let Header = () => {
  const { pathname } = useLocation();
  console.log(pathname.includes('artist'));

  const links = [
    {name: 'Home', href: '/home'},
    {name: 'Albums', href: '/albums'},
    {name: 'Artists', href: '/artists'},
    {name: 'Genres', href: '/genres'},
    {name: 'Search', href: '/search'}
  ]

  return (
    <div>
      <h1>rush_spotify</h1>
      <nav>
        <ul>
          {links.map((link, i) => {
            if(!pathname.includes(link.href))
            return (
              <li key={i}>
                <Link to={link.href}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>      
    </div>
  )
}

export default Header;