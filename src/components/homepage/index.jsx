import Layout from '../shared/layout'
import Analytics from './analytics'
import BecomeInstructor from './become-instructor'
import Courses from './courses'
import Hero from './hero'
import TrendingCourse from './trending-course'
const Homepage = ()=>{
    return (
        <Layout>
            <div className='flex flex-col gap-16'>
                <Hero />
                <Analytics />
                <Courses />
                <BecomeInstructor />
                <TrendingCourse />
            </div>
        </Layout>
    )
}

export default Homepage