import { Notify } from 'notiflix';

export const Notification = addedName =>
  Notify.warning(`${addedName} is already in contacts`, {
    timeout: 3000,
    fontSize: '14px',
  });
