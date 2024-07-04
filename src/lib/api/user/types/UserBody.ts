export interface UserBody extends UserInfo {
  id: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UserInfo {
  username: string;
  firstname: string;
  lastname: string;
  middlename: string;
  birthDate: string;
}
