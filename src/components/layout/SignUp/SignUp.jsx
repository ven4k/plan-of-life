import styles from './SignUp.module.scss';
import { Button } from '../../ui/Button/Button';

export const SignUp = () => {
    return (
        <section className={styles.signUp}>
            <div>
                <h3>Sign up for newsletter</h3>
                <p>Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero alterum.</p>
            </div>
            <div className={styles.formBlock}>
                <form>
                    <input type='text' placeholder='Email address'/>
                    <Button btnStyle={styles.saveMe}>Save me</Button>
                </form>
            </div>
        </section>
    )
}