export interface Chat {
    matrikel_number: bigint,
    first_name: string,
    last_name: string,
    product_name: string,    
  }

  export interface UserMessages {
    receiver_id: bigint,
    sender_id: bigint
  }

