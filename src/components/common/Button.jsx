// import buttonLogo from '/whitelogo.png';
// import PropTypes from 'prop-types';

// export default function Button({name}) {
//     return (
//         <div className='relative w-[180px] lg:w-[260px] md:w-[250px] h-[74px] overflow-hidden flex items-center'
//             onMouseEnter={(e) => { const darkDiv = e.currentTarget.querySelector('.dark-div');
//                 if (darkDiv) {
//                     darkDiv.style.width = "100%"; 
//                     darkDiv.style.justifyContent = "flex-start"; 
//                     const exploreText = darkDiv.parentElement.querySelector('.explore-text'); 
//                     const buttonLogo = darkDiv.querySelector('img'); 
//                     if (exploreText) {
//                         exploreText.style.position = "absolute"; 
//                         exploreText.style.left = "10px"; 
//                         exploreText.style.right = "0";
//                         exploreText.style.color = "white"; 
//                     }
//                     if (buttonLogo) {
//                         buttonLogo.style.marginLeft = "auto"; 
//                         buttonLogo.style.marginRight = "10px"; 
//                     }
//                 }
//             }} 
//             onMouseLeave={(e) => { 
//                 const darkDiv = e.currentTarget.querySelector('.dark-div');
//                 if (darkDiv) {
//                     darkDiv.style.width = "74px"; 
//                     darkDiv.style.justifyContent = "center";
//                     const exploreText = darkDiv.parentElement.querySelector('.explore-text'); 
//                     const buttonLogo = darkDiv.querySelector('img'); 
//                     if (exploreText) {
//                         exploreText.style.position = "static"; 
//                         exploreText.style.left = "auto"; 
//                         exploreText.style.right = "auto"; 
//                         exploreText.style.color = "initial"; 
//                     }
//                     if (buttonLogo) {
//                         buttonLogo.style.marginLeft = "0"; 
//                         buttonLogo.style.marginRight = "0"; 
//                     }
//                 }
//             }}
//         >
//             <div 
//                 className='dark-div md:w-[64px] h-[34px] w-[34px] md:h-[64px] flex items-center gap-4 justify-center lg:justify-start' 
//                 style={{ borderRadius: "30px", backgroundColor: "rgba(32, 34, 41, 1)", transition: "width 0.3s ease", paddingLeft: "10px", paddingRight: "10px",cursor: "pointer"}}>
//                 <img src={buttonLogo} style={{marginRight: "5px"}} />
//             </div>
//             <h1 
//                 className='explore-text lg:text-[22px] md:text-[15px] text-[13px]' 
//                 style={{ fontWeight: "500", lineHeight: "18px", font: "Switzer",transition: "transform 0.3s ease",  position: "absolute", marginLeft: "15px", color: "rgba(32, 34, 41, 1)" }}>
//                 {name}
//             </h1>
//         </div>
//     );
// }
// Button.propTypes = {
//     name: PropTypes.string.isRequired,
//   };

import buttonLogo from '/whitelogo.png';
import PropTypes from 'prop-types';

export default function Button({name}) {
    return (
        <div 
            className='relative w-[180px] lg:w-[260px] md:w-[250px] h-[74px] overflow-hidden flex items-center'
            onMouseEnter={(e) => { 
                const darkDiv = e.currentTarget.querySelector('.dark-div');
                if (darkDiv) {
                    darkDiv.style.width = "100%"; 
                    darkDiv.style.justifyContent = "flex-start"; 
                    const exploreText = darkDiv.parentElement.querySelector('.explore-text'); 
                    const buttonLogo = darkDiv.querySelector('img'); 
                    if (exploreText) {
                        exploreText.style.position = "absolute"; 
                        exploreText.style.left = "20px"; // Adjusted left position
                        exploreText.style.color = "white"; 
                    }
                    if (buttonLogo) {
                        buttonLogo.style.marginLeft = "auto"; 
                        buttonLogo.style.marginRight = "10px"; 
                    }
                }
            }} 
            onMouseLeave={(e) => { 
                const darkDiv = e.currentTarget.querySelector('.dark-div');
                if (darkDiv) {
                    darkDiv.style.width = "74px"; 
                    darkDiv.style.justifyContent = "center";
                    const exploreText = darkDiv.parentElement.querySelector('.explore-text'); 
                    const buttonLogo = darkDiv.querySelector('img'); 
                    if (exploreText) {
                        exploreText.style.position = "relative"; // Reset position
                        exploreText.style.left = "auto"; 
                        exploreText.style.color = "rgba(32, 34, 41, 1)"; 
                    }
                    if (buttonLogo) {
                        buttonLogo.style.marginLeft = "0"; 
                        buttonLogo.style.marginRight = "0"; 
                    }
                }
            }}
        >
            <div 
                className='dark-div md:w-[64px] h-[34px] w-[34px] md:h-[64px] flex items-center gap-4 justify-center lg:justify-start' 
                style={{ 
                    borderRadius: "30px", 
                    backgroundColor: "rgba(32, 34, 41, 1)", 
                    transition: "width 0.3s ease, justify-content 0.3s ease", 
                    paddingLeft: "10px", 
                    paddingRight: "10px",
                    cursor: "pointer" 
                }}
            >
                <img src={buttonLogo} className='md:ml-[10px] ml-[2px]'/>
            </div>
            <h1 
                className='explore-text lg:text-[22px] md:text-[15px] text-[13px]' 
                style={{ 
                    fontWeight: "500", 
                    lineHeight: "18px", 
                    font: "Switzer",
                    transition: "transform 0.3s ease, color 0.3s ease", 
                    position: "relative", 
                    marginLeft: "15px", 
                    color: "rgba(32, 34, 41, 1)" 
                }}
            >
                {name}
            </h1>
        </div>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
};
