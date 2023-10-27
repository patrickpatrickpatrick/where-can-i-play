import { Location, LocationAddress } from '../../lib/types';
import styles from './LocationInfo.module.scss';
import InfoCard from './../InfoCard/InfoCard';

interface props {
	location: Location;
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
  <p>{house_number} {road}</p>
  <p>{road}</p>
  <p>{city}</p>
  <p>{postcode}</p>
</address>

const LocationInfo = ({ location: { name, address } }: props) => <>
  <InfoCard>
    <h3
      className={styles.locationInfoTitle}
    >
      {name}
    </h3>
    <Address {...address} />
  </InfoCard>
  <h4>
    You can also play...
  </h4>
</>

export default LocationInfo;