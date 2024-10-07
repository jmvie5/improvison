import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

interface ModalInterface {
    title: string;
    content: string;
    isAction: boolean;
    confirmatonButton?: string;
    cancelButton: string;
    onConfirmation?: () => void;
    onCancel?: () => void;
}

export default function MyModal({
    title,
    content,
    isAction,
    cancelButton,
    confirmatonButton,
    onConfirmation,
    onCancel,
}: ModalInterface) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>

            <Button onPress={onOpen}>{title}</Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                    <ModalBody>
                        {content}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="warning" onPress={() => {
                            onClose()
                            if (onCancel !== undefined) {
                                onCancel();
                            }
                        }}>
                        {cancelButton}
                        </Button>
                        {isAction ? (

                            <Button
                                color="success"
                                onPress={() => {
                                    onClose()
                                    if (onConfirmation !== undefined) {
                                        onConfirmation();
                                    }
                                }}
                            >
                                {confirmatonButton}
                            </Button>

                        ) : (
                            <></>
                        )}
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}
