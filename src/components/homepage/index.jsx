import Layout from '../shared/layout'
import Analytics from './analytics'
import Hero from './hero'
const Homepage = ()=>{
    return (
        <Layout>
            <div>
                <Hero />
                <Analytics />
            </div>
        </Layout>
    )
}

export default Homepage