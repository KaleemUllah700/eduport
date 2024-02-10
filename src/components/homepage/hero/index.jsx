import Button from '../../shared/button'
const Hero = ()=>{

const facilities = [
    {
        icon: 'fa fa-check-circle',
        label: 'Learn with experts'
    },
    {
        icon: 'fa fa-check-circle',
        label: 'Get certificate'
    },
    {
        icon: 'fa fa-check-circle',
        label: 'Get membership'
    }
]
    return (
        <div className="grid md:grid-cols-2">
            <div className="p-16 w-[100%] h-[470px] bg-[white] flex flex-col gap-6">
                <h1 className="md:text-[48px] text-[30px] font-bold">Limitless learning at your fingertips</h1>
                <p className="text-sm opacity-70">Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.</p>
                <div className="bg-[white] md:flex gap-8">
                    {
                        facilities.map((facility, index)=>(
                            <div className="flex items-center gap-2 py-1 md:py-0" key={index}>
                                <i className={facility.icon}></i>
                                <span className="opacity-70 font-sans">{facility.label}</span>
                            </div>
                        ))
                    }
                </div>
                <div className='md:flex gap-4'>
                    <Button variant='light' color='danger'>Get Started</Button>
                    <Button variant='light' color='primary'>Watch video</Button>
                </div>
            </div>
            <div className="p-16 w-[100%] h-[470px] bg-[white] flex justify-center">
                <div className="w-[90%] md:h-[400px] h-[350px] bg-[blue] rounded-full px-8">
                    <img src="images/hero.png" alt="hero" className="w-[350px] md:h-[430px] h-[370px] -my-9" />
                </div>
            </div>
        </div>
    )
}

export default Hero