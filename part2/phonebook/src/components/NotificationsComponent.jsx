import { useEffect } from "react";

function NotificationsComponent({ notifications, setNotifications }) {
  const POLLING_FREQUENCY = 1000;
  let monitorStaleNotificationsTaskId;


  useEffect(() => {
    console.log("Monitoring stale notifications...");
    monitorStaleNotifications();

    return () => {
      console.log("Stopping monitoring stale notifications...");
      clearTimeout(monitorStaleNotificationsTaskId);
    };
  }, [notifications]);

  function cleanStaleNotificationsIfNecessary() {
    const currentTime = Date.now();
    for (const [removeTime, notification] of notifications) {
      if (currentTime >= removeTime) {
        console.log("%o is considered stale, and will be removed.", notification);
        const newNotifications = new Map([...notifications].filter(entry => entry[0] !== removeTime));
        console.log("Old notifications: %o, new notifications: %o", notifications, newNotifications);
        setNotifications(newNotifications);
      }
    }
  }

  function monitorStaleNotifications() {
    console.log("monitorStaleNotifications (notifications=%o)", notifications);
    monitorStaleNotificationsTaskId = setTimeout(() => {
      console.log("Checking for stale notifications...");
      cleanStaleNotificationsIfNecessary();
      monitorStaleNotificationsTaskId = setTimeout(monitorStaleNotifications, POLLING_FREQUENCY);
    }, POLLING_FREQUENCY);
  }

  return (
    <div id="notifications-container">
      {[...notifications.values()].map(notification => (
        <div className={`notification notification-${notification.type}`} key={notification.id}>{notification.icon} {notification.message}</div>
      ))}
    </div>
  );
}

export default NotificationsComponent;