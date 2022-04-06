import styles from "./Logo.css";

const Logo = (props) => {

    const { path1 } = props;

    return (

        <div className={styles.Logo}>
            <div className="menuLeftLogoWrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="logo"
                >
                    <g>
                        <path
                            d={path1}
                        ></path>
                    </g>
                </svg>
            </div >
        </div>


    );
}





export default Logo;