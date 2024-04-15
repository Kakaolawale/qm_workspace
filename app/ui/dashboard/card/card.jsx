import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
    return (
        <div className={`${styles.container} rounded-lg flex items-center gap-4 cursor-pointer hover:bg-red-500`}>
            <MdSupervisedUserCircle size={24} />
            <div className={`${styles.texts} flex flex-col`}>
                <span className="text-lg font-semibold">Total Users</span>
                <span className={`${styles.number} text-2xl font-semibold`}>10,273</span>
                <span className="text-sm font-light">
                    <span className={`${styles.positive} text-lime-500`}>12%</span>
                    more than previous week
                </span>
            </div>
        </div>
    );
};

export default Card;

