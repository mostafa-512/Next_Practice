import Link from "next/link";
import MenuLink from '@/app/components/link/page';
import style from "./page.module.css"
import Menu from "@/app/components/menu/page";


async function Birthdays({searchParams}) {

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
    const contacts = await data.json()

  const favorite = (await searchParams).favorite === "true";
  const c = contacts.filter((contact) => favorite ? contact.favorite === favorite : true);
  return (
    <main className={style.main}> 

    <h2>Birthdays</h2>
    <Menu>
    <MenuLink href={"/contact/birthdays?favorite=false"}>All</MenuLink>
    <MenuLink href={"/contact/birthdays?favorite=true"}>Only Favorite</MenuLink>
    </Menu>


    <ul className={style.ul}>
      {c.map((contact)=>(
        <Link key={contact.id} href={`/contact/${contact.id}`}>
         <li key={contact.id} className={style.li}>
          <div className={style.div}>

          <img src={contact.avatarUrl} width={"100"} height={"100"}/>
          <h3>{contact.firstName} {contact.lastName}</h3>
          <p>{contact.dateOfBirth}</p>
          </div>
        </li>
       </Link>
      ))}
    </ul>
    
    
    
    
    
    
    
    
    </main>
  )
}

export default Birthdays