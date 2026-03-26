import styles from "./page.module.css"
function Aboute() {
  return (
    <>
    <div  className={styles.about}>
      <h2>
        Aboute
      </h2>
    <div className={styles.aboutBox}>
        <p>I'm Mostafa Abdalraheem,</p> 
        <p>I 20 years old
        and I'm Front-End Developer
        </p>
        <a className={styles.a} href="tel:+201111031561" >Call Me</a>
    
    </div>
    </div>

    </>
  )
}

export default Aboute