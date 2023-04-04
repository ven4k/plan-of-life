import { Button } from '../../ui/Button/Button';
import styles from './CustomerHelp.module.scss';
import downArrow from '../../../assets/svg/downArrow.svg';
export const CustomerHelp = () => {
    return (
        <section className={styles.customerHelp}>
            <h6>Customer help</h6>
            <h2>Frequently asked questions</h2>
            <div className={styles.listBlock}>
                <div className={styles.listItem}>
                    <img src={downArrow} alt='' />
                    <span>Reque insolens in vel?</span>
                </div>
                <div className={styles.listItem}>
                    <img src={downArrow} alt='' />
                    <span>Vis rebum error graecis ea, id sit postea accusamus?</span>
                </div>
                <div className={styles.opened}>
                    <img src={downArrow} />
                    <span>Lorem repudiandae ne nec?</span>
                    <div>
                        <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
                            Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        </p>
                        <Button btnStyle={styles.documentation}>Go to documentation</Button>
                    </div>

                </div>
                <div className={styles.listItem}>
                    <img src={downArrow} alt='' />
                    <span>Ad dicit numquam vel. Et eos iudico feugait percipitur?</span>
                </div>
                <div className={styles.listItem}>
                    <img src={downArrow} alt='' />
                    <span>Sea no dico percipitur. Fierent constituam definitiones id eum?</span>
                </div>
            </div>
        </section>
    )
}