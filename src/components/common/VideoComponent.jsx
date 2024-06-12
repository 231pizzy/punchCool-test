import PropTypes from 'prop-types';
import play from '/play.png';
import play2 from '/play2.png'; 
const VideoComponent = ({ step, data, isActive, onClick }) => {
  const handleClick = () => {
    onClick(step); 
  };

  return (
    <div
    onClick={handleClick}
    style={{
      border: "1px solid rgba(240, 240, 240, 1)",
      borderRadius: "7px",
      boxShadow: isActive ? "0px 15px 30px 0px rgba(0, 0, 0, 0.07)" : "none",
      marginTop: "1px",
      padding: "10px",
      width: "100%",
      maxWidth: "635px",
      height: isActive ? "auto" : "80px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap", // Allow wrapping on smaller screens
    }}
  >
    <div
      style={{
        height: "57px",
        width: "57px",
        backgroundColor: isActive ? "rgba(139, 164, 253, 1)" : "rgba(236, 236, 236, 1)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: isActive ? "0px" : "0", 
        marginRight: "16px", 
        flexShrink: 0, // Prevent shrinking of the image container
      }}
    >
      <img src={isActive ? play2 : play} alt="Play icon" style={{ maxHeight: "100%", maxWidth: "100%" }} />
    </div>
  
    <div style={{ textAlign: "left", flex: 1, minWidth: "0" }}>
      <h2
        style={{
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "17.83px",
          color: "rgba(32, 34, 41, 1)",
          margin: 0,
        }}
      >
        {step}:{" "}
        <span
          style={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "17.83px",
            color: "rgba(32, 34, 41, 1)",
          }}
        >
          {data}
        </span>
      </h2>
      {isActive && (
        <div
          style={{
            width: "100%",
            maxWidth: "531px",
            marginTop: "10px",
            textAlign: 'left',
          }}
        >
          <h3 style={{ margin: 0 }}>
            Candidates are assessed through skill-based questions in a virtual setting, allowing you to gauge personality and cultural fit.
          </h3>
        </div>
      )}
    </div>
  </div>
  
  
  
  
  );
}

VideoComponent.propTypes = {
  step: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired // Add onClick prop type
};

export default VideoComponent;
