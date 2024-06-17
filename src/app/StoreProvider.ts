import type React from 'react';
import { useRef } from 'react';

import { createStore, type StoreType } from '@/libs/Store';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<StoreType>();
  if (!storeRef.current) {
    storeRef.current = createStore();
  }

  return children;
}
