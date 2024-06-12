import { useState } from 'react';
import heroIcon from '/hero.png';
import buttonLogo from '/vectorBlack.png';
import union from '/Union2.png';
import { useSelector } from 'react-redux';




function Hero() {
    const [activeCategory, setActiveCategory] = useState('IT & Development');
    const itData = useSelector(state => state.itData);
    const designData = useSelector(state => state.designData);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="relative w-[100%] h-[100%] flex flex-col items-center">
            <div className="flex flex-col items-center mx-4 md:mx-0 lg:mt-[100px] md:mt-[100px] mt-[50px] flex-grow">
                {/* Content of the Hero Section */}
                <div className="flex justify-center w-screen lg:w-[671px] md:h-[128px] h-[100px]" style={{ color: "rgba(32, 34, 41, 1)" }}>
                    <h1 className="text-4xl md:text-6xl lg:text-[54px] text-center lg:leading-[58px] leading-[34px]" style={{ font: "Switzer", fontWeight: "700" }}>
                        Finding the right fit
                        <span style={{ display: "inline-block", verticalAlign: "middle" }}>
                            <div className="relative inline-block">
                                <div className="image-stack">
                                    <img src={heroIcon} className="image" alt="Hero Icon 1" />
                                    <img src={heroIcon} className="image" alt="Hero Icon 2" />
                                    <img src={heroIcon} className="image" alt="Hero Icon 3" />
                                </div>
                            </div>
                        </span>
                        has never been easier.
                    </h1>
                </div>

                <div className="w-full md:w-[582px] flex justify-center mt-6" style={{ fontWeight: "400", font: "Switzer", fontSize: "22px", lineHeight: "32px", textAlign: "center", color: "rgba(32, 34, 41, 1)" }}>
                    <p className="px-4 md:px-0">With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.</p>
                </div>

                {/* search */}
                <div className="w-full px-4 sm:px-6 lg:flex lg:justify-center justify-center flex" style={{ marginBottom: "20px", marginTop: "20px" }}>
                    <div style={{ borderRadius: "15px", border: "1.5px solid rgba(240, 240, 240, 1)" }} className='w-[300px] lg:w-[570px] md:w-[420px] lg:h-[74px] h-[54px] flex items-center'>
                        <input
                            type="text"
                            className="flex-grow h-full px-4 py-2 border-none outline-none"
                            placeholder="Looking for design |"
                        />
                        <button
                            className="h-full px-6  rounded-md lg:h-[74px] lg:w-[74px] w-[64px]" style={{ backgroundColor: "rgba(255, 190, 46, 1)" }}
                        >
                            <img src={buttonLogo} />
                        </button>
                    </div>
                </div>

                {/* skills */}
                <div className='w-[380px] md:w-[700px] lg:w-[920px] lg:h-[260px] h-[300px] md:h-[260px] mb:h-[140px] mb-6' style={{ borderRadius: "15px", backgroundColor: "rgba(248, 248, 248, 1)" }}>
                    <div className='flex justify-center items-center gap-6 mt-4 md:mt-8 font-switzer md:text-[16px] text-[14px]'>
                        <button
                            className={`lg:w-[192px] w-[152px] h-[44px] rounded-lg ${activeCategory === 'IT & Development' ? 'bg-green-300' : 'bg-gray-300'}`}
                            onClick={() => handleCategoryChange('IT & Development')}
                        >
                            IT & Development
                        </button>
                        <button
                            className={`w-[152px] h-[44px] lg:w-[192px] rounded-lg ${activeCategory === 'Design and Creative' ? 'bg-green-300' : 'bg-gray-300'}`}
                            onClick={() => handleCategoryChange('Design and Creative')}
                        >
                            Design and Creative
                        </button>
                    </div>

                    <div className="mt-4 flex justify-center items-center text-[14px] md:text-[16px]">
                        {activeCategory === 'IT & Development' && (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 cursor-pointer w-full px-4" style={{ color: "rgba(210, 210, 210, 1)", justifyItems: "center" }}>
                                {itData.map(skill => (
                                    <div key={skill.id} className={`hover:text-[#202229] ${[12].includes(skill.id) ? 'text-[#202229] font-bold' : ''}`}>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeCategory === 'Design and Creative' && (
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 cursor-pointer w-full px-4" style={{ color: "rgba(210, 210, 210, 1)", justifyItems: "center" }}>
                                {designData.map(skill => (
                                    <div key={skill.id} className={`hover:text-[#202229] ${[12].includes(skill.id) ? 'text-[#202229] font-bold' : ''}`}>
                                    {skill.name}
                                </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Union Image */}
            <img src={union} className="w-full h-[52px]" style={{ zIndex: -1 }} />
        </div>
    );
}

export default Hero;
