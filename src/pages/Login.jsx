import React from 'react'
import { Heading } from '../components/Heading'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'

export const Login = () => {
  return (
    <div className="bg-light-blue h-screen flex items-center justify-center">
    <div className="bg-white px-16 py-5 rounded-xl flex flex-col items-center gap-2.5">
      <Heading text={'Login'} />
      <form action="">
        <div className="flex flex-col gap-5 items-center">
     
          <Input type={'email'} placeholder={'Email'} />
          <Input type={'password'} placeholder={'Password'} />
        </div>
        <div className='mt-4'>
        <Button text={'Login'} />
        </div>
      </form>
      <BottomWarning label={`Don't have account?`} action={'Register'} />
    </div>
  </div>
  )
}
