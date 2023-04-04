import { Button } from '../../ui/Button/Button';
import styles from './OurResources.module.scss';
import bigPicture from '../../../assets/svg/bigPicture.svg';
import firstSmall from '../../../assets/svg/fSmall.svg';
import secondSmall from '../../../assets/svg/sSmall.svg';
import search from '../../../assets/svg/search.svg';
import leftArrow from '../../../assets/svg/leftArrow.svg';
import rightArrow from '../../../assets/svg/rightArrow.svg';

//Макет оказался, мягко говоря, не очень и все картинки png или jpg, максимально пиксельные даже не в масштабе, поэтому вставил svg, 
//у них у всех обрыганные отступы, я не стал заморачиваться c обрезанием в фотошопе,разместил их в блоке позиционированием absolute... 

export const OurResources = () => {
    return (
        <section className={styles.ourResources}>
            <h6>OUR RESOURCES</h6>
            <h2>Start reading our blog</h2>
            <div className={styles.slider}>
                <div className={styles.pictureBlock}>
                    <div className={styles.bigPicture}>
                        <img src={bigPicture} alt='' />
                    </div>
                    <div className={styles.smallPictures}>
                        <img src={firstSmall} className={styles.fSmall} alt='' />
                        <img src={secondSmall} className={styles.sSmall} alt='' />
                    </div>
                    <div className={styles.searchIco}>
                        <img src={search} alt='' />
                    </div>
                </div>
                <div>
                    <h3>How to start planning</h3>
                    <p>Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
                        Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
                        Natum petentium principes mei ea. Tota everti periculis vis ei, quas tibique pro at, eos ut decore ...
                    </p>
                    <div className={styles.btnsBlock}>
                        <Button btnStyle={styles.readNow}>Read now</Button>
                        <span>Add to your bookmarks</span>
                    </div>
                </div>
            </div>
            <div className={styles.prevArrow}><img src={leftArrow} alt='leftArrow'/></div>
            <div className={styles.nextArrow}><img src={rightArrow} alt='rightArrow'/></div>
            <div className={styles.slidersDots}>
                <div className={styles.activeDot}></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}