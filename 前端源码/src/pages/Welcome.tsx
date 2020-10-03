import React from 'react'

export default function Welcome() {
  return (
    <div style={{
      borderRightColor: "#eee",
      position: "relative",
      height: "100%"
    }}>
      <h1 style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        fontWeight: "bold",
        fontSize: 35,
        textShadow: "2px 2px 4px #888",
        userSelect: "none",
        transform: "translate(-50%,-50%)"
      }}>欢迎使用学生管理系统</h1>
    </div>
  )
}
