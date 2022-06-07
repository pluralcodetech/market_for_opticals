import Dexie from "dexie";

export const db = new Dexie("opticals");
db.version(1).stores({
  carts: "++id, product_name,product_price,product_image,owner_id,product_id ", // Primary key and indexed props
  saved: "++id, product_name,product_price,product_image,owner_id,product_id ", // Primary key and indexed props
});
