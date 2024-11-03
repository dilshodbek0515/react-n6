import "./Loading.scss"

const Loading = ({ count = 3 }) => {
    return (
        <div className="flex flex-wrap justify-center gap-[30px]">
            {
                Array(count).fill("").map((_, inx) => (
                    <div key={inx} className="flex flex-col gap-5 w-[300px] h-[450px] rounded-2xl border border-slate-500 p-3" >
                        <div className="w-full h-48 bg-slate-300 rounded-lg"></div>
                        <div className="w-[90%] h-10 bg-slate-300 rounded-lg"></div>
                        <div className="w-full h-28 bg-slate-300 rounded-lg mt-6"></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Loading