import { SucheBilderPage } from './app.po';

describe('suche-bilder App', () => {
  let page: SucheBilderPage;

  beforeEach(() => {
    page = new SucheBilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
