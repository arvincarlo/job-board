import { useJobs } from "../_context/JobsContext"

interface FilterProps {
    filters: string[];
}

export default function Filter({filters}: FilterProps) {
    const { dispatch } = useJobs();
    return (
        <div className="flex bg-white shadow-lg p-5 rounded items-center justify-between">
            <div className="flex flex-wrap gap-4">
                {/* Filter Tabs */}
                {filters.map((item:string) => (
                    <div key={item}>
                        <span className="inline-block bg-light-grayish-cyan-tablets rounded-tl-md rounded-bl-md px-2 py-1 text-base font-semibold text-primary focus:bg-primary focus:text-white">{item}</span>
                        <button onClick={() => dispatch({type:"filters/unset", payload: item})} className="text-white bg-primary px-[10px] py-1 rounded-tr-md rounded-br-md font-semibold hover:bg-darkgray focus:bg-darkgray">x</button>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={() => dispatch({type:"filters/clear"})} className="text-custom-grayish-cyan focus:underline hover:underline">Clear</button>
            </div>
        </div>
    )
}
