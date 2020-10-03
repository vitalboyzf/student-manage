import React from 'react'
import { Button, Radio, Form, Input, message } from 'antd'
import { IResponse, IStuList, queryStudentByKey } from '@/service/student'
interface IProps {
  onChangePage: (stu: IStuList[]) => void;
}
export default function Search(props: IProps) {
  return (
    <div style={{
      margin: "5px 20px"
    }}>
      <Form layout={"inline"}
        onFinish={(condition) => {
          if (!condition.name) {
            condition.name = "";
          }
          if (!condition.sex) {
            condition.sex = "";
          }
          queryStudentByKey(condition.sex, condition.name).then((res: IResponse) => {
            if (res.status === 200) {
              props.onChangePage(res.data);
              message.success("查询成功", .3);
            }
          })
        }}
      >
        <Form.Item label="学生姓名" name="name">
          <Input></Input>
        </Form.Item>
        <Form.Item label="性别" name="sex">
          <Radio.Group >
            <Radio name={"sex"} value="男">男</Radio>
            <Radio name={"sex"} value="女">女</Radio>
            <Radio name={"sex"} value="">全选</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button htmlType={"submit"}>搜索</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
