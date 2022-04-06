import styles from "./HeaderMenuItem.css";

const HeaderMenuItem = (props) => {

    const { text, path1, path2 } = props;

    return (

        <div className={styles.HeaderMenuItem}>
            <li className="menuItem">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="menuItemIconActive"
                >
                    <g>
                        <path
                            d={path1}
                        ></path>
                        <path
                            d={path2}
                        ></path>
                    </g>
                </svg>
                <a className="menuItemLinkActive" href="/">{text}</a>
            </li>

        </div>
    );
}





export default HeaderMenuItem;