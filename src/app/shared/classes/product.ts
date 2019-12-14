// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

// Product Size
export type ProductSize = 'M' | 'L' | 'XL';

// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product
export interface Products {
  product_id: number,
  name: String,
  slug: String,
  description: String,
  price: String,
  seller_id: number,
  more_details: null,
  status: number,
  category_id: number,
  brand_id: number,
  product_condition: number,
  created_date: string,
  modified_date: string,
  image: {
    image_id: 1,
        image: string,
        url: string,
        primary_image_id: number,
        video: null,
        product_id: 1,
        created_date: string,
        modified_date: string
  }
}

// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}

// Tag Filter
export interface TagFilter {
  tag?: ProductTags
}