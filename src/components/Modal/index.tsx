import { IonModal } from "@ionic/react";
import { type PropsWithChildren, useRef } from "react";

// 继承 IonModal 的 props 类型
type IonModalProps = React.ComponentProps<typeof IonModal>;

interface ModalProps extends IonModalProps {}

const Modal = (props: PropsWithChildren<ModalProps>) => {
	const { children, ...rest } = props;
	const modal = useRef<HTMLIonModalElement>(null);
	return (
		<IonModal
			ref={modal}
			trigger="open-modal"
			initialBreakpoint={0.9}
			breakpoints={[0, 0.9]}
			{...rest}
		>
			{children}
		</IonModal>
	);
};

export default Modal;
