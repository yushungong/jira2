import { Button, Card, Divider, Typography } from "antd"
import React, { useState } from "react"
import Login from "./login"
import Register from "./register"
import styled from "@emotion/styled"
import logo from "asstes/logo.svg"
import left from "asstes/left.svg"
import right from "asstes/right.svg"
import { useDocumnetTitle } from "util/index"
/**
 * 用户未登录时显示组件（登录或注册）
 * @returns
 */
const useApp = () => {
  const [isRegister, setIsRegister] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  useDocumnetTitle("请登陆注册以继续")
  return (
    <Container>
      <Header />
      <Backgroud />
      <ShadowCard>
        <Title>{isRegister ? "请注册" : "请登录"}</Title>
        {error ? (
          <Typography.Text type={"danger"}>{error.message}</Typography.Text>
        ) : null}
        {isRegister ? (
          <Register onError={setError} />
        ) : (
          <Login onError={setError} />
        )}
        <Divider />
        <Button
          type={"link"}
          onClick={() => {
            setError(null)
            setIsRegister(!isRegister)
          }}
        >
          切换到{isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
        </Button>
      </ShadowCard>
    </Container>
  )
}

export default useApp

export const LongButton = styled(Button)`
  width: 100%;
`

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`

const Backgroud = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2)-3.2rem),
    calc(((100vw - 40rem) / 2)-3.2rem), cover;
  background-image: url(${left}), url(${right});
`

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 7rem;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`
