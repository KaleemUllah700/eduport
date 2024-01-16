const Logo = ({tagline=false})=>{
    return(
        <>
            <img src="/images/logo.svg" alt="logo" className="w-[120px]" />
            {
                tagline &&
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, maxime labore neque repellat et amet rem nemo architecto? Asperiores eos praesentium harum vitae quasi esse velit qui tempora maxime quibusdam.
                </p>
            }
        </>
    )
}

export default Logo