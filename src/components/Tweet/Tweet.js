import styles from "./Tweet.css";
import profileImg from "../../images/profile.svg";
import speechImg from "../../images/speech.svg";
import retweetImg from "../../images/retweet.svg";
import favImg from "../../images/fav.svg";
import saveImg from "../../images/save.svg";
import PropTypes from "prop-types";

const Tweet = (props) => {

    console.log(props.tweet)



    return (

        <div className={styles.Tweet}>
            <div className="tweetsList">
                <div className="tweetItem">
                    <div className="columnTweetProfile">
                        <img
                            src={profileImg}
                            alt="Profile"
                            className="profileImage"
                        />

                        <div className="row">
                            <p className="tweetFullname">
                                <strong>{props.tweet.fullname}</strong>
                                <span className="grayText">{props.tweet.username}</span>
                                <span>&nbsp;·&nbsp;</span>
                                <span className="grayText">{props.tweet.time}</span>
                            </p>
                        </div>
                        <div className="row">
                            <p className="tweetContent">

                            </p>
                        </div>
                        <div className="row">
                            <ul className="tweetActions">
                                <li>
                                    <a href="/" className="tweetActionsLink">
                                        <img
                                            src={speechImg}
                                            alt="speech"
                                            className="tweetActionsImg"
                                        />
                                        <span>{props.tweet.content}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="tweetActionsLink">
                                        <img
                                            src={retweetImg}
                                            alt="retweet"
                                            className="tweetActionsImg"
                                        />
                                        <span>{props.tweet.retweets}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="tweetActionsLink">
                                        <img
                                            src={favImg}
                                            alt="fav"
                                            className="tweetActionsImg"
                                        />
                                        <span>{props.tweet.favs}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" className="tweetActionsLink">
                                        <img
                                            src={saveImg}
                                            alt="save"
                                            className="tweetActionsImg"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}
Tweet.propTypes = {
    tweets: PropTypes.exact({
        fullname: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        content: PropTypes.string,
        comments: PropTypes.number,
        retweets: PropTypes.number,
        favs: PropTypes.number,
        time: PropTypes.string
    }),
};







export default Tweet;