import PropTypes from 'prop-types';
import Button from './Button';


export default function AboutCards({title, data1, data2, data3, image, color,}) {
  return (
    <div className="w-[500px] md:w-[800px] h-[280px] md:h-[360px] lg:w-[1300px] lg:h-[652px] lg:ml-[20px] p-4 md:p-[16px] mt-6 md:mt-0 mx-auto" style={{ backgroundColor: "rgba(255, 255, 255, 1)", borderRadius: "20px", display: "flex" }}>
    <div className='w-[591px] lg:mt-[80px] mt-4 md:mt-6 lg:ml-10 md:ml-4 ml-2'>
        <div className='lg:w-[464px] md:w-[300px] w-[280px] h-[80px] lg:h-[128px] text-[30px] md:text-[38px] lg:text-[54px] lg:leading-[64px] leading-[34px]' style={{fontWeight: "700", color: "rgba(32, 34, 41, 1)"}}>
          <h1>{title}</h1>  
        </div>

        <div className='lg:w-[644px] md:w-[400px] w-[280px] h-[96px] font-switzer lg:text-[19.5px] md:text-[12px] text-[9px] md:leading-[32px] leading-[20px] lg:mt-12 md:mt-6' style={{fontWeight: "400", color: "rgba(32, 34, 41, 0.8)"}}>
            {/* data 1 */}
            <div className='flex items-center'>
                <div className='h-[7px] lg:w-[18px] md:w-[12px] w-3 mr-3' style={{borderRadius: "21px",  backgroundColor: color}}></div>
                <p>{data1}</p>
            </div>
            {/* data 2 */}
            <div className='flex items-center'>
                <div className='h-[7px] lg:w-[18px] md:w-[12px] w-3 mr-3' style={{borderRadius: "21px", backgroundColor: color}}></div>
                <p>{data2}</p>
            </div>
            {/* data 3 */}
            <div className='flex items-center'>
                <div className='h-[7px] lg:w-[18px] md:w-[12px] w-3 mr-3' style={{borderRadius: "21px", backgroundColor: color}}></div>
                <p>{data3}</p>
            </div> 
           <div className='lg:mt-12 md:mt-4'>
              <Button name="Learn More" />
            </div>
        </div>


    </div>
    <div className="w-full h-full  flex">
      <img src={image} alt="onboard" className="w-full h-full" />
    </div>
  </div>
  )
}
AboutCards.propTypes = {
  title: PropTypes.string.isRequired,
  data1: PropTypes.string.isRequired,
  data2: PropTypes.string.isRequired,
  data3: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};