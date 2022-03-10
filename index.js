class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
