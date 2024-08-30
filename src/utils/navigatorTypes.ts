import { ParamListBase } from '@react-navigation/native';
import { ClothingItem } from './schemas';

interface WardrobeStackParamList extends ParamListBase {
  WardrobePage: undefined;
  ItemDetailsPage: {
    // Item of clothing to display details for
    item?: ClothingItem;

    // Whether to allow editing of the item we are displaying details for
    editable?: boolean;
  };
}

interface TodayStackParamList extends ParamListBase {
  TodayPage: undefined;
  WardrobePopupPage: {
    // The human-readable name of the category (headwear, footwear, etc.) that prompted the popup
    category: string;

    // The unique key of the category (headwear, footwear, etc.) that prompted the popup
    key?: string;
  };
  ItemDetailsPage: {
    // Item of clothing to display details for
    item?: ClothingItem;

    // Whether to allow editing of the item we are displaying details for
    editable?: boolean;
  };
}

interface MemoriesStackParamList extends ParamListBase {
  MemoriesPage: undefined;
  OutfitPage: {
    // The date of the outfit to display
    date: string;
  };
  ItemDetailsPage: {
    // Item of clothing to display details for
    item?: ClothingItem;

    // Whether to allow editing of the item we are displaying details for
    editable?: boolean;
  };
}

export { WardrobeStackParamList, TodayStackParamList, MemoriesStackParamList };
