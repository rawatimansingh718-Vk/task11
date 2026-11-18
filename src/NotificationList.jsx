const notifications = [
  { id: 1, type: 'success', message: 'Profile updated successfully' },
  { id: 2, type: 'warning', message: 'Password expires in 3 days' },
  { id: 3, type: 'info', message: 'New lecture materials available' },
];

function NotificationItem({ type, message }) {
  const icon =
    type === 'success' ? '✅' :
    type === 'warning' ? '⚠️' : 'ℹ️';

  return <li>{icon} {message}</li>;
}

function NotificationList() {
  return (
    <ul>
      {notifications.map(n => (
        <NotificationItem
          key={n.id}
          type={n.type}
          message={n.message}
        />
      ))}
    </ul>
  );
}

export default NotificationList;
