// src/contexts/ui-context.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type Message = {
  text: string | null;
  type: 'success' | 'error';
};

type UIContextType = {
  isLoaderVisible: boolean;
  showLoader: () => void;
  hideLoader: () => void;
  message: Message;
  showMessage: (message: { text: string; type: 'success' | 'error' }) => void;
  hideMessage: () => void;
};

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isLoaderVisible, setLoaderVisible] = useState(false);
  const [message, setMessage] = useState<Message>({ text: null, type: 'success' });

  const showLoader = useCallback(() => setLoaderVisible(true), []);
  const hideLoader = useCallback(() => setLoaderVisible(false), []);

  const showMessage = useCallback(({ text, type }: { text: string; type: 'success' | 'error' }) => {
    setMessage({ text, type });
  }, []);

  const hideMessage = useCallback(() => {
    setMessage({ text: null, type: 'success' });
  }, []);

  const value = {
    isLoaderVisible,
    showLoader,
    hideLoader,
    message,
    showMessage,
    hideMessage,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
