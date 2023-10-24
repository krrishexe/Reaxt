import { Container, Logo, LogoutBtn } from '../Index'
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'


function Header() {

  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },

  ]

  return (
    <header className='py-3 shadow bg-slate-700'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {
              navItems.map((navItem) => (
                navItem.active ? <li key={navItem.name}>
                  <button
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={()=>navigate(navItem.slug)}
                  >{navItem.name}</button>
                </li> : null)
            )}
            {authStatus && (<li>
              <LogoutBtn />
            </li>)}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header