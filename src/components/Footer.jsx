import { footerData } from './constant/data'
import downicon from '/downIcon.svg'
import yellowLogo from '/yellowLogo.svg'
import zwilt from '/zwilt.svg'

export default function Footer() {
    return ( <div>
        <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: 'linear-gradient(180deg, #0C0C0C 0%, #202229 100%)', transform: 'skewY(0deg)', transformOrigin: 'top left', }} className='h-full lg:h-[100%] item-center lg:p-[30px] p-[20px] md:p-[30px]'>

            <div className='lg:max-w-[1300px] max-w-[400px] md:max-w-[800px] md:h-[240px] h-[180px] lg:h-[481px] mb-4 lg:mb-6 mt-8 flex justify-center items-center lg:ml-10' style={{ backgroundColor: 'rgba(82, 90, 160, 1)', transform: 'skewY(-1deg)', transformOrigin: 'top left', }}>

                <div style={{ transform: 'skewY(1deg)', transformOrigin: 'top left', color: "rgba(255, 255, 255, 1)", alignContent: "center", alignItems: "center" }}>
                    <div className="font-switzer lg:text-[54px] md:text-[30px] text-[16px] lg:leading-[64px] md:leading-[44px] leading-[24px] lg:h-[128px] md:h-[90px] h-[50px] w-[200px] lg:w-[683px] md:w-[400px] text-center">
                        <h1>Need a job done, and done well? Get started</h1>
                    </div>
                    <div className="lg:h-[73.73px] md:h-[58.73px] h-[48.73px] w-[48.73px] lg:w-[73.73px] md:w-[58.73px] mx-auto lg:mt-10 md:mt-4 mt-2 flex justify-center items-center" style={{ backgroundColor: "rgba(32, 34, 41, 1)", borderRadius: "29.89px" }}>
                        <img src={downicon} alt="downicon" />
                    </div>
                </div>
            </div>

            <div style={{ transform: 'skewY(1deg)', transformOrigin: 'top left', height: '100%', overflow: 'hidden', }} className='flex flex-col md:flex-row md:pt-16 mt-10 lg:ml-10'>
                <div>
                    {/* logo */}
                    <div className='md:w-[120px] md:h-[29.3px] h-[24px] w-[100px] flex justify-center'>
                        <img src={zwilt} alt='zilt logo' />
                        <img src={yellowLogo} alt='yellow logo' className='mt-2 ml-2' />
                    </div>

                    {/* text */}
                    <div className='md:w-[284px] w-[230px] md:h-[66px] h-[40px] md:text-[14px] text-[12px] md:leading-[22px] leading-[16px] lg:mt-[28px] md:mt-[20px] mt-[16px] font-switzer' style={{ fontWeight: "400", color: "rgba(255, 255, 255, 0.8)" }}>
                        <p>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
                    </div>

                    {/* links */}
                    <div className='lg:mt-[49px] mt-[29px] cursor-pointer'>
                        <div className='md:w-[149px] w-[140px] md:h-[32px] h-[30px] opacity-40'>
                            <h4 className='font-switzer md:text-[14px] text-[12px] md:leading-[32px]' style={{ color: "rgba(255, 255, 255, 1)" }}>LINKS AND REDIRECTS</h4>
                        </div>
                        <div className='flex gap-2 md:mt-4 mt-2'>
                            <div className='lg:w-[162.16px] md:w-[120px] w-[100px] h-[40px] md:h-[50px] flex items-center justify-center' style={{ borderRadius: "20.27px", backgroundColor: "rgba(41, 43, 52, 1)", color: "rgba(237, 239, 255, 1)" }}>
                                <p className='font-switzer md:text-[14.86px] md:leading-[12.16px] text-[12px] leading-[14px]'>Hire now</p>
                            </div>
                            <div className='lg:w-[162.16px] md:w-[120px] w-[100px] h-[40px] md:h-[50px] flex items-center justify-center' style={{ borderRadius: "20.27px", backgroundColor: "rgba(41, 43, 52, 1)", color: "rgba(237, 239, 255, 1)" }}>
                                <p className='font-switzer md:text-[14.86px] text-[12px] leading-[14px] md:leading-[12.16px]'>Apply now</p>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='md:w-[876px] md:ml-[70px] lg:ml-[90px] w-full h-full mt-6 md:mt-0'>
                    <div className='lg:w-[779px] lg:h-[128px] h-[60px] w-[260px] md:w-[380px]  md:h-[120px] font-switzer lg:text-[54px] md:text-[26px] text-[18px] md:leading-[34px] leading-[24px] lg:leading-[64px]' style={{ color: "rgba(255, 255, 255, 1)", fontWeight: "600" }}>
                        <h1>Connecting the right people to the right businesses.</h1>
                    </div>

                    <div className="flex flex-wrap md:mt-9 mt-2">
                        {footerData.map((section, index) => (
                            <div key={index} className="w-1/2 md:w-1/4 p-2">
                                <h2 className="lg:text-[14px] md:text-[11px] text-[12px] lg:leading-[32px] opacity-[40%] font-switzer mb-4" style={{color: "rgba(255, 255, 255, 1)", fontWeight: "600"}}>{section.heading}</h2>
                                <ul>
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="mb-2 font-switzer lg:text-[18px] md:text-[14px] text-[14px] lg:leading-[24px] cursor-pointer" style={{color: "rgba(255, 255, 255, 1)", fontWeight: "400"}}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </div>
            <div style={{ border: "1px solid rgba(255, 255, 255, 1)", background: 'linear-gradient(180deg, #0C0C0C 0%, #202229 100%)', transform: 'skewY(0deg)', transformOrigin: 'top left',}} className='w-[100%] lg:h-[41px] h-[30px] flex justify-between items-center md:px-10 px-4'>
                <div style={{fontWeight: "500", color: "rgba(255, 255, 255, 1)"}} className='font-switzer md:text-[16px] md:leading-[31.25px] text-[10px]'>All rights reserved  by Zwilt</div>
                <div style={{fontWeight: "500", color: "rgba(255, 255, 255, 1)"}} className='font-switzer md:text-[16px] text-[10px] md:leading-[31.25px] flex md:gap-6 gap-2 underline'>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>

                </div>
            </div>
        </div>
    )
}
