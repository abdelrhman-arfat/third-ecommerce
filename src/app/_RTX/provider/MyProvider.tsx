"use client";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";
import Spinner from "@/app/_components/Snipper";
const MyProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = persistor.subscribe(() => {
      if (persistor.getState().bootstrapped) {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={isLoading ? <Spinner /> : null}
        persistor={persistor}
      >
        {children}
      </PersistGate>
    </Provider>
  );
};

export default MyProvider;
