import { useState } from "react"
import Button from "../../shared/button"
const Courses = ()=>{

const modal = [
    {
        thumbnail: 'images/thumbnail1.jpg',
        title: 'Sketch from A to Z: for app designer',
        description: 'Proposal indulged no do sociable he throwing settling.',
        rating: 4,
        time: '12h 56m',
        lecture: '15 lectures',
        catagory: 'Web Design'
    },
    {
        thumbnail: 'images/thumbnail2.jpg',
        title: 'Graphic Design Masterclass',
        description: 'Rooms oh fully taken by worse do Points afraid but may end.',
        rating: 4.5,
        time: '9h 56m',
        lecture: '65 lectures',
        catagory: 'Web Design'
    },
    {
        thumbnail: 'images/thumbnail3.jpg',
        title: 'Create a Design System in Figma',
        description: 'Rooms oh fully taken by worse do. Points afraid but may end',
        rating: 4.5,
        time: '5h 56m',
        lecture: '32 lectures',
        catagory: 'Web Design'
    },
    {
        thumbnail: 'images/thumbnail4.jpg',
        title: 'Deep Learning with React-Native',
        description: 'Far advanced settling say finished raillery. Offered chiefly',
        rating: 4,
        time: '18h 56m',
        lecture: '99 lectures',
        catagory: 'Web Design'
    },
    {
        thumbnail: 'images/thumbnail5.jpg',
        title: 'Build Responsive Websites with HTML',
        description: 'Far advanced settling say finished raillery. Offered chiefly',
        rating: 4,
        time: '15h 30m',
        lecture: '68 lectures',
        catagory: 'Web Design'
    },
    {
        thumbnail: 'images/thumbnail6.jpg',
        title: 'Build Websites with CSS',
        description: 'Far advanced settling say finished raillery. Offered chiefly',
        rating: 4.5,
        time: '36h 30m',
        lecture: '72 lectures',
        catagory: 'Web Design'
    },
    {
        thumbnail: 'images/thumbnail7.jpg',
        title: 'Learn Invision',
        description: 'Arrived off she elderly beloved him Course regard to up he hardly.',
        rating: 3.5,
        time: '6h 56m',
        lecture: '82 lectures',
        catagory: 'Web Design'
    },
    {
        thumbnail: 'images/thumbnail8.jpg',
        title: 'JavaScript: Full Understanding',
        description: 'Arrived off she elderly beloved him Course regard to up he hardly.',
        rating: 5,
        time: '35h 20m',
        lecture: '89 lectures',
        catagory: 'Web Design'
    },
    {
        thumbnail: 'images/thumbnail9.jpg',
        title: 'The Complete Web Development in python',
        description: 'Mention Mr manners opinion if garrets enabled.',
        rating: 4.5,
        time: '10h 00m',
        lecture: '26 lectures',
        catagory: 'development'
    },
    {
        thumbnail: 'images/thumbnail10.jpg',
        title: 'Angular – The Complete Guider',
        description: 'Rooms oh fully taken by worse do. Points afraid but may end..',
        rating: 4.5,
        time: '9h 32m',
        lecture: '42 lectures',
        catagory: 'development'
    },
    {
        thumbnail: 'images/thumbnail11.jpg',
        title: 'Deep Learning with React-Native',
        description: 'Far advanced settling say finished raillery. Offered chiefly',
        rating: 4,
        time: '18h 56m',
        lecture: '99 lectures',
        catagory: 'development'
    },
    {
        thumbnail: 'images/thumbnail12.jpg',
        title: 'JavaScript: Full Understanding',
        description: 'Far advanced settling say finished raillery. Offered chiefly',
        rating: 5,
        time: '35h 20m',
        lecture: '89 lectures',
        catagory: 'development'
    },
    {
        thumbnail: 'images/thumbnail13.jpg',
        title: 'Bootstrap 5 From Scratch',
        description: 'Far advanced settling say finished raillery. Offered chiefly',
        rating: 4.5,
        time: '25h 56m',
        lecture: '38 lectures',
        catagory: 'development'
    },
    {
        thumbnail: 'images/thumbnail14.jpg',
        title: 'PHP with - CMS Project',
        description: 'Far advanced settling say finished raillery. Offered chiefly',
        rating: 4,
        time: '21h 22m',
        lecture: '30 lectures',
        catagory: 'development'
    },
    {
        thumbnail: 'images/thumbnail15.jpg',
        title: 'Sketch from A to Z: for app designer',
        description: 'Proposal indulged no do sociable he throwing settling',
        rating: 4,
        time: '12h 56m',
        lecture: '15 lectures',
        catagory: 'graphic design'
    },
    {
        thumbnail: 'images/thumbnail16.jpg',
        title: 'Learn Invision',
        description: 'Arrived off she elderly beloved him Course regard to up he hardly.',
        rating: 3.5,
        time: '6h 56m',
        lecture: '82 lectures',
        catagory: 'graphic design'
    },
    {
        thumbnail: 'images/thumbnail17.jpg',
        title: 'Graphic Design Masterclass',
        description: 'Rooms oh fully taken by worse do. Points afraid but may end..',
        rating: 4.5,
        time: '9h 56m',
        lecture: '65 lectures',
        catagory: 'graphic design'
    },
    {
        thumbnail: 'images/thumbnail18.jpg',
        title: 'Create a Design System in Figma',
        description: 'Rooms oh fully taken by worse do. Points afraid but may end..',
        rating: 4.5,
        time: '5h 56m',
        lecture: '32 lectures',
        catagory: 'graphic design'
    },
    {
        thumbnail: 'images/thumbnail19.jpg',
        title: 'Digital Marketing Masterclass',
        description: 'Delivered dejection necessary objection do Mr prevailed..',
        rating: 4.5,
        time: '6h 56m',
        lecture: '82 lectures',
        catagory: 'marketing'
    },
    {
        thumbnail: 'images/thumbnail20.jpg',
        title: 'Sketch from A to Z: for app designer',
        description: 'Proposal indulged no do sociable he throwing settling..',
        rating: 4,
        time: '12h 56m',
        lecture: '15 lectures',
        catagory: 'marketing'
    }
]
const [data, setData] = useState(modal)

const menus = new Set(modal.map((item, index)=>item.catagory))

const onTab = (catagory)=>{
    const filtered= modal.filter((item, index)=>item.catagory === catagory)
    setData(filtered)
}

    return (
        <div className="flex flex-col gap-4">
            <h1 className="md:text-[40px] text-[30px] font-semibold text-center">Most Popular Courses</h1>
            <p className="md:text-lg text-sm text-center">Choose from hundreds of courses from specialist organizations</p>
            <div className="w-[100%] min-h-[70px] bg-[#CEF9DD] rounded-lg flex md:flex-row flex-col items-center justify-center md:gap-12 gap-4">
                {
                    [...menus].map((menu, index)=>(
                        <Button key={index} variant="solid" size="small" onClick={()=>onTab(menu)}>
                            <span className="capitalize">{menu}</span>
                        </Button>
                    ))
                }
            </div>
            <div className="grid md:grid-cols-4">
                {
                    data.map((item, index)=>(
                        <div key={index} className="flex flex-col p-4 rounded-lg md:min-h-[420px] shadow">
                            <img src={item.thumbnail} alt="thumbnail1" className="rounded-lg" />
                            <div className="flex flex-col gap-2 p-2">
                                <h1 className="text-xl font-semibold">{item.title}</h1>
                                <p className="text-md opacity-70">{item.description}</p>
                                <div className="flex gap-2">
                                   <div className="flex items-center justify-center gap-1">
                                        <i className="fa fa-star text-[yellow]"></i>
                                        <i className="fa fa-star text-[yellow]"></i>
                                        <i className="fa fa-star text-[yellow]"></i>
                                        <i className="fa fa-star text-[yellow]"></i>
                                        <i className="fa fa-star text-[yellow]"></i>
                                        <span>{item.rating}</span>
                                   </div>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <i className="fa fa-clock-o text-[red]"></i>
                                        <span>{item.time}</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <i className="fa fa-clock-o text-[orange]"></i>
                                        <span>{item.lecture}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Courses