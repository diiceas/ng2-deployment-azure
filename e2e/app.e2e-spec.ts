import { Ng2DeploymentAzurePage } from './app.po';

describe('ng2-deployment-azure App', function() {
  let page: Ng2DeploymentAzurePage;

  beforeEach(() => {
    page = new Ng2DeploymentAzurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
