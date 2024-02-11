const TrendingCourse = ()=>{
const data = [
    {
        thumbnail: 'images/trendingcourse1.jpg',
        title: 'Time Management Mastery: Do More, Stress Less',
        duaration: '12h 45m',
        lecture: '21 lectures'
    },
    {
        thumbnail: 'images/trendingcourse2.jpg',
        title: 'The complete Digital Marketing Course',
        duaration: '20h 45m',
        lecture: '40 lectures'
    },
    {
        thumbnail: 'images/trendingcourse3.jpg',
        title: 'The complete Angular Course for Beginners',
        duaration: '10h 45m',
        lecture: '10 lectures'
    },
    {
        thumbnail: 'images/trendingcourse4.jpg',
        title: 'The complete Python Course for Beginners',
        duaration: '17h 45m',
        lecture: '24 lectures'
    }
]
    return (
        <div className="grid md:grid-cols-3 w-full min-h-[400px] bg-[white] flex md:gap-2 gap-8">
            {
                data.map((item, index)=>(
                        <div className="flex flex-col justify-center items-center rounded-lg shadow" key={index}>
                            <div className="w-[400px] h-[380px] bg-[white] flex flex-col gap-1 rounded-lg">
                                <img src={item.thumbnail} alt="trendingcourse1" className="h-[270px] w-full rounded-t-lg" />
                                <h1 className="text-2xl font-semibold px-2">{item.title}</h1>
                                <div className="flex justify-between px-4">
                                    <div className="flex items-center gap-2">
                                        <i className="fa fa-clock-o text-[orange]"></i>
                                        <span>{item.duaration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <i className="fa fa-clock-o text-[orange]"></i>
                                        <span>{item.lecture}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))
            }
        </div>
    )
}

export default TrendingCourse