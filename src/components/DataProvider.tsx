import React, { createContext, memo, useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';
import getDate from '../utils/date';

const db = SQLite.openDatabaseSync('stylesnap.db');

const DataContext = createContext<any>({});

// db.runAsync(
//   'DROP TABLE IF EXISTS items;'
// )
// db.runAsync(
//   'DROP TABLE IF EXISTS outfits;'
// )

const DataProvider = (props: any) => {
  const {
    children
  } = props;

  const [items, setItems] = useState<any>([]);
  const [outfits, setOutfits] = useState<any>([]);

  const setUpDB = async () => {
    try {
      await db.runAsync(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imageUrl TEXT, price TEXT, brand TEXT, notes TEXT);'
      );
      await db.runAsync(
        'CREATE TABLE IF NOT EXISTS outfits (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, headwear INTEGER, top INTEGER, bottom INTEGER, footwear INTEGER, outerwear INTEGER, fragrance INTEGER, accessory1 INTEGER, accessory2 INTEGER, accessory3 INTEGER);'
      )
    } catch (error) {
      console.log(error);
    }
  };

  const syncItems = async () => {
    try {
      const items =	await db.getAllAsync('SELECT * FROM items')
      setItems(items);
      return items;
    } catch (error) {
      console.log(error);
    }
  };

  const syncOutfits = async () => {
    try {
      const outfits =	await db.getAllAsync('SELECT * FROM outfits')
      setOutfits(outfits);
      return outfits;
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (item: any) => {
	  const {
	  	name,
	  	imageUrl,
	  	price,
	  	brand,
	  	notes
	  } = item || {};

    // console.log('addItem');
    try {
      await db.runAsync(
        'INSERT INTO items (name, imageUrl, brand, price, notes) values (?, ?, ?, ?, ?)', [name, imageUrl, brand, price, notes],
      );
    } catch (error) {
      console.log(error);
    }
    await syncItems();
  };

  const deleteItem = async (itemId: string) => {
    try {
      await db.runAsync(
        'DELETE FROM items WHERE id = ?', [itemId],
      );
    } catch (error) {
      console.log(error);
    }
    await syncItems();
  };

  const updateItem = async (item: any) => {
    const {
      id,
	  	name,
	  	imageUrl,
	  	price,
	  	brand,
	  	notes
	  } = item || {};

    try {
      await db.runAsync(
        'UPDATE items SET name = ?, imageUrl = ?, price = ?, brand = ?, notes = ? WHERE id = ?', [name, imageUrl, price, brand, notes, id],
      );
    } catch (error) {
      console.log(error);
    }
    await syncItems();
  };

  const updateTodaysOutfit = async (key: any, id: any) => {
    const date = getDate();

    try {
      if (outfits.find((outfit: any) => outfit.date === date)) {
        await db.runAsync(`UPDATE outfits SET ${key} = ? WHERE date = ?`, [id, date]);
      } else {
        await db.runAsync(`INSERT INTO outfits (date, ${key}) values (?, ?)`, [date, id]);
      }
    } catch (error) {
      console.log(error);
    };
    
    await syncOutfits();
  };

  useEffect(() => {
    setUpDB();
    syncItems();
    syncOutfits();
  }, []);

  return (
    <DataContext.Provider value={{ items, outfits, addItem, deleteItem, updateItem, updateTodaysOutfit }}>
      {children}
    </DataContext.Provider>
  )
};

const useData = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export default memo(DataProvider);

export { useData };
