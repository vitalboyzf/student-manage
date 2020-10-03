import axios from 'axios'
import { message } from 'antd'
export interface IResponse {
  msg: string
  status: number
  data: IStuList[]
}

export interface IStuList {
  _id?: string,
  key?: string
  sno: number,
  name: string,
  address: string,
  phone: string,
  birthday: number,
  sex: "男" | "女",
  class: 1 | 2 | 3 | 4,
  email: string
}
const studentInstance = axios.create({
  baseURL: "/api/student"
})
studentInstance.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data;
  } else {
    message.success("请求失败", 1000);
  }
})
export async function queryAllStudent(): Promise<IResponse> {
  return await studentInstance.get('/');
}
export async function queryStudentByPage(page: number, limit: number): Promise<IResponse> {
  return await studentInstance.get(`/queryByPage?page=${page}&limit=${limit}`);
}
export async function queryStudentByKey(sex?: "男" | "女", key?: string): Promise<IResponse> {
  return await studentInstance.get(`/queryByKey?sex=${sex}&key=${key}`);
}
export async function addStudent(stu: IStuList): Promise<IResponse> {
  return await studentInstance.post('/', stu);
}
export async function editStudent(id: string, stu: IStuList): Promise<IResponse> {
  return await studentInstance.put('/' + id, stu);
}
export async function deleteStudent(id: string): Promise<IResponse> {
  return await studentInstance.delete('/' + id);
}