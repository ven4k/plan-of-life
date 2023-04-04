import { Link } from 'react-router-dom';
import { Button } from '../../ui/Button/Button';
import facebook from '../../../assets/svg/facebook.svg';
import mail from '../../../assets/svg/mail.svg';
import telegram from '../../../assets/svg/telegram.svg';
import twitter from '../../../assets/svg/twitter.svg';
import styles from './HeaderItems.module.scss';



export const HeaderItems = ({noVisible}) => {
    return (
        <>
            <nav className={`${styles.leftContentWrapper} ${noVisible && styles.noVisible}`}>
                <Link><div className={styles.logo}></div></Link>
                <Link className={styles.activeLink}>Home</Link>
                <Link>Blog</Link>
                <Link>Features</Link>
                <Link>Pricing</Link>
                <Link>Documentation</Link>
            </nav>
            <nav className={`${styles.rightContentWrapper} ${noVisible && styles.noVisible}`}>
                <Link><img src={facebook} alt="facebookIco" /></Link>
                <Link><img src={telegram} alt="telegramIco" /></Link>
                <Link><img src={twitter} alt="twitterIco" /></Link>
                <Link><img src={mail} alt="mailIco" /></Link>
                <Button btnStyle={styles.headerBtn}>Get Started</Button>
            </nav>
        </>
    )
}