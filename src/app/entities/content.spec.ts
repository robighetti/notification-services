import { Content } from './content';

describe('Notification Content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma nova notificação!');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less then 5 characteres', () => {
    expect(() => new Content('111')).toBeTruthy();
  });

  it('it should not be able to create a notification content with more then 240 characteres', () => {
    expect(() => new Content('a'.repeat(241))).toBeTruthy();
  });
});
