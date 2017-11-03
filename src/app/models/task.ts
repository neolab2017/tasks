export class Task {
  data: string
  finised: boolean
  
  constructor(public id: number, public title: string, public desc: string) {
    this.finised = false;
    this.data = null;
  }

}