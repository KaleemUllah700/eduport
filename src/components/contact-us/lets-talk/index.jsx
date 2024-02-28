import Button from '../../shared/button'
const LetsTalk = ()=>{
    return (
        <div className="grid md:grid-cols-2 w-full bg-[white] p-8">
                <div className="flex flex-col items-center">
                    <img src="images/contact.svg" alt="contact" />
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">Let's talk</h1>
                    <p className="text-md">
                    To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly
                    </p> 
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label>Fullname*</label>
                            <input type="text" name="fullname" className="bg-slate-200 p-4 rounded focus:outline-0" required />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Email*</label>
                            <input type="email" name="email" className="bg-slate-200 p-4 rounded focus:outline-0" required />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Message*</label>
                            <textarea name="message" className="bg-slate-200 p-4 rounded focus:outline-0" rows={4} required />
                        </div>
                        <span className='text-end font-bold'><Button>Sent Message</Button></span>
                    </form>
                </div>
           </div>
    )
}

export default LetsTalk;