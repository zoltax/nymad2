import Items from '../db/items';
import ItemFactory from '../items/factory';

class ItemLoader {

  constructor() {
    this.items = [];
  }

  loadItem() {

  }

  loadAll(){

    const itemFactory = new ItemFactory();

    Object.keys(Items).map((item_id) => {
      const item_data = Items[item_id];
      const item = itemFactory.create(item_data);
      this.items.push(item);
    });

  }

}

export {
  ItemLoader as default,
};
