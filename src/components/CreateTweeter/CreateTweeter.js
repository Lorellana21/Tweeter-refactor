import styles from "./CreateTweeter.css";
import profileImg from "../../images/profile.svg";
import ButtonTimeline from "../ButtonTimeline";

const CreateTweeter = (props) => {

    const { placeholder } = props;

    return (

        <div className={styles.CreateTweeter}>
            <div className="createTweetWrapper">
                <div className="columnProfile">
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="profileImage"
                    />
                </div>

                <div className="columnCreate">
                    <div className="form">
                        <input
                            type="text"
                            name="message"
                            className="createInput"
                            placeholder={placeholder}
                        />
                        <ButtonTimeline
                            title="Twittear" />
                    </div>
                </div>
            </div>
        </div>



    );
}





export default CreateTweeter;