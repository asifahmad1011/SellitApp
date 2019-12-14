export interface Category {
    category_id: bigint;
    name: string;
    description: string;
    parent_id: bigint;
    created_date: Date;
    modified_date: Date;
  }
  