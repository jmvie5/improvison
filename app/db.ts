import Dexie, { Table } from 'dexie';

export interface Recording {

  id?: number;
  audioBlob: Blob;
  levelName: string;

}

export class MySubClassedDexie extends Dexie {

  recordings!: Table<Recording>;

  constructor() {
    super('improvison');
    this.version(1).stores({
      recordings: '++id, audioBlob, levelName', // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();