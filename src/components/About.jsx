import AboutCards from './common/AboutCards'
import { cardData } from './constant/data'


export default function About() {
  return (
    <div style={{ transform: 'skewY(-1deg)', transformOrigin: 'top left', backgroundColor: "rgba(237, 239, 255, 0.5)" }}>
      <div style={{ backgroundColor: 'rgba(237, 239, 255, 0.5)', transform: 'skewY(1deg)', transformOrigin: 'top left', height: '100%', marginTop: "50px", alignContent: "center", alignItems: "center" }} className='lg:pt-[80px] lg:pb-[90px] md:pt-[70px] md:pb-[70px] pb-16 pt-4 lg:p-10 flex  lg:flex-row max-w-full overflow-x-auto p-5'>
        <div className="lg:ml-[35px] lg:mr-[35px]">
          <div className="h-[128px] md:h-[80px] lg:h-[128px] w-[310px] md:w-[600px] lg:w-[380px] font-switzer text-[44px]  md:text-[54px] leading-[54px] lg:leading-[64px] mb-4 lg:mb-4 md:mb-0" style={{ fontWeight: "700", color: "rgba(32, 34, 41, 1)" }}>
            <h1>Why choose Zwilt?</h1>
          </div>
          <div className="h-[80px] md:h-[90px] lg:h-[128px] w-[260px] md:w-[520px] lg:w-[326px] font-switzer md:text-[22px] text-[16px] leading-[24px] lg:leading-[32px] mb-4 md:mb-10" style={{ fontWeight: "400", color: "rgba(32, 34, 41, 0.8)" }}>
            <p>We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
          </div>
        </div>

      <div className='flex gap-3 '>
      {cardData.map((card) => (
            <AboutCards
              key={card.id}
              title={card.title}
              data1={card.data1}
              data2={card.data2}
              data3={card.data3}
              color={card.color}
              image={card.image}
            />
          ))}
      </div>


      </div>
    </div>
  )
}
