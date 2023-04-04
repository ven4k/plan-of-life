import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({children, btnStyle}) => {

    return (
        <button className={cn(styles.defaultBtn, [btnStyle])}>{children}</button>
    )
}