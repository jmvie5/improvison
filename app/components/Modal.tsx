import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button } from "@nextui-org/react";

interface ModalInterface {
    title: string;
    content: string;
    isAction: boolean;
    confirmatonButton?: string;
    cancelButton: string;
    onConfirmation?: Function;
    onCancel?: Function;
}

export default function Modal({
    title,
    content,
    isAction,
    cancelButton,
    confirmatonButton,
    onConfirmation,
    onCancel,
}: ModalInterface) {
    let [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function confirmation() {
        closeModal();
        if (onConfirmation !== undefined) {
            onConfirmation();
        }
    }

    function cancel() {
        closeModal();
        if (onCancel !== undefined) {
            onCancel();
        }
    }

    return (
        <>
            <div className="btn-primary">
                <Button onClick={openModal}>{title}</Button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-blue-950">
                                        {title}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-slate-700">{content}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="mt-4">
                                            <Button
                                                type="button"
                                                onClick={cancel}
                                            >
                                                {cancelButton}
                                            </Button>
                                        </div>
                                        {isAction ? (
                                            <div className="mt-4">
                                                <Button
                                                    type="button"
                                                    onClick={confirmation}
                                                >
                                                    {confirmatonButton}
                                                </Button>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}