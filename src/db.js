import Dexie from "dexie";

export const db = new Dexie("opticals");
db.version(2).stores({
  carts: "++id, product_name,product_price,image_url,owner_id,product_id ", // Primary key and indexed props
  saved: "++id, product_name,product_price,image_url,owner_id,product_id ", // Primary key and indexed props
});
