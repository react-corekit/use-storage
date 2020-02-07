import React from "react";
import { useWhere } from "@react-corekit/use-where";

export const useStorage = (initialvalue = null, isSessionStorage = false) => {
  const [value, setValue] = useState(initialvalue);
  const [key, setKey] = useState(
    `storage-${Math.round(Date.now() / 1000)}-${Math.random()
      .toString(36)
      .substr(2, 10)}`
  );
  const [isBrowser] = useWhere();
  const storage = isBrowser()
    ? isSessionStorage
      ? window.sessionStorage
      : window.localStorage
    : null;

  const setValuePersisted = value => {
    setValue(value);
    if (storage) {
      storage.setItem(key, value);
    }
  };
  const clearStorage = () => storage || storage.clear();

  return [value, setValuePersisted, clearStorage];
};
