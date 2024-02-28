const Hero = ()=>{
    const data = [
        {
            title: 'Customer Support',
            address: 'Chicago HQ Estica Cop. Macomb, MI 48042',
            mobile: '(423) 733-8222',
            email: 'example@email.com',
            active: true
        },
        {
            title: 'Contact Address',
            address: '2492 Centennial NW, Acworth, GA, 30102',
            mobile: '+896-789-546',
            email: 'example@email.com',
            active: false
        },
        {
            title: 'Main Office Address',
            address: '2002 Horton Ford Rd, Eidson, TN, 37731',
            mobile: '(678) 324-1251',
            email: 'example@email.com',
            active: false
        },
    ]
    return (
        <div>
            <h1 className="text-5xl font-bold text-center py-8">We're here to help!</h1>
            <div className="grid md:grid-cols-3 w-full h-[300px] p-4 flex gap-4">
               {
                data.map((item, index)=>(
                    <div className={`w-full h-[270px] bg-[white] p-8 rounded-lg flex flex-col items-center justify-center gap-6 shadow-lg ${item.active ? 'bg-[blue] text-white' : 'bg-[white]' }`} key={index}>
                        <h1 className="text-xl font-bold">{item.title}</h1>
                        <div className="flex items-center gap-2">
                            <i className="fa fa-home"></i>
                            <address>{item.address}</address>
                        </div>
    
                        <div className="flex items-center gap-2">
                            <i className="fa fa-home"></i>
                            <p>{item.mobile}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <i className="fa fa-home"></i>
                            <p>{item.email}</p>
                        </div>

                </div>
                ))
               }
            </div>
        </div>
    )
}

export default Hero;