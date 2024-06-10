
import group1 from '/Group1.png';
import group2 from '/Group2.png';
import group3 from '/Group3.png';
import one from '/1.png';
import two from '/2.png';
import three from '/3.png';
import JourneyCards from './common/JourneyCards';

export default function ResponsiveImageComponent() {
  return (
    <div style={{ backgroundColor: "rgba(255, 255, 255, 1)", height: '100%', width: '100%' }} className='lg:pt-[70px] lg:pr-[70px] lg:pl-[70px] p-2 md:p-[30px]'>
      <div style={{ display: "flex", justifyContent: "center", alignContent: "center", fontWeight: "700" }} className=' lg:mb-24 mb-12 lg:text-[54px] leading-[64px] text-[24px] md:text-[40px]'>
        <h1>Start your journey today.</h1>
      </div>

     <JourneyCards index={one} title="Find your next star performer." image={group1} color='rgba(237, 239, 255, 1)' data="Explore the vast Zwilt marketplace to find the candidate that meets your needs." buttonName="Join Now"/>
     <JourneyCards index={two} title="Find your next star performer." image={group2} color='rgba(255, 247, 225, 1)' data="Assess the candidate through work history, transparent tests and video interviews." buttonName="Browse More"/>
     <JourneyCards index={three} title="Find your next star performer." image={group3} color='rgba(243, 243, 243, 1)' data="Onboard your candidate right away and start creating the next big thing." buttonName="Join Now"/>

    </div>
  );
}
