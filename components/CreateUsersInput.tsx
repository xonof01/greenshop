"use client"
import { HideIcon, ShowIcon } from '@/assets/images/icon'
import { instance } from '@/hooks/instance'
import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import React, { FormEvent, SetStateAction, useState } from 'react'

interface CreateUserType {
	setIsLogin: React.Dispatch<SetStateAction<"login" | "createUser">>
}

const CreateUsersInput:React.FC<CreateUserType> = ({setIsLogin}) => {

	const [showOrHidePassword, setShowOrHidePassword] = useState<boolean>(false)

	const endContent = (
		<div>
			{showOrHidePassword ? <span className='cursor-pointer' onClick={() => setShowOrHidePassword(false)}><HideIcon /></span> : <span className='cursor-pointer' onClick={() => setShowOrHidePassword(true)}><ShowIcon/></span>}
		</div>
	)

	function handleCreateUser(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const data = {
			first_name: (e.target as HTMLFormElement).first_name.value,
			last_name: (e.target as HTMLFormElement).last_name.value,
			phone_number: (e.target as HTMLFormElement).phone_number.value,
			email: (e.target as HTMLFormElement).email.value,
			password: (e.target as HTMLFormElement).password.value
		}
		instance().post("/auth/user/sign-up", data).then(() => setIsLogin("login"))
	}
	return (
		<form onSubmit={handleCreateUser} className='space-y-[25px]' autoComplete="off">
			<Input name="first_name" required size="lg" placeholder="Enter first name" type='text' />
			<Input name="last_name" required size="lg" placeholder="Enter last name" type='text' />
			<Input name="phone_number" required size="lg" placeholder="Enter phone number" type='number' defaultValue="+998" />
			<Input name="email" required size="lg" placeholder="Enter your email" type='email' />
			<Input endContent={endContent} name='password' required size="lg" placeholder="Enter password" type={showOrHidePassword ? "text" : "password"} />
			<Button className='w-full font-semibold text-white' size="lg" color="warning" type="submit">Create User</Button>
		</form>
	)
}

export default CreateUsersInput
