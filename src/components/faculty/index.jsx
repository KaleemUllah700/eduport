import Layout from '../shared/layout'
const Faculty = ()=>{

    const faculties = [
        {
            img: 'images/kaleem.jpg',
            name: 'KALEEM ULLAH',
            role: 'MERN Developer',
            about: 'My name is KALEEM ULLAH belong to KP. I have graduted from IUB Bahawalpur Panjab.'
        },
        {
            img: 'images/kaleem.jpg',
            name: 'IMRAN KHAN',
            role: 'Network Engineer',
            about: 'My name is IMRAN KHAN belong to KP. I have graduted from IUB Bahawalpur Panjab.'
        },
        {
            img: 'images/kaleem.jpg',
            name: 'IRFAN ULLAH',
            role: 'Data Scientist',
            about: 'My name is IRFAN ULLAH belong to KP. I have graduted from IUB Bahawalpur Panjab.'
        }
    ]

    return (
        <Layout>
            <div>
                <div className='grid md:grid-cols-3 '>
                    {
                        faculties.map((faculty, facultyIndex)=>(
                            <div key={facultyIndex} className='bg-[#F1F1F1] flex flex-col items-center justify-center gap-3 w-full h-[250px] p-4'>
                                <img src={faculty.img} alt="kaleem" className='w-[60px] h-[60px] rounded-full' />
                                <h1 className='text-2xl font-semibold '>{faculty.name}</h1>
                                <h4 className='text-md'>{faculty.role}</h4>
                                <p className='text-sm'>{faculty.about}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Faculty