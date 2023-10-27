import styles from "./InfoCard.module.scss";
import { classGenerator } from "@/lib/utils";

const classForInfoCard = classGenerator("infoCard", styles);

interface props {
  isHoverable?: boolean,
  isSelectable?: boolean,
  children: React.ReactNode
}

const InfoCard = ({ isHoverable, isSelectable, children }: props) =>
  <div className={classForInfoCard(isHoverable, isSelectable)}>
    {children}
</div>

export default InfoCard;