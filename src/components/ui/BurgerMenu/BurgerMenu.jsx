import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import facebook from '../../../assets/svg/facebook.svg';
import mail from '../../../assets/svg/mail.svg';
import telegram from '../../../assets/svg/telegram.svg';
import twitter from '../../../assets/svg/twitter.svg';
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
                <li><Link className={styles.menuItem}>Blog</Link></li>
                <li><Link className={styles.menuItem}>Features</Link></li>
                <li><Link className={styles.menuItem}>Pricing</Link></li>
                <li><Link className={styles.menuItem}>Documentation</Link></li>
                <li><Link className={styles.menuItem}><img src={facebook} alt="facebookIco" /></Link></li>
                <li><Link className={styles.menuItem}><img src={telegram} alt="telegramIco" /></Link></li>
                <li><Link className={styles.menuItem}><img src={twitter} alt="twitterIco" /></Link></li>
                <li><Link className={styles.menuItem}><img src={mail} alt="mailIco" /></Link></li>
                <li><Button btnStyle={styles.headerBtn}>Get Started</Button></li>
            </ul>
        </div>
    )
}