import styles from './Overlay.module.scss';

interface props {
	children: React.ReactNode,
	direction: "left"|"right"
}

const Overlay = ({ children, direction }: props) => children && <div
	className={
		direction == "left" ? styles.overlayLeft : styles.overlayRight
	}
>
	{children}
</div>

export default Overlay;