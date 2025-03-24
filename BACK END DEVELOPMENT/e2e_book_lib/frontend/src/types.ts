export interface RegisterData {
  name: string;
  email: string;
  password_hash: string;
  role_id: string;
}
export interface LoginData {
  email: string;
  password: string;
}