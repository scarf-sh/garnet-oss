import { i18n } from 'src/i18n';
import React from 'react';
import config from 'src/config';

import {
  ProjectOutlined,
  UnlockOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';


export default [
  {
    path: '/projects',
    permissionRequired: null,
    icon: <ProjectOutlined />,
    label: i18n('entities.projects.menu'),
  },
  {
    path: '/configurations',
    permissionRequired: null,
    icon: <UnlockOutlined />,
    label: i18n('entities.configurations.menu'),
  },
  {
    path: '/audit-logs',
    icon: <FileSearchOutlined />,
    label: i18n('auditLog.menu'),
    permissionRequired: null,
  },
].filter(Boolean);
