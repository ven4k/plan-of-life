import { HeaderItems } from "../HeaderItems/HeaderItems";
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <HeaderItems />
            <div className={styles.copyright}>Copyright © 2018 by Random site</div>
        </footer>
    )
}