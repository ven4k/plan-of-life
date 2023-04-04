import styles from './MainSection.module.scss';
import background from '../../../assets/svg/mainBackground.svg';
import stats from '../../../assets/svg/stats.svg';
import play from '../../../assets/svg/play.svg';


export const MainSection = () => {
    return (
        <main>
            <section className={styles.mainTitle}>
                <h6>PLAN YOUR LIFE</h6>
                <h1>Increase your <strong>productivity</strong></h1>
                <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu<br /> atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
                <div className={styles.play}>
                    <img src={play} alt=''/>
                </div>
                <div className={styles.slider}>
                    <div className={styles.activeSliderDot}></div>
                    <div className={styles.sliderDot}></div>
                    <div className={styles.sliderDot}></div>
                </div>
            </section>
            <section className={styles.graph}>
                <div className={styles.backgroundImg}><img className={styles.image} src={background} alt=''/></div>
                <div className={styles.backgroundCloud}>
                    <div className={styles.cloud}></div>
                </div>
                <div className={styles.lineDot}>
                </div>
                <div className={styles.stats}>
                    <img src={stats} alt='stats'/>
                </div>
            </section>
        </main>
    )
}