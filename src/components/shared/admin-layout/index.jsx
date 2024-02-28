import {useState} from "react"

const AdminLayout = ()=>{
const [width,setWidth] = useState(280)
const menus = [
    {
        label: 'Dashboard',
        icon: 'fa fa-dashboard'
    },
    {
        label: 'Setting',
        icon: 'fa fa-gear'
    },
    {
        label: 'Customers',
        icon: 'fa fa-user'
    }
]
    return (
            <div>
                <aside className="fixed top-0 left-0 bg-zinc-800 min-h-screen z-10"
                style={{
                    width: width,
                    transition: '0.3s',
                    overflowX: 'hidden'
                }}
                >
                    <div className="flex flex-col justify-center gap-4">
                        {
                            menus.map((menu, index)=>(
                                <button key={index} className="text-white opacity-60 flex items-center gap-2 p-3 hover:bg-zinc-900">
                                    <i className={menu.icon}></i>
                                    {menu.label}
                                </button>
                            ))
                        }
                    </div>
                </aside>
                <header className="fixed top-0 left-0 bg-rose-500 w-full h-[60px] p-2"
                    style={{
                        left: width,
                        width: `calc(100% - ${width}px)`,
                        transition: '0.3s'
                    }}
                >
                    <button className="w-[40px] h-[40px] bg-[white] rounded-full bg-opacity-30 hover:bg-opacity-100 text-zinc" onClick={()=>{setWidth(width === 280 ? 0 : 280)}}>
                        <i className="fa fa-bars"></i>
                    </button>
                </header>
                <section className="flex flex-col gap-16"
                    style={{
                        marginTop: 60,
                        marginLeft: width,
                        width: `calc(100% - ${width}px)`,
                        transition: '0.3s'
                    }}
                >
                    <div className="p-4">
                        <h1>dfdfds</h1>
                    </div>

                    <footer className="bg-[lightgrey] py-2">
                        <p className="text-sm opacity-70 text-center">
                          <i className="fa fa-copyright"></i>
                          Lakki Institute | All Right Reserved  
                        </p>
                    </footer>
                </section>
            </div>
    )
}

export default AdminLayout