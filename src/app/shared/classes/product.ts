

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
