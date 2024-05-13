import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db';
import { Button } from '@nextui-org/react';

export default function Profile() {

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