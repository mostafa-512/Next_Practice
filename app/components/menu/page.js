// import styles from './page.module.css'
function Menu({children, className,ul}) {
  return (
                    <nav className={className}>
                    <ul className={ul}>
                    {children}
                    </ul>
                </nav>
  )
}

export default Menu