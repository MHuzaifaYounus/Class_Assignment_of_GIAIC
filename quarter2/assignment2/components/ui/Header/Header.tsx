"use client"
import Link from "next/link"
import { paytoneOne } from '@/app/fonts/fonts'
import style from './header.module.css'
import { MenuIcon } from 'lucide-react'
import { useEffect, useState } from "react"
export default function Header() {
    const [isNavbar, setIsNavbar] = useState<boolean>(true)

    function ShowNavBarHandler() {
        setIsNavbar(!isNavbar)  
    }
    useEffect(() => {
        if (screen.width <= 850) {
            setIsNavbar(false)
        }
    }, [])
    return <div className={style.header}>
        <div className={`${style.logo} ${paytoneOne.className}`}><span>Task</span>Flow.</div>
        <div className={`${style.navbar} ${paytoneOne.className}`}>
            <MenuIcon className={style.menuicon} onClick={ShowNavBarHandler}></MenuIcon>
            {isNavbar && <ul className="innerNav" style={{display:isNavbar ? "flex" : "none"}}>
                <li><Link href={"#home"}>Home</Link></li>
                <li><Link href={"#features"}>Features</Link></li>
                <li><Link href={"#contact"}>Contact</Link></li>
                <li><Link href={"#newsletter"}>Newsletter</Link></li>
            </ul>
            }
        </div>
    </div>
}