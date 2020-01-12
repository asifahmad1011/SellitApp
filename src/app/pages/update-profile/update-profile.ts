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