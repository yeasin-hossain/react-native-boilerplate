import {useSelector} from 'react-redux';
import {RootState} from '../store';

const useGetAuthData = () => useSelector((state: RootState) => state.auth);

export default useGetAuthData;
