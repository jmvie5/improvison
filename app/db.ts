import Dexie, { Table } from 'dexie';

export interface Recording {

  id?: number;
  audioBlob: Blob;
  levelName: string;
  tString: string;
  subLvlName: string
  //date: string;

}

export class MySubClassedDexie extends Dexie {

  recordings!: Table<Recording>;

  constructor() {
    super('improvison');
    this.version(1).stores({
      recordings: '++id, audioBlob, levelName, tString, subLvlName', // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();