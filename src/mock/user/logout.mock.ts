import { mock, interceptor } from '../config';

mock.mock('/user/logout', 'post', interceptor(null));
