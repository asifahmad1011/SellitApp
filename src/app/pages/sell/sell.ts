export interface Sell {
  product_id: number;
  name: string;
  slug: string;
  description: string;
  price: bigint;
  seller_id: bigint;
  more_details: string;
  status: bigint;
  category_id: bigint;
  brand_id: number;
  product_condition: bigint;
  image: File;
  created_date: Date;
  modified_date: Date;
}