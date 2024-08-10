import * as SQLite from 'expo-sqlite';
import { SQLiteAnyDatabase } from 'expo-sqlite/build/NativeStatement';

let db: SQLiteAnyDatabase;

const setUpDB = async () => {
	db = SQLite.openDatabaseSync('stylesnap.db');
	await db.runAsync(
		'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imageUrl TEXT, type TEXT, brand TEXT, color TEXT, season TEXT, notes TEXT);'
	);
};

const addItem = async (item: any) => {
	const {
		name,
		imageUrl,
		type,
		brand,
		color,
		season,
		notes
	} = item;

	await db.runAsync(
		'INSERT INTO items (name, imageUrl, type, brand, color, season, notes) values (?, ?, ?, ?, ?, ?, ?)', [name, imageUrl, type, brand, color, season, notes],
	);
};

const getItem = () => {
	
};

const getItems = async () => {
	const items =	await db.getAllAsync('SELECT * FROM items')
	return items;
};

const deleteItem = () => {

};

const updateItem = () => {

};

export {
	setUpDB,
	addItem, 	
	getItem,
	getItems,
	deleteItem,
	updateItem
};
