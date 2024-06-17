import { useDispatch, useSelector, useStore } from 'react-redux';

import type { RootState, StoreDispatch, StoreType } from './Store';

export const useStoreDispatch = useDispatch.withTypes<StoreDispatch>();
export const useStoreSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<StoreType>();
