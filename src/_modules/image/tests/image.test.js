'use strict';

import Image from '../image';

describe('Image View', function() {

  beforeEach(() => {
    this.image = new Image();
  });

  it('Should run a few assertions', () => {
    expect(this.image).toBeDefined();
  });

});
