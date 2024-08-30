import React, { createContext, memo, useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';
import getDate from '../utils/date';
import {
  ExistingClothingItem,
  NewClothingItem,
  Outfit,
} from '../utils/schemas';

const db = SQLite.openDatabaseSync('stylesnap.db');

// uncomment and re-run app to completely reset tables
// useful for debugging/development

// db.runAsync(
//   'DROP TABLE IF EXISTS items;'
// )
// db.runAsync(
//   'DROP TABLE IF EXISTS outfits;'
// )

interface DataContextType {
  items: ExistingClothingItem[];
  outfits: Outfit[];
  addItem: (item: NewClothingItem) => Promise<void>;
  deleteItem: (id: number) => Promise<void>;
  updateItem: (item: ExistingClothingItem) => Promise<void>;
  updateTodaysOutfit: (key: string, id: number | null) => Promise<void>;
}

const DataContext = createContext<DataContextType>({
  items: [],
  outfits: [],
  addItem: async () => {},
  deleteItem: async () => {},
  updateItem: async () => {},
  updateTodaysOutfit: async () => {},
});

interface DataProviderProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Context provider that defines, stores, and provides live database data as well as simple database operations.
 *
 * @component
 * @param props {DataProviderProps}
 * @returns {JSX.Element} the DataProvider component.
 * @example
 * return (
 *   <DataProvider>
 *     {children}
 *   </DataProvider>
 * )
 */
const DataProvider = (props: DataProviderProps): JSX.Element => {
  const { children } = props;

  const [items, setItems] = useState<ExistingClothingItem[]>([]);
  const [outfits, setOutfits] = useState<Outfit[]>([]);

  const setUpDB = async () => {
    try {
      await db.runAsync(
        'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imageUrl TEXT, price TEXT, brand TEXT, notes TEXT);',
      );
      await db.runAsync(
        'CREATE TABLE IF NOT EXISTS outfits (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, headwear INTEGER, top INTEGER, bottom INTEGER, footwear INTEGER, outerwear INTEGER, fragrance INTEGER, accessory1 INTEGER, accessory2 INTEGER, accessory3 INTEGER);',
      );
    } catch (error) {
      console.log(error);
    }
  };

  const syncItems = async () => {
    try {
      const items = await db.getAllAsync('SELECT * FROM items');
      setItems(items as ExistingClothingItem[]);
      return items;
    } catch (error) {
      console.log(error);
    }
  };

  const syncOutfits = async () => {
    try {
      const outfits = await db.getAllAsync('SELECT * FROM outfits');
      setOutfits(outfits as Outfit[]);
      return outfits;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUpDB();
    syncItems();
    syncOutfits();
  }, []);

  const addItem = async (item: NewClothingItem) => {
    const { name, imageUrl, price, brand, notes } = item || {};
    try {
      // @ts-expect-error - at runtime, if any of these are undefined, they are just converted to null, which is fine for our purposes
      await db.runAsync(
        'INSERT INTO items (name, imageUrl, brand, price, notes) values (?, ?, ?, ?, ?)',
        [name, imageUrl, brand, price, notes],
      );
    } catch (error) {
      console.log(error);
    }
    await syncItems();
  };

  const deleteItem = async (id: number) => {
    try {
      await db.runAsync('DELETE FROM items WHERE id = ?', [id]);
    } catch (error) {
      console.log(error);
    }
    await syncItems();
  };

  const updateItem = async (item: ExistingClothingItem) => {
    const { id, name, imageUrl, price, brand, notes } = item || {};
    try {
      // @ts-expect-error - at runtime, if any of these are undefined, they are just converted to null, which is fine for our purposes
      await db.runAsync(
        'UPDATE items SET name = ?, imageUrl = ?, price = ?, brand = ?, notes = ? WHERE id = ?',
        [name, imageUrl, price, brand, notes, id],
      );
    } catch (error) {
      console.log(error);
    }
    await syncItems();
  };

  const updateTodaysOutfit = async (key: string, id: number | null) => {
    const date = getDate();
    try {
      if (outfits.find((outfit: Outfit) => outfit.date === date)) {
        await db.runAsync(`UPDATE outfits SET ${key} = ? WHERE date = ?`, [
          id,
          date,
        ]);
      } else {
        await db.runAsync(`INSERT INTO outfits (date, ${key}) values (?, ?)`, [
          date,
          id,
        ]);
      }
    } catch (error) {
      console.log(error);
    }
    await syncOutfits();
  };

  return (
    <DataContext.Provider
      value={{
        items,
        outfits,
        addItem,
        deleteItem,
        updateItem,
        updateTodaysOutfit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

/**
 * Hook that allows you to access the context object from the DataProvider.
 *
 * @returns {DataContextType} the context object from the DataProvider.
 */
const useData = (): DataContextType => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export default memo(DataProvider);

export { useData };
