import styles from "./Headbar.css";

const Headbar = (props) => {

    const { text, path1 } = props;

    return (

        <div className={styles.Headbar}>

            <div className="headbar">

                <h1 className="headbarTitle">{text}</h1>
                <a href="#">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="profileIcon"
                    >
                        <g>
                            <path
                                d={path1}
                            />
                        </g>
                    </svg>
                </a>
            </div>
        </div>





    );
}





export default Headbar;