import Button from '../../shared/button'
const BecomeInstructor = ()=>{
    return (
        <div className="w-full md:h-[200px] bg-[#17a2b8] rounded-xl">
            <div className=" flex flex-col gap-2 p-8 text-[white]">
                <h1 className="text-3xl font-bold">Become an Instructor!</h1>
                <p className="text-md">Speedily say has suitable disposal add boy. On forth doubt miles of child.{<br />} Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>
                <Button color='info' variant='solid'>Start Teaching Today</Button>
            </div>
        </div>
    )
}

export default BecomeInstructor