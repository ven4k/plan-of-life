import appleWatch from '../../../assets/svg/appleWatch.svg';
import atlassian from '../../../assets/svg/atlassian.svg';
import audi from '../../../assets/svg/audi.svg';
import bigFacebook from '../../../assets/svg/bigFacebook.svg';
import bitBucket from '../../../assets/svg/bitBucket.svg';
import styles from './BrandsBlock.module.scss';


export const BrandsBlock = () => {
    return (
        <div className={styles.brandsBlock}>
            <img src={bitBucket} alt='' />
            <img src={appleWatch} alt='' />
            <img src={bigFacebook} alt='' />
            <img src={atlassian} alt='' />
            <img src={audi} alt='' />
        </div>
    )
}