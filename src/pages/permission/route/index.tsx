import React, { FC } from 'react';
import { LocaleFormatter } from 'locales';
import './index.less';

const RoutePermissionPage: FC = () => {
  return (
    <div className="permission-page">
      <p className="permission-intro">
        <LocaleFormatter id="global.tips.loginResult" />
      </p>
    </div>
  );
};

export default RoutePermissionPage;
