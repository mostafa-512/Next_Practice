"use client"
import style from "./link.module.css"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import React from 'react'

function MenuLink({children, href}) {
const pathName = usePathname();
const searchParams = useSearchParams();
const pathNameWithSearchParams = searchParams.toString() ? `${pathName}?${searchParams}`:pathName;
    return (
        <li className={style.MenuLink}>
        <Link href={href} data-active={pathNameWithSearchParams===href}>
            {children}
        </Link>
        </li>
    )
}

export default MenuLink