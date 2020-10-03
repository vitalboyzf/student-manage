import React from 'react'
import { editStudent, IResponse } from '@/service/student'
import { CarryOutOutlined } from '@ant-design/icons'
import {
  Form,
  Input,
  Button,
  Radio,
  message
} from 'antd';
import { IStuList } from '@/service/student';
interface IProps {
  actionStu: IStuList
  changeShow: () => void
}
export default function Edit(props: IProps) {
  return (
    <div style={{
      position: "fixed",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 10,
      color: "#fff",
      backgroundColor: "rgba(0,0,0,.4)"
    }}

    >
      <div className="form" style={{
        width: 370,
        height: 500,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor: "#fff",
        padding: 20
      }}>
        <Button style={{
          position: "absolute",
          right: 20,
          top: 20
        }} icon={<CarryOutOutlined />}
          shape={"circle"}
          size={"small"}
          danger
          type={"primary"}
          onClick={(e) => {
            props.changeShow();
          }}
        />
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          size={"middle"}
          onFinish={(fieldsValue: IStuList) => {
            editStudent(props.actionStu.key!, fieldsValue).then((res: IResponse) => {
              if (res.status === 200) {
                message.success("修改成功", .3);
                props.changeShow();
              } else {
                message.error("修改失败", .3);
              }
            });
            console.log('Received values of form: ', fieldsValue);
          }}
        >
          <Form.Item label="学号"
            initialValue={props.actionStu.sno}
            name={"sno"}
          >
            <Input />
          </Form.Item>
          <Form.Item label="姓名" name={"name"} initialValue={props.actionStu.name}>
            <Input />
          </Form.Item>
          <Form.Item label="性别" name={"sex"} initialValue={props.actionStu.sex}>
            <Radio.Group>
              <Radio.Button value="男">男</Radio.Button>
              <Radio.Button value="女">女</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="手机号" name={"phone"} initialValue={props.actionStu.phone}>
            <Input />
          </Form.Item>
          <Form.Item label="住址" name={"address"} initialValue={props.actionStu.address}>
            <Input />
          </Form.Item>
          <Form.Item label="出生年"
            name={"birthday"}
            initialValue={props.actionStu.birthday}
          >
            <Input />
          </Form.Item>
          <Form.Item label="邮箱" name={"email"} initialValue={props.actionStu.email}>
            <Input />
          </Form.Item>
          <Form.Item >
            <Button style={{ marginLeft: 110 }} type="primary" htmlType="submit">
              提交
        </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
