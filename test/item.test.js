import Item from '../js/item';

describe('Item', () => {

  describe('item', () => {
    test('is item a class', () => {
      let item = new Item();
      expect(item).toBeTruthy()
    });


    test('can we set name in the item class', () => {
        let item = new Item('scx');
        expect(item.name).toBe('scx');
    });


  });


});
