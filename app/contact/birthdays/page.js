import {CONTACTS_MOCK} from "@/Mock/contacts"
import MenuLink from '@/app/components/link/page';
import style from "./page.module.css"
async function Birthdays({searchParams}) {
  
  const favorite = (await searchParams).favorite === "true";
  const data = CONTACTS_MOCK.filter((contact) => favorite ? contact.favorite === favorite : true);
  return (
    <main className={style.main}>

    <h2>Birthdays</h2>
    
    <ul className={style.ul}>
      {data.map((contact)=>(
        <MenuLink href={`/contact/${contact.id}`}>
         <li key={contact.id} className={style.li}>
          <div className={style.div}>

          <img src={contact.avatarUrl} width={"100"} height={"100"}/>
          <h3>{contact.firstName} {contact.lastName}</h3>
          <p>{contact.dateOfBirth}</p>
          </div>
        </li>
       </MenuLink>
      ))}
    </ul>
    
    
    
    
    
    
    
    
    </main>
  )
}

export default Birthdays