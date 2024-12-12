"use client"
import { instance } from "@/hooks/instance"
import { useEffect, useState } from "react"

interface CategoryType {
	id: number, 
	name: string,
	createdAt?: string,
	lastUpdateAt?: string
}

export const Categories = () => {
	const [categoryList, setCategoryList] = useState<CategoryType[]>([])
	useEffect(() => {
		instance().get("/category/search").then(res => {
			setCategoryList(res.data.data.categories.map((item:CategoryType) => ({id: item.id, name: item.name})))
		})
	}, [])
	return categoryList
}