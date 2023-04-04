import { Button } from '../../ui/Button/Button';
import files from '../../../assets/svg/files.svg';
import overview from '../../../assets/svg/overview.svg';
import saveEvents from '../../../assets/svg/saveEvents.svg';
import meetingChats from '../../../assets/svg/meetingChats.svg';
import cloudsAboutApp from '../../../assets/svg/cloudsAboutApp.svg';
import styles from './AboutApp.module.scss';
export const AboutApp = () => {
    return (
        <section className={styles.AboutApp}>
            <h6>ABOUT US</h6>
            <h2>Read about our app</h2>
            <div className={styles.usage}>
                <div className={styles.item}>
                    <img src={overview} alt='' />
                    <h5>Overview</h5>
                    <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
                </div>
                <div className={styles.item}>
                    <img src={files} alt='' />
                    <h5>Files</h5>
                    <p>No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.</p>
                </div>
                <div className={styles.item}>
                    <img src={meetingChats} alt='' />
                    <h5>Meeting chats</h5>
                    <p>Vim ne tacimates neglegentur. Erat diceret omittam at est.</p>
                </div>
                <div className={styles.item}>
                    <img src={saveEvents} alt='' />
                    <h5>Save events</h5>
                    <p>Nisl idque mel ea, nominati voluptatum.
                    </p>
                </div>
            </div>
            <div className={styles.btnsBlock}>
                <Button btnStyle={styles.readMore}>Read more</Button>
                <div className={styles.orBlock}>OR</div>
                <Button btnStyle={styles.getStarted}>Get started</Button>
            </div>
            <div className={styles.background}>
                <img src={cloudsAboutApp} alt='' />
            </div>
        </section>
    )
}