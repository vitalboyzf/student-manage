import React from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { RouteComponentProps } from 'react-router-dom'

const Login = function (props: RouteComponentProps) {
  return (
    <div style={{
      position: "fixed",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      backgroundColor: "#fff"
    }}>
      <div style={{
        width: 300,
        height: 300,
        boxShadow: "3px 4px 2px #888",
        padding: 20,
        position: "absolute",
        backgroundColor: "#eee",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)"
      }}>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={(info) => {
            if (info.username === "张斐" && info.password === "zf") {
              localStorage.setItem("studentSystemId", (Math.random() * 10).toString(36))
              message.success("登录成功", .3);
              props.history.push("/welcome");
            }
          }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
        </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login;
