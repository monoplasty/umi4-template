import { Settings as LayoutSettings } from '@ant-design/pro-layout';

type settingType = {
  pwa?: boolean;
  logo?: string;
  locale?: boolean;
};

const Settings: LayoutSettings & settingType = {
  title: 'umi4-template',
  locale: false,
  primaryColor: '#1890ff',
  layout: 'top',
  navTheme: 'dark',
  contentWidth: 'Fixed',
  fixedHeader: true,
  pwa: false,
  logo: '/main-logo.png',
  footerRender: false,
  menuRender: false,
};

export default Settings;
