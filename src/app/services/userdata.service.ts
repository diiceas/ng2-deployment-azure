import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {

  constructor() { }

  getData(): string {
    return "test user data";
  }

}
