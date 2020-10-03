import React from 'react'
import { Row, Col, Button, Popconfirm } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'
import { withRouter, RouteComponentProps } from 'react-router-dom'
const Header = function (props: RouteComponentProps) {
  return (
    <div>

      <Row justify="space-between">
        <Col>学生管理系统</Col>
        <Col>
          <span style={{
            marginRight: 10,
            color: "#f90"
          }}>超级管理员</span>
          <Popconfirm title="将要注销登录？"
            okText="确定"
            cancelText="取消"
            onConfirm={() => {
              localStorage.removeItem("studentSystemId");
              props.history.push("/login");
            }} >
            <Button
              type={"primary"}
              icon={<LogoutOutlined />} shape={"circle"}></Button>
          </Popconfirm>
        </Col>
      </Row>
    </div>
  )
}
export default withRouter(Header)