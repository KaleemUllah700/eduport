import Layout from '../shared/layout'
import Analytics from './analytics'
import Courses from './courses'
import Hero from './hero'
const Homepage = ()=>{
    return (
        <Layout>
            <div>
                <Hero />
                <Analytics />
                <Courses />
            </div>
        </Layout>
    )
}

export default Homepage