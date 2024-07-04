import styles from './Sobre.module.css'

function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Ana Clara Nunes</span> <br />
                    <strong>Atriz e faço programa de computador</strong> </p>

                    <p>Trabalho com artes cênicas desde que eu me entendo por gente.</p>

                    <p>Sou apaixonada por transformar papel em fogo.</p>

                    <p>Fico muito orgulhosa em testemunhar o meu drt.</p>
                </div>
            </div>
        </section>
    )
}

export default Sobre

