import { AdsModule } from './ads.module';

describe('AdsModule', () => {
  let adsModule: AdsModule;

  beforeEach(() => {
    adsModule = new AdsModule();
  });

  it('should create an instance', () => {
    expect(adsModule).toBeTruthy();
  });
});
