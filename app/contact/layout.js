import MenuLink from "../components/link/page"
import Menu from "../components/menu/page"
import { CONTACTS_MOCK } from "@/Mock/contacts"
import styles from "./layout.module.css"
function contactLayout({children}) {
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

            {CONTACTS_MOCK.map((contact)=>(
                
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