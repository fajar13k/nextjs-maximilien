import { createContext, useState } from "react";

export default NotificationContext = createContext({
  notification: null, // {will be title, message, status}
  showNotification: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}
