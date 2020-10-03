import React from 'react';
import { NavLink, Redirect } from 'umi';
import { Layout, Menu } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import HeaderLayout from '@/components/Header'
const LayoutCom = function (props: any) {
  return (
    <>
      <Layout>
        <Header >
          <HeaderLayout></HeaderLayout>
        </Header>
        <Layout>
          <Sider >
            <Menu theme="dark" mode="vertical" style={{ textAlign: 'center' }}>
              <Menu.Item >
                <NavLink to={'/welcome'}>欢迎</NavLink>
              </Menu.Item>
              <Menu.Item >
                <NavLink to={'/student/list'}>学生列表</NavLink>
              </Menu.Item>
              <Menu.Item >
                <NavLink to={'/student/add'}>添加学生</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            {props.children}</Content>
        </Layout>
        <Footer>页脚</Footer>
      </Layout>
    </>
  );
}
export default LayoutCom;