import styles from './Quotes.module.scss';
import ava from '../../../assets/svg/ava.svg';
export const Quotes = () => {
    return (
        <section className={styles.quotes}>
            <div className={styles.titleBlock}>
                <h6>TESTIMONIALS</h6>
                <h2>Customers's quotes</h2>
                <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an.</p>
            </div>
            <div className={styles.slider}>
                <div className={styles.sliderItem}>
                    <p className={styles.sliderText}>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos,
                        vero tractatos ius an, in mel diceret persecuti.
                    </p>
                    <img src={ava} alt='ava' />
                </div>
                <div className={`${styles.sliderItem} ${styles.nextSliderItem}`}>
                    <p className={styles.sliderText}>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos,
                        vero tractatos ius an, in mel diceret persecuti.
                    </p>
                </div>
            </div>
            <div className={styles.slidersDots}>
                <div></div>
                <div></div>
                <div className={styles.activeDot}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}