'use strict';

import Masonry from '../masonry';

describe('Masonry View', function() {

  beforeEach(() => {
    this.masonry = new Masonry();
  });

  it('Should run a few assertions', () => {
    expect(this.masonry).toBeDefined();
  });

});
