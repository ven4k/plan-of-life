import { Button } from "../../ui/Button/Button"
import styles from './GetStarted.module.scss';

export const GetStarted = () => {
    return (
        <section className={styles.getStarted}>
            <h6>PLAN YOUR LIFE</h6>
            <h2>Get <strong>started</strong> now</h2>
            <p>
                Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
                Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
            </p>
            <div className={styles.btnsBlock}>
                <Button btnStyle={styles.viewPricing}>View pricing</Button>
                <Button btnStyle={styles.readDocumentation}>Read documentation</Button>
            </div>
        </section>
    )
}