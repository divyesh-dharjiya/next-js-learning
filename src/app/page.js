"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
// import vercelImage from "../../public/vercel.svg";
import {Oswald} from 'next/font/google';

const roboto = Oswald({
  weight: '700',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const goToSettings = () => {
    router.push('/setting')
  }
  return (
    <main className={roboto.className}>
      <h2>Home Page</h2>
      <p>Login Content : {pathname}</p><br/>
      <Link className={`mx-10`} href="/about">Go to About Page</Link>
      <Link className='mx-10' href="/setting/profile">Profile Page</Link>
      <Link className='mx-10' href="/user">Users Page</Link>
      <Link className='mx-10' href="/contact">Contact Page</Link>
      <Link className='mx-10' href="/blogs">Blogs Page</Link>
      <button onClick={goToSettings} className="text-red-500 p-2 border-solid border-2 border-red-500">Go to Setting</button>
      {/* <Image className="mx-auto mt-10" src={vercelImage} height={500} width={500} alt="Hello"/> */}
      <Image className="mx-auto mt-10" 
      src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg" 
      width="300" height="300" sizes="50vw" alt="Hello" priority/>
    </main>
  )
}
