export interface Sell {
    product_id: bigint;
    name: string;
    slug: string;
    description: Date;
    price: string;
    seller_id: bigint;
    more_details: string;
    status: bigint;
    category_id: bigint;
    brand_id: bigint;
    product_condition: bigint;
    created_date: Date;
    modified_date: Date;
  }
  