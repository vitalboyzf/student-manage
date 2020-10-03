import React from 'react';

import { addStudent, IResponse } from '@/service/student'
import { RouteComponentProps } from 'react-router-dom'
import {
  Form,
  Input,
  Button,
  Radio,
  message
} from 'antd';

export default function Add(props: RouteComponentProps) {
  return (
    <div>
      <div className="form" style={{
        width: 400,
        height: 500,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor: "#fff",
        padding: 20,
        boxShadow: "3px 4px 4px #888",
        fontWeight: "bold"
      }}>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size={"middle"}
          onFinishFailed={(info: any) => {
            message.success("请输入完整信息", .3);
          }}
          onFinish={(stu) => {
            addStudent(stu).then((res: IResponse) => {
              if (res.status === 200) {
                message.success("添加成功", .3);
                props.history.push("/student/list")
              }
            });
          }}
        >
          <Form.Item label="学号"
            name={"sno"}
            rules={[{ required: true, message: '请输入学号' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="姓名" name={"name"}
            rules={[{ required: true, message: '请输入姓名' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="性别" name={"sex"}
            rules={[{ required: true, message: '请选择性别' }]}
          >
            <Radio.Group>
              <Radio.Button value="男">男</Radio.Button>
              <Radio.Button value="女">女</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="手机号" name={"phone"}
            rules={[{ required: true, message: '请输入手机号' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="班级" name={"class"}
            rules={[{ required: true, message: '请输入班级' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="住址" name={"address"}
            rules={[{ required: true, message: '请输入住址' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="出生年"
            name={"birthday"}
            rules={[{ required: true, message: '请输入出生年' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="邮箱" name={"email"}
            rules={[{ required: true, message: '请输入邮箱' }]}>
            <Input />
          </Form.Item>
          <Form.Item >
            <Button style={{
              marginLeft: 110,
            }}
              type={"primary"}
              htmlType="submit">
              添加
        </Button>
          </Form.Item>
        </Form>
      </div>
    </div >
  )
}

