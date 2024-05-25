import { ArcadeWithAddress, LocationAddress } from '../../lib/types';
import styles from './LocationInfo.module.scss';

export interface LocationInfoProps {
	location: ArcadeWithAddress;
}

const ActionContainer = ({ url }: { url: string }) => <div
    className={styles.actionContainer}
  >
    <a className={styles.actionContainerAction}>
      Share
    </a>
    <a className={styles.actionContainerAction}>
      Copy
    </a>
</div>

const Address = ({
  city,
  house_number,
  postcode,
  road,
}: LocationAddress) => <address
  className={styles.locationItemAddress}
>
  <p className={styles.locationInfoParagraph}>{house_number} {road}</p>
  <p className={styles.locationInfoParagraph}>{road}</p>
  <p className={styles.locationInfoParagraph}>{city}</p>
  <p className={styles.locationInfoParagraph}>{postcode}</p>
</address>

const LocationInfo = ({ location: { name, ...address } }: LocationInfoProps) => <>
  <h3
    className={styles.locationInfoTitle}
  >
    {name}
  </h3>
  <Address {...address} />
</>

export default LocationInfo;