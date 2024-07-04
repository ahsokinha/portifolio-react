import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>

            <section className={styles.contatos}>
                <h2>Contatos</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre</p>

                <div className={styles.icones}>

                    <a href='mailto:22202579@aluno.cotemig.com.br' target='_blank' rel='noopener noreferrer'>
                        <GoMail className={styles.icone} />
                    </a>

                    <a href='https://github.com/ahsokinha' target='_blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.icone} />
                    </a>

                    <a href='https://br.linkedin.com/in/ana-clara-nunes-de-pardo-3b3a80265' target='_blank' rel='noopener noreferrer'>
                        <BsLinkedin className={styles.icone} />
                    </a>

                </div>

            </section>
        </>
    )
}

export default Contatos
