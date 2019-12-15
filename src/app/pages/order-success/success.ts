export interface Success {
    product_id: bigint,
    name: string,
    slug: string,
    description: string,
    price: bigint
    seller_id: bigint,
    more_details: string,
    status: number,
    category_id: bigint,
    brand_id: bigint,
    product_condition: bigint, 
    created_date: Date,
    modified_date: Date,
    image: Blob;
  }
  