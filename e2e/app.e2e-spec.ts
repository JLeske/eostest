import { EostestPage } from './app.po';

describe('eostest App', () => {
  let page: EostestPage;

  beforeEach(() => {
    page = new EostestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
