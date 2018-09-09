import { ExtendsModule } from './extends.module';

describe('ExtendsModule', () => {
  let extendsModule: ExtendsModule;

  beforeEach(() => {
    extendsModule = new ExtendsModule();
  });

  it('should create an instance', () => {
    expect(extendsModule).toBeTruthy();
  });
});
