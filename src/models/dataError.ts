export default class DataError {
  message: string;
  data: string;
  constructor(message, data) {
    this.message = message;
    this.data = data;
  }
}
