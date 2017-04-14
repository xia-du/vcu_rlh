'use strict';

import GoTop from '../gotop';

describe('GoTop View', function() {

  beforeEach(() => {
    this.goTop = new GoTop();
  });

  it('Should run a few assertions', () => {
    expect(this.goTop).toBeDefined();
  });

});
