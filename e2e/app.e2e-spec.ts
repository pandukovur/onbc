import { ObcPage } from './app.po';

describe('obc App', () => {
  let page: ObcPage;

  beforeEach(() => {
    page = new ObcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
