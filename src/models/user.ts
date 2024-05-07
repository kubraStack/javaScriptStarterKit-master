export class User {
  id: number;
  name: string;
  type?: string;

  constructor(id, name, type?) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

export interface IUser {
  id: number;
  name: string;
}
