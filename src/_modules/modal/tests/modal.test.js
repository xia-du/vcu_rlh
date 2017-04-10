'use strict';

import Modal from '../modal';

describe('Modal View', function() {

  beforeEach(() => {
    this.modal = new Modal();
  });

  it('Should run a few assertions', () => {
    expect(this.modal).toBeDefined();
  });

});
