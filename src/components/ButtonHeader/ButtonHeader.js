import styles from "./ButtonHeader.css";

const ButtonHeader = (props) => {

    const { text } = props;

    return (
        <div className={styles.ButtonHeader}>
            <div className="menuLeftButtonWrapper">
                <button className="button">{text}</button>
            </div>
        </div>



    );
}





export default ButtonHeader;