import MobileDetect from 'mobile-detect';
import { setDevice } from 'redux/actions/device/deviceActions';

const setDeviceType = async (req, rootStore) => {
  const md = new MobileDetect(req.headers['user-agent']);
  setDevice(md.mobile(), rootStore.dispatch);
};

export const getInitialState = async (req, rootStore) => {
  await Promise.all([
    setDeviceType(req, rootStore),
  ]);
};
