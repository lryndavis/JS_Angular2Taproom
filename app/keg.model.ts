export class Keg {
  public pint: number = 124;
  constructor(
    public beer: string,
    public brewery: string,
    public alcohol: number,
    public price: number,
    public id?: number) {
  }
    public checkLevel(pint) {
    if (this.pint <= 10) {
      return "low";
    }
  }
}
