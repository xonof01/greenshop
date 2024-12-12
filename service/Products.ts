"use client"
import { instance } from "@/hooks/instance"
import { useEffect, useState } from "react"

export interface ProductsType {
	id: number,
	createdAt?: string,
	lastUpdateAt?: string, 
	name: string,
	price: string,
	rate?: null,
	images: string[],
	brand_id?: number
}

export const Products = () => {
	const [data, setData] = useState<ProductsType[]>([])
	useEffect(() => {
		instance().get("products/search").then(res => {
			setData(res.data.data.products)
		})
	}, [])
	return data
}