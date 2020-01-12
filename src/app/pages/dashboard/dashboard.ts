export interface Dashboard {
    product_id: bigint,
    name: string,
    slug: string,
    description: string,
    price: bigint,
    seller_id: bigint,
    more_details: string,
    status: bigint,
    category_id: bigint,
    brand_id: bigint,
    product_condition: bigint, 
    created_date: Date,
    modified_date: Date,
    image: Blob
  }
  
  export interface ProductSatus {
    product_id: bigint,
    status: bigint,
  }

  export interface updateProfile {
    matrikel_number: bigint;
    first_name: string;
    last_name: string;
    dob: Date;
    email: string;
    address: string;
    phone_number: string;
    postal_code: string;
    role_id: bigint;
    username: string;
    password: string;
    created_date: Date;
    modified_date: Date;
  }