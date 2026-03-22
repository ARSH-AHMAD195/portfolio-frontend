"use client";

import CountUp from "react-countup";

const stats = [
    {
        num:4,
        text:"Production-Ready Apps",
        extra:""
    },
    {
        num:108,
        text:"DSA Problems Solved",
        extra:"+"
    },
    {
        num:500,
        text:"Commits Across Projects",
        extra:"+"
    }
]

function Stats() {
  return (
    <section>
        <div className="mt-20 container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto lg:max-w-none">
                {stats.map((item,index) => {
                    return <div className="flex-1 flex gap-4 items-center justify-center lg:justify-start text-sm lg:text-lg font-bold" key={index}>
                        <div className="flex items-center text-4xl lg:text-6xl font-extrabold text-[#dcfd00]">
                            <CountUp end={item.num} duration={4} delay={0.5} className="text-4xl lg:text-6xl font-extrabold" />
                            <h1>{item.extra}</h1>
                        </div>
                        <p className={`${item.text.length < 10 ? "max-w-25" : "max-w-50"}`}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats