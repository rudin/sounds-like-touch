import { h } from "preact"

const Home = () => (
  <div style={{ background: "#FFF" }}>
    <section>
      <p>
        {`Sounds Like Touch aims to develop and encourage a tangible and accessible practice of creating and performing electronic and electroacoustic music for both performer and audience.`}
      </p>
      <p>
        {`Sounds Like Touch enables the evolution of new methods, means, technologies and products for making electronic-and electroacoustic music.`}
      </p>
      <p>
        {`Sounds Like Touch is a platform and springboard for artists, makers and musicians.`}
      </p>
    </section>
    <section>
      <p>
        <h1>Who</h1>
        <i>Dianne Verdonk</i>
        <br />
        Initiator
      </p>
      <p>
        {`Performer, composer and instrument developer - who seeks the ultimate, personal form of musical expression in the creation and performance of electronic/electroacoustic music.`}
      </p>
      <p>
        <i>Rens Machielse</i>
        <br />
        Chair
      </p>
      <p>
        <i>Rob van Rijswijk</i>
        <br />
        Secretary
      </p>
      <p>
        <i>Marisa Tempel</i>
        <br />
        Treasurer
      </p>
    </section>
    <section style={{ paddingBottom: "3em" }}>
      <p>
        <h1>Contact</h1>
        Sounds Like Touch
        <br />
        Europalaan 2B - F1.19
        <br />
        Utrecht, The Netherlands
        <br />
        <a
          href="mailto:dianneverdonk@gmail.com"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          dianneverdonk@gmail.com
        </a>
        <br />
        CoC: 74526707
      </p>
    </section>
  </div>
)

export default Home
