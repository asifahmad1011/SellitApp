export interface Category {
  category_id: bigint;
  name: string;
  description: string;
  parent_id: bigint;
  created_date: Date;
  modified_date: Date;
}

export interface Brand {
  brand_id: bigint;
  category_id: bigint;
  brand_name: string;
  created_date: Date;
  modified_date: Date;
}