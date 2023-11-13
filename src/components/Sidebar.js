import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { AppRoute } from '../routes';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<Link to={AppRoute.dashboard}>Dashboard</Link>, 'dashboard', <PieChartOutlined />),
  getItem(<Link to={AppRoute.news}>news</Link>, 'news', <DesktopOutlined />),
  getItem(<Link to={AppRoute.currency}>currency</Link>, 'currency', <ContainerOutlined />),
];
const AppSidebar = () => {
  const location = useLocation()
  useEffect(() => {
    }, [location])
  return (
      <Menu
        defaultSelectedKeys={[location.pathname.slice(1,)]}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        items={items}
      />
  );
};
export default AppSidebar;