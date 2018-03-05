import Equipment from '../js/equipment';
import Item from "../js/item";

describe('Equipment', () => {

  describe('class', () => {
    test('is equipment a class', () => {
      const equipment = new Equipment();
      expect(equipment).toBeTruthy()
    });


    test('can we set the size in the equipment class', () => {
        const equipment = new Equipment(4);
        expect(equipment.size).toBe(4);
    });

  });

  describe('adding an item', () => {

      test('can we add only an item', () => {
          const equipment = new Equipment(4);
          const item = new Item('scx');
          equipment.add(item);
          // expect(item.)
      });

  })


});
