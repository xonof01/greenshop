"use client"
import { HideIcon, ShowIcon } from '@/assets/images/icon'
import { Context } from '@/context/Context'
import { instance } from '@/hooks/instance'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import React, { FormEvent, useContext, useState } from 'react'

interface LoginType {
	onClose: () => any
}

const LoginInputs:React.FC<LoginType> = ({onClose}) => {
	const {setAccessToken} = useContext(Context)

	const [showOrHidePassword, setShowOrHidePassword] = useState<boolean>(false)

	const endContent = (
		<div>
			{showOrHidePassword ? <span className='cursor-pointer' onClick={() => setShowOrHidePassword(false)}><HideIcon /></span> : <span className='cursor-pointer' onClick={() => setShowOrHidePassword(true)}><ShowIcon /></span>}
		</div>
	)

	function handleLogin(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const data = {
			phone_number: (e.target as HTMLFormElement).phone_number.value,
			password: (e.target as HTMLFormElement).password.value
		}
		instance().post("/auth/sign-in", data).then(res => {
			setAccessToken(res.data.data.tokens.access_token)
			onClose()
		})
	}
	return (
		<form onSubmit={handleLogin} className='space-y-[25px]' autoComplete="off">
			<Input name="phone_number" required size="lg" placeholder="Enter phone number" type='number' defaultValue="+998" />
			<Input endContent={endContent} name='password' required size="lg" placeholder="Enter password" type={showOrHidePassword ? "text" : "password"} />
			<Button className='w-full font-semibold text-white' size="lg" color="warning" type="submit">Login</Button>
		</form>
	)
}

export default LoginInputs