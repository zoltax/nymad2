import itemLoader from './utils/item_loader';

class Equipment {

  constructor(size) {
    this.size = size;
    this.items = [size];
    this.itemLoader = new itemLoader();
    this.itemLoader.loadAll();
  }

  addItem(item) {
    this.items.push(item);
  }

  getItem() {
    return this.items;
  }

}

export default Equipment;
