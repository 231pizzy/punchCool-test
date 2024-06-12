import style from '/style.png';
import jason from '/jason.png'
import groove from '/groovehq.png'
import left from '/left.png'
import right from '/right.png'
import whiteGroove from '/groove1.svg'


function FindTalent() {
  return (
    <div style={{ width: '100%', overflow: 'hidden', backgroundColor: 'rgba(32, 34, 41, 1)', transform: 'skewY(-1deg)', transformOrigin: 'top left', }} className='h-full lg:h-[100%]'>
      <img src={style} style={{ position: 'absolute', top: 0, right: 0, height: '175px', width: '221px' }} />

      <div style={{ transform: 'skewY(1deg)', transformOrigin: 'top left', overflow: 'hidden',}} className='lg:p-[124px] p-[50px] md:p-[80px] flex flex-col lg:flex-row h-full lg:h-[100%]'>
        <div>
          <div className="flex justify-start w-full lg:w-[379px]" style={{ height: "192px" }}>
            <h1 className="text-4xl md:text-6xl lg:text-[54px] text-center lg:leading-[64px] leading-[45px]" style={{ font: "Switzer", fontWeight: "700", color: "rgba(255, 255, 255, 1)", textAlign: "left" }}>
              How it worked for jason
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
                <img src={jason} alt="jason" style={{ height: "57px", width: "57px", borderRadius: "50px", marginLeft: "10px", marginRight: "10px" }} />
              </span>
              at
              <span style={{ display: "inline-block", verticalAlign: "middle" }}>
                <img src={groove} alt="jason" className='md:ml-4 md:mr-4 lg:ml-0 lg:mr-0' />
              </span>
            </h1>
          </div>

          <div className='w-full mt-0 lg:w-[461px] h-[64px] lg:mt-[44px] text-[22px] leading-[32px]' style={{color: "rgba(255, 255, 255, 1)", fontWeight: "400"}}>
            <p>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.</p>
          </div>

          <div className='flex gap-5 lg:mt-6 mt-16 md:mt-6'>
            <div style={{height: "49.79px", width: "49.79px", borderRadius: "20.19px", backgroundColor: "rgba(255, 255, 255, 1)", display: "flex", justifyContent: "center", alignContent: 'center', alignItems: "center"}}>
              <img src={left}/>
            </div>
            <div style={{height: "49.79px", width: "49.79px", borderRadius: "20.19px", backgroundColor: "rgba(255, 255, 255, 1)", display: "flex", justifyContent: "center", alignContent: 'center', alignItems: "center"}}>
            <img src={right}/>
            </div>

          </div>

        </div>

        <div className='lg:ml-[101px] ml-2 mt-[40px] lg:mt-[100px] md:mt-[60px]'>
          <div className='flex'>
            <div>
              <img src={whiteGroove} alt='whiteGroove' />
            </div>
            <div>
            <div className='w-[209px] h-[44px] text-[34px] leading-[44px] ml-4' style={{color: "rgba(255, 255, 255, 1)", fontWeight: "600"}}>
             <h2>Jason Makki</h2>
            </div>
            <div className='w-[162px] h-[18px] text-[16px] leading-[18px] ml-4 mt-1' style={{color: "rgba(198, 196, 196, 1)", fontWeight: "500"}}>
             <h2>Engineer at GROOVE</h2>
            </div>
            <div className='w-[114px] h-[18px] text-[16px] leading-[18px] ml-4 mt-1' style={{color: "rgba(198, 196, 196, 1)", fontWeight: "500"}}>
             <h2>San Francisco</h2>
            </div>
            </div>
          </div>

          <div className='w-full mt-5 lg:w-[499px] md:h-[160px] h-[250px] lg:mt-[44px] text-[22px] leading-[32px]' style={{color: "rgba(255, 255, 255, 1)", fontWeight: "400"}}>
            <p>Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.</p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default FindTalent;
