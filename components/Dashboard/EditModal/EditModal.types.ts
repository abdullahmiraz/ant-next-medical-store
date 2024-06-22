import { Item } from "../MedicineList/MedicineList";

export interface EditModalProps {
  open: boolean;
  item: Item; // Use the actual type of your item, imported from itemTypes
  onSave: () => void;
  onCancel: () => void;
}
