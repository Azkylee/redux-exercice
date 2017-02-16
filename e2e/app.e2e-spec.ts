import { ReduxExercicePage } from './app.po';

describe('redux-exercice App', function() {
  let page: ReduxExercicePage;

  beforeEach(() => {
    page = new ReduxExercicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
