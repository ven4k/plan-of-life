import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
    return (
        <div>
            <input id={styles.menuToggle} type="checkbox" />
            <label className={styles.menuBtn} htmlFor={styles.menuToggle}>
                <span></span>
            </label>

            <ul className={styles.menuBox}>
                <li><Link className={styles.menuItem}>Home</Link></li>
                <li><Link className={styles.menuItem}>About</Link></li>
                <li><Link className={styles.menuItem}>Team</Link></li>
                <li><Link className={styles.menuItem}>Contact</Link></li>
                <li><Link className={styles.menuItem}>Twitter</Link></li>
            </ul>
        </div>
    )
}