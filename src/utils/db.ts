import Dexie, { Table } from 'dexie';

export interface Photo {
	id?: number;
	photo: string;
	fileName: string;
	title: string;
	description?: string;
	albumId?: number;
	date: Date;
}

export interface Album {
	id: number;
	name: string;
	description?: string;
	thumbnail?: string;
}

export class PhotosDexie extends Dexie {
	photos!: Table<Photo>;
	albums!: Table<Album>;

	constructor() {
		super('photos');
		this.version(1).stores({
			photos: '++id, photo, fileName, title, description, albumId, date',
			albums: '++id, name, description, thumbnail',
		});
	}
}

export const db = new PhotosDexie();
