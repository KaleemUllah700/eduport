import Layout from '../shared/layout'
const Login = ()=>{
    return (
        <Layout>
            <div className='w-full min-h-screen bg-[white] flex flex-col items-center justify-center'>
                <div className='w-[400px] h-[300px] bg-[#F1F1F1] rounded-lg'>
                    <h1 className='text-center text-xl font-semibold pt-2'>Login Now</h1>
                    <form className='flex flex-col gap-6'>
                        <div className='mx-2'>
                            <label className='text-md font-semibold'>Email</label><br />
                            <input type='email' placeholder='email' className='w-full p-3 rounded-lg focus:outline-0' />
                        </div>

                        <div className='mx-2'>
                            <label className='text-md font-semibold'>Password</label><br />
                            <input type='password' placeholder='password' className='w-full p-3 rounded-lg focus:outline-0' />
                        </div>

                        <div className='mx-2'>
                            <input type='submit' className='w-full p-3 rounded-lg bg-[#EE4BF1]' value="login" />
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Login