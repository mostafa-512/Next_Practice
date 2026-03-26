"use client"
import style from "./link.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from 'react'

function MenuLink({children, href}) {
const pathName = usePathname();
    return (
        <li className={style.MenuLink}>
        <Link href={href} data-active={pathName===href}>
            {children}
        </Link>
        </li>
    )
}

export default MenuLink