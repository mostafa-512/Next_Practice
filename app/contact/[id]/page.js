import style from "./page.module.css"
async function  ContactViewer  ({params}) {
  const { id } = await params;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
  const c = await data.json()
  const contact = c.find((contact)=>(
    contact.id == id
  ));


//     const contact = CONTACTS_MOCK.filter((contact)=>(
//     contact.id == id
//   ));
    return (
    <ul className={style.ul}>
      {/* {data.map((contact)=>(
        <li key={contact.id} className={style.li}>
          <div className={style.div}>

          <img src={contact.avatarUrl}/>
          <h3>{contact.firstName} {contact.lastName}</h3>
          <p>{contact.address}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.notes}</p>
          </div>
        </li>
      ))} */}
{/* 
              {data && 
              data.map((contact)=>(
        <li key={contact.id} className={style.li}>
          <div className={style.div}>

          <img src={contact.avatarUrl}/>
          <h3>{contact.firstName} {contact.lastName}</h3>
          <p>{contact.address}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.notes}</p>
          </div>
        </li>
      ))
        
} */}


              {contact && 
          
        <li key={contact.id} className={style.li}>
          <div className={style.div}>

          <img src={contact.avatarUrl}/>
          <h3>{contact.firstName} {contact.lastName}</h3>
          <p>{contact.address}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <p>{contact.notes}</p>
          </div>
        </li>
      
        
}


    </ul>
  )
}

export default ContactViewer