import { useState, useEffect } from 'react';

export const UseOnline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return <h1>{isOnline ? '✅ En línea' : '❌ Desconectado'}</h1>;
}