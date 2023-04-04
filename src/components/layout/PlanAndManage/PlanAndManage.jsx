import { Button } from '../../ui/Button/Button';
import planAndManageBackground from '../../../assets/svg/planAndManageBackground.svg';
import playBtn from '../../../assets/svg/playBtn.svg';
import styles from './PlanAndManage.module.scss';

export const PlanAndManage = () => {
    return (
        <section className={styles.planAndManage}>
            <h6>DESKTOP AND MOBILE APP</h6>
            <h2><strong>Plan</strong> and <strong>manage</strong></h2>
            <p className={styles.planText}>
                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                Usu atqui laudem an, insolens gubergren similique est cu.
                Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat.
                Eum an expetenda consequat.
            </p>
            <div className={styles.btnsBlock}>
                <Button btnStyle={styles.viewVideo}>View video <img src={playBtn} alt=''/></Button>
                <Button btnStyle={styles.seeFeatures}>See features</Button>
            </div>
            <div className={styles.background}>
                <img src={planAndManageBackground} alt=''/>
            </div>
        </section>
    )
}