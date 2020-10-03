import React, { useEffect, useState } from 'react'
import { queryAllStudent, deleteStudent, IResponse } from '@/service/student'
import { IStuList } from '@/service/student'
import { RouteComponentProps } from 'react-router-dom'
import { Table, Button, Popconfirm, message } from 'antd'
import Edit from './AsyncEdit'
import Search from '@/components/AsyncSearch'
export default function List(props: RouteComponentProps) {
  const [stus, setStus] = useState<IStuList[] | null>(null);
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [forceUpdate, setForceUpdate] = useState(true);
  const [actionStu, setActionStu] = useState<IStuList>();
  useEffect(() => {
    queryAllStudent().then(res => {
      setStus(res.data)
    })
  }, [showEdit, forceUpdate])
  const columns = [
    {
      title: '学号',
      dataIndex: 'sno',
      key: 'sno',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
    },
    {
      title: '班级',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: "操作",
      key: "caozuo",
      render: (stu: IStuList) => {
        return <>
          <Button type="primary" onClick={() => {
            setActionStu(stu);
            setShowEdit(true);
          }}>修改</Button>
          <Button type={"primary"} danger>
            <Popconfirm onConfirm={async () => {
              const res: IResponse = await deleteStudent(stu.key!);
              if (res.status === 200) {
                message.success("删除成功", .3);
                setForceUpdate(!forceUpdate)
              }
            }} title="删除操作无法逆转，是否删除？"
              okText="删除"
              cancelText="返回">
              删除
            </Popconfirm>
          </Button>
        </>
      },
    }
  ];
  let dataSource;
  if (stus) {
    dataSource = stus.map(stu => {
      return {
        sno: stu.sno,
        key: stu._id,
        class: stu.class,
        name: stu.name,
        address: stu.address,
        phone: stu.phone,
        sex: stu.sex,
        email: stu.email,
        birthday: stu.birthday
      }
    })
  }

  return (
    <div style={{ padding: 5 }}>
      <Search onChangePage={(stu: IStuList[]) => {
        setStus(stu)
      }}></Search>
      {showEdit ? <Edit changeShow={() => {
        setShowEdit(false);
      }} actionStu={actionStu!} /> : null}
      <Table bordered size={"small"} dataSource={dataSource} columns={columns} />;
    </div>
  )
}
