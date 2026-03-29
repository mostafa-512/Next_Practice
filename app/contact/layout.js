import MenuLink from "../components/link/page"
import Menu from "../components/menu/page"
import styles from "./layout.module.css"
async function contactLayout({children}) {


    const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`)
    const contact = await data.json()
    // console.log(contact)
  return (
    <div className={styles.Layout}>
        <aside className={styles.Sidebar}>
            <h4 className={styles.Subtitle}>
                Links
            </h4>

                    <Menu className={styles.Menu}>
                            <MenuLink href={"/contact/birthdays"}>Birthdays</MenuLink>

                    </Menu>

        <h4 className={styles.Subtitle}>Links</h4>
        <Menu className={styles.Menu} ul={styles.list}>

            {contact.map((contact)=>(
                
                <MenuLink key={contact.id} href={`/contact/${contact.id}`}>
                <div className={styles.div}>
                <img src={contact.avatarUrl} width={"50"} height={"50"}/>
                <p>{contact.firstName} {contact.lastName}</p>
                </div>
            </MenuLink>
            ))}

        </Menu>

        </aside>
        {children}
    </div>
  )
}

export default contactLayout