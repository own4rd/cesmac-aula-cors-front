function Navbar() {
    const itemsMenu = [
        {
            title: "Home", path: "home"
        },
        {
            title: "Sobre", path: "about"
        }
    ]
  return (
    <nav className='bg-indigo-200'>
        <div className='flex items-center p-4 flex-wrap justify-between'>
            <a href="/" className='font-semibold items-center space-x-3 text-primary'>
                Blog
            </a>
            <ul className='flex font-medium'>
                {itemsMenu.map((itemMenu) => <li key={itemMenu.title} className='pl-3 pr-4'>
                    <a href={itemMenu.path} >{itemMenu.title}</a>
                </li>)}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
