const Analytics = ()=>{
const analytics = [
    {
        icon: 'fa fa-desktop',
        total: '10K',
        label: 'Online Courses',
        color: '#EEE0DC'
    },
    {
        icon: 'fa fa-user',
        total: '200+',
        label: 'Expert Tutors',
        color: '#E0F5A5'
    },
    {
        icon: 'fa fa-users',
        total: '60K+',
        label: 'Online Students',
        color: '#C2F5A5'
    },
    {
        icon: 'fa fa-check-circle',
        total: '6K+',
        label: 'Certified Courses',
        color: '#A5F5C1'
    }
]
    return (
        <div className="grid md:grid-cols-4 py-8 gap-4">
            {
                analytics.map((analytic, index)=>(
                    <div className="flex justify-center">
                        <div className="w-[280px] h-[130px] flex items-center justify-center rounded-xl" style={{background: analytic.color}} key={index}>
                            <div className="flex items-center gap-4">
                                <sapn className="text-[70px] text-[black]"><i className={analytic.icon}></i></sapn>
                                <div className="flex flex-col text-[20px]">
                                    <span className="font-bold">{analytic.total}</span>
                                    <span className="opacity-70 text-sm">{analytic.label}</span>
                                </div>   
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Analytics