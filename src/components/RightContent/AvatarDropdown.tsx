import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { history, useModel } from '@umijs/max';
import { Button } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback, useMemo } from 'react';
import { flushSync } from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';
import { logout, redirectToSignin } from '@/utils/casdoor';
import { FormattedMessage, useIntl } from '@@/exports';

export type GlobalHeaderRightProps = {
  menu?: boolean;
  children?: React.ReactNode;
};

export const AvatarName = () => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  return <span className="anticon">{currentUser?.name}</span>;
};

export const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu, children }) => {
  const intl = useIntl();
  const { initialState, setInitialState } = useModel('@@initialState');

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        flushSync(() => {
          logout();
          setInitialState((s) => ({ ...s, currentUser: undefined }));
        });
        return;
      }
      history.push(`/account/${key}`);
    },
    [setInitialState],
  );

  const loginBtn = useMemo(
    () => (
      <Button type="primary" onClick={redirectToSignin}>
        <FormattedMessage id="component.button.login" />
      </Button>
    ),
    [],
  );

  if (!initialState) {
    return loginBtn;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser.name) {
    return loginBtn;
  }

  const menuItems = [
    ...(menu
      ? [
          {
            key: 'center',
            icon: <UserOutlined />,
            label: intl.formatMessage({
              id: 'menu.account.center',
              defaultMessage: 'account center',
            }),
          },
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: intl.formatMessage({
              id: 'menu.account.settings',
              defaultMessage: 'account settings',
            }),
          },
          {
            type: 'divider' as const,
          },
        ]
      : []),
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: intl.formatMessage({ id: 'menu.account.logout', defaultMessage: 'logout' }),
    },
  ];

  return (
    <HeaderDropdown
      menu={{
        selectedKeys: [],
        onClick: onMenuClick,
        items: menuItems,
      }}
    >
      {children}
    </HeaderDropdown>
  );
};
