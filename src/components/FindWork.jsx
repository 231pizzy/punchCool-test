import bg from '/2ndBg.png';
import skillIcon from '/skillsicon.png';
import categoryIcon from '/categoriesIcon.png';
import profleIcon from '/profileicon.png';
import { useSelector } from 'react-redux';

import blkfwd from '/blkfwd.png'
import blkbck from '/blkbck.svg'
import Button from './common/Button';


function FindWork() {
    const itDevData = useSelector(state => state.itDevDataCard);
    const designData = useSelector(state => state.designDataCard);

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', transform: 'skewY(1deg)', transformOrigin: 'top left' }} >
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', position: 'absolute', top: 0, eft: 0, zIndex: -1 }}></div>

            <div style={{ transform: 'skewY(-1deg)', transformOrigin: 'top left', padding: '70px' }}>
                <div className="flex flex-col items-center mx-4 md:mx-0 lg:pt-[90px] md:pt-[100px] pt-[60px]">
                    <div className="flex justify-center w-screen lg:w-[977px] lg:h-[128px] h-[70px]" style={{ color: "rgba(32, 34, 41, 1)" }}>
                        <h1 className="text-[26px] md:text-[44px] lg:text-[54px] text-center md:leading-[58px] leading-[40px] font-switzer" style={{ fontWeight: "700", }}>
                            Your one-stop marketplace for finding the talent your business needs.
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full justify-between lg:pt-[80px] md:pt-[100px] pt-[70px] items-center">
                    {/* IT development */}
                    <div className='w-full lg:w-[380px]'>
                        <div className='h-68px' style={{ fontWeight: "500", fontSize: "24px", lineHeight: "34px", font: "Switzer Variable" }}>
                            <h2 className='text-center lg:text-left'>Find Dev and IT professionals to scale your business.</h2>
                        </div>

                        <div className='flex flex-wrap mt-5 justify-between'>
                            <div className='flex items-center justify-center w-[103px] h-[32px] gap-2'>
                                <img src={skillIcon} style={{ width: "16px", height: "21px" }} />
                                <p style={{ fontWeight: "400", fontSize: "16px", lineHeight: "32px", color: "rgba(32, 34, 41, 0.8)" }}>989 Skills</p>
                            </div>

                            <div className='flex items-center justify-center w-[164px] h-[32px] gap-2 lg:ml-[72px]'>
                                <img src={categoryIcon} style={{ width: "16px", height: "21px" }} />
                                <p style={{ fontWeight: "400", fontSize: "16px", lineHeight: "32px", color: "rgba(32, 34, 41, 0.8)" }}>45 Sub-Categories</p>
                            </div>

                            <div className='flex items-center justify-start w-[164px] h-[32px] gap-2 mt-2 ml-1'>
                                <img src={profleIcon} style={{ width: "16px", height: "21px" }} />
                                <p style={{ fontWeight: "400", fontSize: "16px", lineHeight: "32px", color: "rgba(32, 34, 41, 0.8)" }}>1011 Profiles</p>
                            </div>
                        </div>

                    </div>

                    {/* second div */}
                    <div className='w-[380px] md:w-full lg:w-[730px] md:h-[224px] h-[170px] mt-5 lg:mt-0 p-2 md:p-4' style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "7px" }}>
                        <h2 className='font-switzer md:text-[16px] text-[14px] ml-2 mt-2'>IT & Development </h2>
                        <div className='flex lg:gap-6 gap-3 pt-4'>
                            {itDevData.map(item => (
                                <div key={item.id}>
                                    <div className='md:h-[96px] md:w-[96px] h-[50px] w-[50px] flex items-center justify-center' style={{ borderRadius: "74px", backgroundColor: "rgba(246, 246, 246, 1)" }}>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className='lg:w-[85px] h-[36px] w-[35px] md:w-[50px] ml-2 md:ml-6 lg:ml-2 mt-2 text-center lg:text-[14px] md:text-[13px] text-[9px]'>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            ))}



                            <div className='md:h-[96px] md:w-[96px]  h-[50px] w-[50px] flex items-center justify-center' style={{ borderRadius: "30px", backgroundColor: "rgba(246, 246, 246, 1)" }}>
                                <img src={blkfwd} alt='icon' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* design developer*/}
                <div className="flex flex-col lg:flex-row w-full justify-between lg:pt-[40px] md:pt-[40px] pt-[40px] items-center">
                    {/* first div */}
                    <div className='w-full lg:w-[380px]'>
                        <div className='h-68px' style={{ fontWeight: "500", fontSize: "24px", lineHeight: "34px", font: "Switzer Variable" }}>
                            <h2 className='text-center lg:text-left'>Find Dev and IT professionals to scale your business.</h2>
                        </div>

                        <div className='flex flex-wrap mt-5 justify-between'>
                            <div className='flex items-center justify-center w-[103px] h-[32px] gap-2'>
                                <img src={skillIcon} style={{ width: "16px", height: "21px" }} />
                                <p style={{ fontWeight: "400", fontSize: "16px", lineHeight: "32px", color: "rgba(32, 34, 41, 0.8)" }}>989 Skills</p>
                            </div>

                            <div className='flex items-center justify-center w-[164px] h-[32px] gap-2 lg:ml-[72px]'>
                                <img src={categoryIcon} style={{ width: "16px", height: "21px" }} />
                                <p style={{ fontWeight: "400", fontSize: "16px", lineHeight: "32px", color: "rgba(32, 34, 41, 0.8)" }}>45 Sub-Categories</p>
                            </div>

                            <div className='flex items-center justify-start w-[164px] h-[32px] gap-2 mt-2 ml-1'>
                                <img src={profleIcon} style={{ width: "16px", height: "21px" }} />
                                <p style={{ fontWeight: "400", fontSize: "16px", lineHeight: "32px", color: "rgba(32, 34, 41, 0.8)" }}>1011 Profiles</p>
                            </div>
                        </div>

                    </div>

                    {/* second div */}
                    <div className='w-[380px] md:w-full lg:w-[730px] md:h-[224px] h-[170px] mt-5 lg:mt-0 p-2 md:p-4' style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "7px" }}>
                        <h2 className='font-switzer md:text-[16px] text-[14px] ml-2 mt-2'>Design & Creative</h2>
                        <div className='flex lg:gap-6 gap-3 pt-4'>

                            <div className='md:h-[96px] md:w-[96px]  h-[50px] w-[50px] flex items-center justify-center' style={{ borderRadius: "30px", backgroundColor: "rgba(246, 246, 246, 1)" }}>
                                <img src={blkbck} alt='icon' />
                            </div>

                            {designData.map(item => (
                                <div key={item.id}>
                                    <div className='md:h-[96px] md:w-[96px] h-[50px] w-[50px] flex items-center justify-center' style={{ borderRadius: "74px", backgroundColor: "rgba(246, 246, 246, 1)" }}>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className='lg:w-[85px] h-[36px] w-[35px] md:w-[50px] ml-2 md:ml-6 lg:ml-2 mt-2 text-center lg:text-[14px] md:text-[13px] text-[9px]'>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full lg:pt-[40px] md:pt-[60px] pt-[20px] items-center">
                    {/* button */}
                    <Button name="Explore More"/>

                    {/* second div */}
                    <div className='w-full mt-5 lg:mt-0 flex  justify-center h-[32px] lg:w-[800px]' >
                        <h1 style={{ fontWeight: "700", fontSize: "22px", lineHeight: "32px", font: "bold", margin: "0px", textAlign: "left" }}>
                            30 more <span style={{ fontWeight: "normal" }}>to explore</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindWork;
