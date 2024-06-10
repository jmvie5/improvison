import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { localParams } from "~/cookies.server";

export async function loader({ request }: LoaderFunctionArgs) {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = (await localParams.parse(cookieHeader)) || { transposition: 'C' };
	return json({ transposition: cookie.transposition });
}


export default function SoloProfile() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const { transposition } = useLoaderData<typeof loader>();
    const recordings = useLiveQuery(() => db.recordings.toArray());

    function deleteRecording(id?:number) {
        try {
            if (id) {
                db.recordings.delete(id)
                console.log('deleted entry')
            } else {
                console.log('no entry to delete in db')
            }
            
        } catch (error) {
            console.warn('Error when deleting recording from db')
        }
    }


    return (
        <div className=' flex flex-col justify-items-center gap-4 p-4'>
            <div className='self-center text-4xl font-bold p-4'>Profil</div>
            <div className='self-end'>Transposition : {transposition}</div>
            <div className='self-end'>
                <Button onPress={onOpen}>Effacer tous les enregisrements</Button>

                <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl" backdrop='blur'>
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Effacer tous les enregisrements</ModalHeader>
                        <ModalBody>
                            Voulez-vous vraiment effacer tous vos enregistrements? Vous devez avoir au moins un enregistrement de chaque niveau pour qu'il soit inscrit comme complété.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="warning" onPress={onClose}>
                                Non! Je ne veux pas effacer mes enregistrements
                            </Button>

                            <Button
                                color="danger"
                                onPress={() => {
                                    onClose()
                                    if (!recordings) return;
                                    for (let i = 0; i < recordings.length; i++) {
                                        const r = recordings[i];
                                        deleteRecording(r.id)
                                    }
                                }}
                            >
                                Tout effacer
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
            </div>
            
            <div>Enregistrements : </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {(recordings && recordings?.length > 0) ? (
                    <>
                        {recordings.map((record) => (
                            <div className='flex flex-col gap-4 items-center sef-center border rounded-xl p-4 justify-between' key={record.id}>
                                <div className='flex justify-between w-full gap-2'>
                                    <div className=' break-words'>{record.levelName}</div>
                                    <Button isIconOnly onPress={() => deleteRecording(record.id)}>X</Button>
                                    
                                </div>
                                <audio src={URL.createObjectURL(record.audioBlob)} controls/>
                                
                            </div>
                        ))}
                    </> 
                ) : <div>No recordings.</div>}
            </div>
            
        </div>
    )
}