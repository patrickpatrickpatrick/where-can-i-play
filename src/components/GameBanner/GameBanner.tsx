import { Game } from './../../lib/types';
import Image from 'next/image';
import styles from './GameBanner.module.scss';

const getYear = (date: number) => (new Date(date * 1000)).getFullYear()

const GameBanner = ({
 name, first_release_date, cover: { url } 
}: Game) => <div
    className={styles.gameBanner}
  >
  <h2 className={styles.gameBannerTitle}>
    { name } ({ getYear(first_release_date) })
  </h2>
  <div
    className={styles.gameBannerImageContainer}
  >
    <Image
      src={url}
      width={264}
      height={352}
      alt={`Cover art for ${name}}`}
    />
  </div>
</div>

export default GameBanner;