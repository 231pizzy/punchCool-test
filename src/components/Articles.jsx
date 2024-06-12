import React, { useState } from 'react';
import VideoComponent from './common/VideoComponent';
import halfblack from '/halfblack.png';

function Articles() {
  const [activeStep, setActiveStep] = useState("Step 2"); // Initial active step

  const handleClick = (step) => {
    setActiveStep(step === activeStep ? null : step); // Toggle active step
  };

  return (
    <div style={{
      backgroundColor: "rgba(255, 255, 255, 1)",
      transform: 'skewY(-0.9deg)',
      transformOrigin: 'top left',
    }}>
      <img src={halfblack} alt="Half Black" style={{ width: '100%' }} />
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        transform: 'skewY(1deg)',
        transformOrigin: 'top left',
        height: '100%',
        overflow: 'hidden',
        marginTop: "50px"
      }} className='lg:p-[70px] p-10'>

        <div className='w-full lg:w-[570px] h-full lg:h-[128px] text-4xl lg:text-[54px] lg:leading-[64px] leading-[45px]' style={{
          fontWeight: "700",
          color: "rgba(32, 34, 41, 1)"
        }}>
          <h2>How we ensure you’re in good hands.</h2>
        </div>

        <div className='w-full h-full lg:w-[646px] lg:h-[64px] font-switzer text-[22px] leading-[32px] mt-4 mb-6' style={{
          fontWeight: "400",
          color: "rgba(30, 21, 21, 0.8)"
        }}>
          <p>With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</p>
        </div>

        <VideoComponent step="Step 1" data="Resume Screening" isActive={activeStep === "Step 1"} onClick={handleClick} />
        <VideoComponent step="Step 2" data="Video Interview" isActive={activeStep === "Step 2"} onClick={handleClick} />
        <VideoComponent step="Step 3" data="Technical Evaluation" isActive={activeStep === "Step 3"} onClick={handleClick} />
        <VideoComponent step="Step 4" data="Application Review" isActive={activeStep === "Step 4"} onClick={handleClick} />
        <VideoComponent step="Step 5" data="Let's get to work" isActive={activeStep === "Step 5"} onClick={handleClick} />

      </div>
    </div>
  );
}

export default Articles;



{/* <div style={{border: "1px solid rgba(240, 240, 240, 1)", borderRadius:"7px",  boxShadow: "0px 15px 30px 0px rgba(0, 0, 0, 0.07)"}} className='w-full lg:w-[635px] h-[163px] mt-1 p-[10px] lg:p-[20px]'>
<div className='flex' style={{alignContent: "center", alignItems: "center"}}>
<div style={{height: "57px", width: "57px", backgroundColor: "rgba(139, 164, 253, 1)", borderRadius: "43.94px", display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center"}}>
  <img src={play2} alt="Play icon"/>
</div>

<h2 style={{fontWeight: "600", fontSize: "16px", lineHeight: "17.83px", color: "rgba(32, 34, 41, 1)", marginLeft: "16px"}}>
step 2: <span style={{fontWeight: "400", fontSize: "16px", lineHeight: "17.83px", color: "rgba(32, 34, 41, 1)"}}>Video Interview</span>
</h2>
</div>
<div className='w-full lg:w-[531px] h-[52px] mt-1'>
<h3>Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.</h3>
</div>
</div> */}