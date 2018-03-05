import Item from './item';

class ItemFactory {

  create(itemData){
    const item = new Item(itemData.id, itemData.type,itemData.name, itemData.description,itemData.level,itemData.stats);
    return item;
  }
}

export {
  ItemFactory,
  ItemFactory as default
};