'use strict';

import Help from '../help';

describe('Help View', function() {

  beforeEach(() => {
    this.help = new Help();
  });

  it('Should run a few assertions', () => {
    expect(this.help).toBeDefined();
  });

});
