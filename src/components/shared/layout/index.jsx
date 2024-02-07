import { Link } from "react-router-dom"
import Logo from '../logo'
const Layout = ({children})=>{

const menus = [
    {
        path: "/",
        label: "Home"
    },
    {
        path: "/faculty",
        label: "Faculty"
    },
    {
        path: "/products",
        label: "Products"
    },
    {
        path: "/contact-us",
        label: "Contact"
    },
    {
        path: "/login",
        label: "Login"
    }
]

const socials = [
    {
        icon: 'fa fa-facebook text-[blue]',
        link: 'https//:fb.com'
    },
    {
        icon: 'fa fa-instagram text-[#E1306C]',
        link: 'https//:instagram.com'
    },
    {
        icon: 'fa fa-twitter text-[blue]',
        link: 'https//:twitter.com'
    },
    {
        icon: 'fa fa-linkedin text-[darkblue]',
        link: 'https//:linkedin.com'
    }
]

const communities = [
    {
        path: '/documentation',
        label: 'Documentation'
    },
    {
        path: '/farq',
        label: 'Farq'
    },
    {
        path: '/forum',
        label: 'Forum'
    },
    {
        path: '/sitemap',
        label: 'Sitemap'
    }
]

const teachings = [
    {
        path: '/become-a-teacher',
        label: 'Become A Teacher'
    },
    {
        path: '/how-to-guid',
        label: 'How to Guid'
    },
    {
        path: '/term-coditions',
        label: 'Tearms & conditions'
    }
]
    return(
        <div>
            <nav className="bg-white flex justify-between mx-[30px] p-[10px] items-center shadow">
                <button>
                    <Logo />
                </button>
                <ul className="flex gap-8">
                    {
                        menus.map((menu, index)=>(
                            <li key={index}><Link to={menu.path}>{menu.label}</Link></li>
                        ))
                    }
                </ul>
                <button className="rounded-full">
                    <img src="/images/avatar.jpg" alt="avatar" className="w-[60px] rounded-full" />
                </button>
            </nav>
            <section className="px-8">
                {children}
            </section>
            <footer className="px-4">
                <div className="grid md:grid-cols-5 py-5">
                    <div className="bg-[white] p-[10%] flex flex-col justify-center items-center gap-4">
                        <Logo tagline className="py-[5%]" />
                        <div className="">
                            <ul>
                                {
                                    socials.map((social,index)=>(
                                        <button key={index} className="w-[50px] shadow p-2">
                                            <i className={social.icon}></i>
                                        </button>  
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[white] px-4">
                        <h1 className="text-lg font-bold py-4">Company</h1>
                        <div>
                            <ul>
                                {
                                    menus.map((menu, index)=>(
                                        <li key={index} className="py-1">
                                            <Link to={menu.path}>{menu.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[white] px-4">
                        <h1 className="text-lg font-bold py-4">Community</h1>
                        <div>
                            <ul>
                                {
                                    communities.map((community, index)=>(
                                        <li key={index} className="py-1">
                                            <Link to={community.path}>{community.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[white] px-4">
                        <h1 className="text-lg font-bold py-4">Teaching</h1>
                        <div>
                            <ul>
                                {
                                    teachings.map((teaching, index)=>(
                                        <li key={index} className="py-1">
                                            <Link to={teaching.path}>{teaching.label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="bg-[white] px-4">
                        <h1 className="text-lg font-bold py-4">Contact</h1>
                        <div>
                            <span>Toll free:</span><span>+123456789</span>
                        </div>
                            <span>(9:AM to 8:PM PKT)</span>
                        <div>
                            <span className="fon-semibold">Email: kaleem@gmail.com</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout