import { mock, interceptor } from '../config';
import { LoginResult, Role } from 'interface/user/login';

mock.mock('/user/login', 'post', (config: any) => {
  const body: LoginResult = JSON.parse(config?.body);
  return interceptor<LoginResult>({
    token: '123abc',
    username: body?.username,
    role: body?.username as Role
  });
});
