import React, { createContext, memo, useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('stylesnap.db');

const DataContext = createContext<any>({});

// db.runAsync(
//   'DROP TABLE IF EXISTS items;'
// )

const DataProvider = (props: any) => {
  const {
    children
  } = props;

  const [items, setItems] = useState<any>([]);

  const setUpDB = async () => {
    try {
      await db.runAsync(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imageUrl TEXT, price TEXT, brand TEXT, notes TEXT);'
      );
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

  const deleteItem = async () => {
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

  useEffect(() => {
    setUpDB();
    syncItems();
  }, []);

  return (
    <DataContext.Provider value={{ items, addItem, deleteItem, updateItem }}>
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
