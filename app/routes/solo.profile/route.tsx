import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db';
import { Button } from '@nextui-org/react';

import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { localParams } from "~/cookies.server";

export async function loader({ request }: LoaderFunctionArgs) {
	const cookieHeader = request.headers.get("Cookie");
	const cookie = (await localParams.parse(cookieHeader)) || { transposition: 'C' };
	return json({ transposition: cookie.transposition });
}


export default function Profile() {

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
        <div className=' grid grid-cols-1 justify-items-center gap-4 p-4'>
            <div>Transposition : {transposition}</div>
            <div>Enregistrements : </div>
            {(recordings && recordings?.length > 0) ? (
                <>
                    {recordings.map((record) => (
                        <div className='flex gap-4 items-center sef-center border rounded-xl p-4'>
                            <div>
                                <div>{record.levelName}</div>
                                <audio src={URL.createObjectURL(record.audioBlob)} controls/>
                            </div>
                            <Button isIconOnly onPress={() => deleteRecording(record.id)}>X</Button>
                        </div>
                    ))}
                </> 
            ) : <div>No recordings.</div>}
        </div>
    )
}