// import { redirect } from "next/navigation";
import style from './page.module.css'
export default function Home() {
  // redirect("/about")
  return (
    <>
    <div className={style.h}>

    <h1>
      Hi, Welcome in my Website
    </h1>
    </div>
    </>

  );
}
