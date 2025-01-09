import { IonModal } from "@ionic/react";
import { PropsWithChildren, useRef } from "react";

interface ModalProps { }


const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { children } = props;
  const modal = useRef<HTMLIonModalElement>(null);
  return <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.75} breakpoints={[0, 0.75]}>
    {children}
  </IonModal>
};

export default Modal;
