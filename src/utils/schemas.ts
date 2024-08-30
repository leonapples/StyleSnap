// Type definitions for the two common data objects (clothing items and outfits) used for this app.

// Base schema for a clothing item in the app/database.
interface ClothingItemBase {
  name?: string;
  imageUrl?: string | null;
  brand?: string;
  price?: string;
  notes?: string;
}

// A new clothing item to be added
type NewClothingItem = ClothingItemBase;

// An existing clothing item in the database
interface ExistingClothingItem extends ClothingItemBase {
  id: number;
}

// Any clothing item
type ClothingItem = NewClothingItem | ExistingClothingItem;

// Clothing item categories
type ClothingCategory =
  | 'headwear'
  | 'top'
  | 'bottom'
  | 'footwear'
  | 'outerwear'
  | 'accessory1'
  | 'accessory2'
  | 'accessory3'
  | 'fragrance';

// Base schema for an outfit in the app/database.
// Outfits are a collection of items (numerical id's) with an associated date.
// Each item is associated with a "category"
type OutfitBase = {
  [key in ClothingCategory]?: number;
};

// Represents a single outfit in the app/database.
interface Outfit extends OutfitBase {
  date?: string;
  id?: number;
}

export {
  ClothingItem,
  NewClothingItem,
  ExistingClothingItem,
  ClothingCategory,
  Outfit,
};
