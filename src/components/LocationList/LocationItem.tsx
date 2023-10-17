import styles from './LocationItem.module.scss';
import { Address } from './../../lib/types';
import { useRouter } from 'next/navigation'

interface props {
  id: string,
  name: string,
  isSelectedLocation: boolean,
  address: Address
}

const createAddress = ({ 
  city,
  // country,
  house_number,
  // neighbourhood,
  postcode,
  road,
  // state,
  // suburb
}: Address) => <address>
    <p>{house_number} {road}</p>
    <p>{road}</p>
    <p>{city}</p>
    <p>{postcode}</p>
</address>

const LocationItem = ({
    id,
    isSelectedLocation,
    name,
    address,
}: props) => {
  const router = useRouter()

  return (
    <li
      key={id}
      onClick={() => router.push(`#?arcadeId=${id}`)}
      className={isSelectedLocation ? styles.locationSelected : styles.location}
    >
      <h2>{name} - {isSelectedLocation ? "SELECTED" : "NOT SELECTED"}</h2>
      <address>{createAddress(address)}</address>
    </li>
  )
} 

export default LocationItem;