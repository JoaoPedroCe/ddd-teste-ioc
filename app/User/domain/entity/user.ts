export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
