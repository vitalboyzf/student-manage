import React from 'react';
import { withRouter, RouteComponentProps, NavLink } from 'react-router-dom'
interface IProps {
  children: React.ReactElement
}
function Auth(props: IProps & RouteComponentProps) {
  if (localStorage.getItem("studentSystemId")) {
    return (
      <>
        {props.children}
      </>
    );
  }
  else {
    return <div style={{
      fontSize: 30,
      fontWeight: "bolder",
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)"
    }}>权限不足，请先<NavLink style={{ color: "#0ff" }} to={"/login"}>登录</NavLink></div>
  }
}

export default withRouter(Auth);