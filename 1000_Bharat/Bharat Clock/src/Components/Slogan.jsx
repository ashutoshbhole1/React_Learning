import styles from "./Slogan.module.css" 
const Slog = () => {
    return(
    <h2 className={`${styles["lead"]} fw-normal  fst-italic`}>This is BHARAT CLOCK which shows the Date and Time Of BHARAT</h2>
    )
   }
   
   export default Slog;

// How to use styles to dedicated module

// 1st 
// import styles ( any name can be given ) from "./Slogan.module.css" 

// 2
//    className= {`${styles["lead"]} fst-italic`}
// 
//     use tem. lit. for style and use styles with aaray operate form
//  other css can be given after that
// and as always the inline css will be prioritized 1st

// But we can take use of !important {HA HA}