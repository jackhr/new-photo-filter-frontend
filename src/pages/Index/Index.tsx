export default function Index() {
    const className = "bg-blue-500 w-52 h-52 rounded-md relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out text-white font-bold flex justify-center items-center text-2xl";

    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 gap-8">
                <div className={className}>Upload</div>
                <div className={className}>Experiment</div>
                <div className={className}>My Images</div>
                <div className={className}>My Templates</div>
            </div>
        </>
    )
}