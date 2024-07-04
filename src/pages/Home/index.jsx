import { Link } from 'react-router-dom'
import cafe from '../../assets/undraw_coffee_time_e8cw.svg'
import styles from './Home.module.css'


function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou <br />
            <span>Ana Clara Nunes</span> <br />
            Atriz
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
            Saiba mais sobre mim
          </Link>
        </div>
        <figure>
          <img className={styles.img_home} src={cafe} alt="Imagem de Home" />
        </figure>
      </section>
    </>
  )
}

export default Home
