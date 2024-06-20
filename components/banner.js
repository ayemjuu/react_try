import styles from "./banner.module.css"

const Banner = ({children}, props) => {

    return (

        <header className="row mb-4">
            <div className="col-5 mt-5" >
                <img src="./adidas.png" alt="logo" className={styles.logo}></img>

            </div>

            {/* <div className="col-7 mt-5"> */}
            <div className="col-7 mt-5" style={subtitleStyle}> 

            {children}
            {/* {props.headerText}   */}

            </div>

        </header>
    );
};

export default Banner;

const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: 'blue'
}

