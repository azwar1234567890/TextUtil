// import React, { useState } from 'react'

// export default function About() {
//     const [myButton, setMyButton] = useState('DarkModeOn')
//     const [myStyle, setMyStyle] = useState(
//         {
//             color: 'white',
//             backgroundColor: 'black'
//         });

//     const toggleStyle = () => {
//         if (myStyle.color === 'white') {
//             setMyStyle(
//                 {
//                     color: 'black',
//                     backgroundColor: 'white'
//                 }
//             )
//             setMyButton ('LightModeOn')
//         }
//         else {
//             setMyStyle(
//                 {
//                     color: 'white',
//                     backgroundColor: 'black'
//                 }

//             )
//             setMyButton ('DarkModeOn')

//         }
//     }



//     return (
//         <div className="container" style={myStyle}>
//             <h2 className="my-3">About</h2>
//             <div>
//                 <div className="accordion" id="accordionPanelsStayOpenExample" >
//                     <div className="accordion-item" style={myStyle}>
//                         <h2 className="accordion-header" id="panelsStayOpen-headingOne">
//                             <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//                                 Accordion Item #1
//                             </button>
//                         </h2>
//                         <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
//                             <div className="accordion-body">
//                                 <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                         </div>
//                     </div>
//                     <div className="accordion-item" style={myStyle}>
//                         <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
//                             <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
//                                 Accordion Item #2
//                             </button>
//                         </h2>
//                         <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
//                             <div className="accordion-body">
//                                 <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                         </div>
//                     </div>
//                     <div className="accordion-item" style={myStyle}>
//                         <h2 className="accordion-header" id="panelsStayOpen-headingThree">
//                             <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//                                 Accordion Item #3
//                             </button>
//                         </h2>
//                         <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
//                             <div className="accordion-body">
//                                 <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="container my-5">
//                     <button className="btn btn-primary" onClick={toggleStyle}>{myButton}</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

