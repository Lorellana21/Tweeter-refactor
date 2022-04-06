import styles from "./ButtonTimeline.css";


const ButtonTimeline = (props) => {

    const { title } = props;

    return (
        <div className={styles.ButtonTimeline}>
            <button className="formButton">{title}</button>
        </div>



    );
}


export default ButtonTimeline;