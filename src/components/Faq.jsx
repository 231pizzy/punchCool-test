import { useState } from "react";
import { faqData } from "./constant/data"
import yellowLogo from '/yellowLogo.svg'


export default function Faq() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden', backgroundColor: 'rgba(243, 243, 243, 1)', transform: 'skewY(-1deg)', transformOrigin: 'top left', }} className='h-full lg:h-[100%]'>

            <div style={{ transform: 'skewY(1deg)', transformOrigin: 'top left', height: '100%', overflow: 'hidden', }} className=' h-[100%] lg:pt-20 md:pt-14 pt-10'>
                <div className="flex justify-center items-center lg:text-[54px] md:text-[34px] leading-[54px] font-switzer" style={{ fontWeight: "700", color: "rgba(32, 34, 41, 1)" }}>
                    <h1>Frequently asked questions</h1>
                </div>

                <div className="lg:mt-10 md:mt-10 mt-4 pb-[90px]">
                    {faqData.map((faq) => (
                        <div key={faq.id} className="faq-card  lg:h-[90px] md:h-[70px] h-[60px] w-full flex items-center justify-between lg:text-[22px] md:text-[18px] text-[12px] leading-[24px] font-switzer cursor-pointer" style={{ border: "1px solid #C0C0C0", }}
                            onMouseEnter={() => setHoveredId(faq.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="flex text-left" style={{ fontWeight: "600", color: "rgba(32, 34, 41, 1)" }}>
                                {/* general */}
                                {faq.general && (
                                    <div className="lg:h-[90px] md:h-[70px] h-[60px] md:w-[120px] w-[70px] pr-4 lg:w-[230px] items-center justify-center flex border-r border-gray-300" style={{ backgroundColor: faq.general && faq.joiningProcess ? "rgba(232, 232, 232, 1)" : "transparent" }}>
                                        <p>{faq.general}</p>
                                    </div>
                                )}
                                {!faq.general && (
                                    <div className="lg:h-[90px] md:h-[70px] h-[60px] md:w-[120px] w-[70px] lg:w-[230px]" />
                                )}

                                {/* joining process */}
                                {faq.joiningProcess && (
                                    <div className="lg:w-[299px] md:w-[180px] w-[100px] items-center justify-center flex" style={{ borderRight: "1px solid #C0C0C0" }}>
                                        <p>{faq.joiningProcess}</p>
                                    </div>
                                )}
                                {!faq.joiningProcess && (
                                    <div className="lg:w-[299px] md:w-[180px] w-[100px] items-center justify-center flex" />
                                )}
                            </div>

                            {/* question */}
                            <div className="flex-1 text-left ml-2 md:ml-12">
                                <p>{faq.question}</p>
                            </div>

                            {/* icon */}
                            {hoveredId === faq.id && (
                                <div className="mr-4">
                                    <img src={yellowLogo} alt="yellowLogo"/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
