import Link from 'next/link'
import Image from 'next/image';

import logo from '../../../public/images/ui/logo.png';
import notification from '../../../public/images/ui/notification.png';
import profile from '../../../public/images/ui/profile.png';

export default function Header(){
    return(
        <div className='flex justify-between items-center h-16 w-full bg-gray-100 px-5 border-b border-slate-800 fixed top-0 left-0 z-40'>
            <Link className='flex justify-between items-center gap-2' href='/'>
                <Image src={logo} alt='logo' width='40' height='40'/>
                <div className='font-logo text-5xl text-gray-800'>Sneaker</div>
            </Link>
            <Link href='/auth/signin' className='flex justify-between items-center gap-2'>
                <Image src={notification} alt='Уведомление' width='25' height='25'/>
                <Image className='rounded-full' src={profile} alt='Уведомление' width='40' height='40'/>
            </Link>
        </div>
    )
}