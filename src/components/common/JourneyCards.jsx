import PropTypes from 'prop-types';
import Button from './Button';

export default function JourneyCards({ index, title, data, image, color, buttonName }) {
  return (
    <div className='w-full lg:h-[387.5px] mb-4 lg:mb-6' style={{ backgroundColor: color, transform: 'skewY(-1.8deg)', transformOrigin: 'top left', }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div className='w-full lg:w-[520px] lg:mt-14 lg:ml-4 ml-0 mt-4 md:ml-2 md:mt-6' style={{ transform: 'skewY(1.8deg)', transformOrigin: 'top left', display: "flex" }}>
          <div className='h-[83px] lg:w-[51.23px] w-6 md:w-10 mt-2 ml-3 md:ml-0'>
            <img src={index} alt="index" />
          </div>
          <div className='ml-2 lg:ml-6 md:ml-4'>
            <div className='lg:h-[88px] lg:w-[445px] w-[240px] md:w-[300px] lg:mb-6 mb-1 md:mb-2'>
              <h1 style={{ fontWeight: "600", color: "rgba(32, 34, 41, 1)" }} className='text-[16px] md:text-[24px] lg:text-[34px] lg:leading-[44px] leading-[25px] md:leading-[32px] font-switzer'>{title}</h1>
            </div>
            <div className='lg:h-[48px] lg:w-[407px] w-[260px] h-[30px] md:w-[240px] md:h-[38px] '>
              <p style={{ fontWeight: "400", color: "rgba(32, 34, 41, 0.8)" }} className='text-[14px] md:text-[16px] lg:text-[16px] lg:leading-[24px] leading-[16px] md:leading-[24px] font-switzer mb-2'>{data}</p>
            </div>
            {/* Button */}
            <div className='md:mt-12 mt-2'>
              <Button name={buttonName} />
            </div>
          </div>
        </div>

        <div className='w-full lg:w-auto'>
          <img src={image} alt="Image" className='w-full lg:w-auto' />
        </div>
      </div>

    </div>
  )
}

JourneyCards.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};
