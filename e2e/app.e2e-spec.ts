import { MemengPage } from './app.po';

describe('memeng App', function() {
  let page: MemengPage;

  beforeEach(() => {
    page = new MemengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
