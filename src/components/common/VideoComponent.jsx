import PropTypes from 'prop-types';
import play from '/play.png';

export default function VideoComponent({ step, data }) {
  return (
    <div style={{border: "1px solid rgba(240, 240, 240, 1)", borderRadius:"7px", alignContent: "center", alignItems: "center"}} className='w-full lg:w-[635px] h-[80px] mt-1 flex p-[20px]'>
        <div style={{height: "57px", width: "57px", backgroundColor: "rgba(236, 236, 236, 1)", borderRadius: "43.94px", display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center"}}>
            <img src={play} alt="Play icon"/>
        </div>

        <h2 style={{fontWeight: "600", fontSize: "16px", lineHeight: "17.83px", color: "rgba(32, 34, 41, 1)", marginLeft: "16px"}}>
          {step}: <span style={{fontWeight: "400", fontSize: "16px", lineHeight: "17.83px", color: "rgba(32, 34, 41, 1)"}}>{data}</span>
        </h2>
    </div>
  );
}

VideoComponent.propTypes = {
  step: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};
