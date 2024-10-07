import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"


interface ErrorModalInterface {
    disclosure : {
        isOpen: boolean;
        onOpen: () => void;
        onClose: () => void;
        onOpenChange: () => void;
        isControlled: boolean;
        getButtonProps: (props?: unknown) => unknown;
        getDisclosureProps: (props?: unknown) => unknown;
    },
    title:string,
    description:string,
    closeButton:string
}

/**
 * @param disclosure useDisclosure() from '@nextui-org/react'
 * @param title string
 * @param description string
 * @param closeButton string
 */
export default function ErrorModal({disclosure, title, description, closeButton}:ErrorModalInterface) {

    return (
        <>
            <Modal 
                isOpen={disclosure.isOpen} 
                onOpenChange={disclosure.onOpenChange} 
                onClose={disclosure.onClose} 
                backdrop='blur' 
                placement='center' 
                size="lg"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 select-none">{title}</ModalHeader>
                        <ModalBody className="flex flex-col justify-center items-center">
                            <p>{description}</p>
                        </ModalBody>
                        <ModalFooter>

                            <Button color="primary" variant="light" onPress={() => {
                                onClose()
                            }}>
                                {closeButton}
                            </Button>
                            
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}