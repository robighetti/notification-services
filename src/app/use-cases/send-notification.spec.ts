import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('it should be able to send a notification', async () => {
    const notificationsReposirory = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsReposirory);

    const { notification } = await sendNotification.execute({
      content: 'Nova solicitação de amizade',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsReposirory.notifications).toHaveLength(1);
    expect(notificationsReposirory.notifications[0]).toEqual(notification);
  });
});
