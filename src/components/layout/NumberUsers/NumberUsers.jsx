import ppl from '../../../assets/svg/ppl.svg';
import performance from '../../../assets/svg/performance.svg';
import styles from './NumberUsers.module.scss';

export const NumberUsers = () => {
    return (
        <section className={styles.numberUsers}>
            <div className={styles.leftUserBlock}>
                <img src={performance} alt='' />
                <span>89%</span>
                <p>Customers who have increased their productivity</p>
            </div>
            <div className={styles.rightUserBlock}>
                <img src={ppl} alt='' />
                <span>3123</span>
                <p>Users who have used our application</p>
            </div>
        </section>
    )
}