import { combineReducers } from 'redux';
import { deviceStore } from './deviceStore/deviceStore';

export const rootReducer = combineReducers({
  deviceStore,
});
export type RootState = ReturnType<typeof rootReducer>;
