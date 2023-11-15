import logo from '../assets/tttlogo1.png'
function Navbar() {
    return (
        <div>
            <div className='h-1' style={{backgroundColor:'#38302e'}}></div>
            <div className="flex flex-wrap">
                {/* <section className="relative mx-auto"> */}
                    {/* <!-- navbar --> */}
                    <nav className=" bg-black text-white w-screen">
                        <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
                            <div>
                                <a className="text-3xl font-bold font-heading flex" href="#">
                                    <img className="h-12" src={logo} alt="logo" />
                                    <span className='text-white text-lg pr-2 flex items-center leading-10' style={{fontFamily: 'Josefin Sans'}}>|</span>
                                    <p className='uppercase text-white text-lg flex items-center tracking-widest' style={{fontFamily: 'Josefin Sans'}}>Stories</p>
                                </a>

                            </div>
                            {/* <!-- Nav Links --> */}

                            {/* <!-- Header Icons --> */}
                            <div className="xl:flex items-center space-x-5 items-center">
                                <button className='text-black bg-yellow-400'>Courses</button>

                            </div>
                        </div>
                        {/* <!-- Responsive navbar --> */}
                        {/* <a className="xl:hidden flex mr-6 items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="flex absolute -mt-5 ml-4">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a> */}
                    </nav>

                {/* </section> */}
            </div>

        </div>
    )
}

export default Navbar
