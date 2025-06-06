export interface User {
  nom: string;
  adresseMail: string;
  numeroTel: string;
  password: string;
  role: 'ADMIN' | 'CLIENT' | 'MECANICIEN';
  photo?: string;
}
export interface UserLogin {
  adresseMail: string;
  password: string;
}
