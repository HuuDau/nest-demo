
export class ResponData<T> {
  data: T | T[];
  statusCode: number;
  message: string;
  constructor(data: T | T[], statusCode: number, message: string) {
    this.data = data;
    this.statusCode = statusCode;
    this.message = message;
    return this;
  }

}