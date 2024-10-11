import Link from "next/link"
import {paytoneOne} from '@/app/fonts/fonts'
import style from './header.module.css'

export default function Header() {
    return <div className={style.header}>
        <div className={`${style.logo} ${paytoneOne.className}`}><span>Task</span>Flow.</div>
        <div className={`${style.navbar} ${paytoneOne.className}`}>
            <ul>
                <li><Link href={"#home"}>Home</Link></li>
                <li><Link href={"#features"}>Features</Link></li>
                <li><Link href={"#contact"}>Contact</Link></li>
                <li><Link href={"#newsletter"}>Newsletter</Link></li>
            </ul>
        </div>
    </div>
}