import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Link } from "@nextui-org/react";
import { constraint_cards_EN, constraint_cards_FR, selection_cards, theme_cards } from './cards';
import { t } from "i18next";
import { useLocale } from "remix-i18next/react";

export default function DownloadModal({isOpen, onOpenChange}: {isOpen:boolean, onOpenChange: () => void }) {
    const locale = useLocale()
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl" className="bg-default">
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1 text-background">{t("pages.landingDuo.downloadModal.title")}</ModalHeader>
                <ModalBody className="items-center">
                    <Link isBlock showAnchorIcon href={theme_cards} target="_blank" rel="noreferrer">{t("pages.landingDuo.downloadModal.theme-cards")}</Link>
                    {locale === 'en' 
                    
                        ? <Link isBlock showAnchorIcon href={constraint_cards_EN} target="_blank" rel="noreferrer">Constraint cards</Link>
                        : <Link isBlock showAnchorIcon href={constraint_cards_FR} target="_blank" rel="noreferrer">Cartes contraintes</Link>

                    }
                    <Link isBlock showAnchorIcon href={selection_cards} target="_blank" rel="noreferrer">{t("pages.landingDuo.downloadModal.selection-cards")}</Link>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                        Ok
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    )
}