"use client";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import React, { ReactNode, SetStateAction } from "react";

interface ModalType {
	children: ReactNode,
	isOpen: boolean,
	onOpenChange: React.Dispatch<SetStateAction<boolean>>,
	isLogin: "login" | "createUser",
	setIsLogin: React.Dispatch<SetStateAction<"login" | "createUser">>
}

const CustomModal: React.FC<ModalType> = ({ isLogin, setIsLogin, children, isOpen, onOpenChange }) => {
	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					<ModalHeader className="flex items-center justify-center gap-5 ">
						<p onClick={() => setIsLogin("login")} className={`${isLogin == "login" ? "text-purple-900" : ""} text-[20px] cursor-pointer`}>Login</p>
						<p onClick={() => setIsLogin("createUser")} className={`${isLogin == "createUser" ? "text-purple-900" : ""} text-[20px] cursor-pointer`}>Create User</p>
					</ModalHeader>
					<ModalBody>{children}</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
};

export default CustomModal;