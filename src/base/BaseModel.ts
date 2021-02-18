export default abstract class BaseModel {
  getAttributes() {
    return Object.keys(this);
  }

  load(data: any) {
    this.getAttributes().map(attribute => {
      if (data && data.hasOwnProperty(attribute)) {
        // @ts-ignore
        this[attribute] = data[attribute];
      }
      return null;
    });
  }
}
