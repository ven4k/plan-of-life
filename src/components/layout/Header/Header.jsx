import { Link } from 'react-router-dom'
import { BurgerMenu } from '../../ui/BurgerMenu/BurgerMenu';
import { HeaderItems } from '../HeaderItems/HeaderItems';
import styles from './Header.module.scss';


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerItems}><HeaderItems /></div>
            <div className={styles.burgerMenu}>
                <Link><div className={styles.logo}></div></Link>
                <BurgerMenu />
            </div>
        </header>
    )
}