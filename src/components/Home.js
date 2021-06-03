import { h } from "preact"
import { useLocation } from "./useLocation"
import useDimensions from "react-use-dimensions"

const Home = () => {
  const { push } = useLocation()
  const [ref, { x, y, width, height }] = useDimensions()

  return (
    <div style={{ background: "#FFF" }}>
      <section>
        <p>
          {`We are Sounds Like Touch, a platform and springboard for artists and creators to experiment with physical forms and ways of interaction with technology. Together with them, we aim to develop and encourage a tangible and accessible practice of the electronic performing arts. We believe that expression through tactile electronics can amplify a personal, visible, rousing performance experience, enhancing a strong connection between performer and audience.`}
        </p>
      </section>

      <section>
        <h1>Tactology Lab</h1>
        <p>
          <i>Expression through tactile electronics</i>

        </p>
        <p>
          <div ref={ref} style={{ width: "100%", paddingBottom: "56.25%" }} />
        </p><p>

          <a href="/tactologylab" onClick={e => {
            e.preventDefault()
            push("/tactologylab")
          }}>Tactology Lab</a> is a program to experiment with physical, tactile interaction with technology. The main goal is evoking an expressive, tangible performance practice in the arts. The program enhances the exchange between local, professional artists and designers in Utrecht through multidisciplinary collaboration. The output of Tactology Lab are prototypes of physical instruments and a performance at Gaudeamus in September 2021.
        </p>
        <p>
          Are you interested in participating? <a href="/tactologylab" onClick={e => {
            e.preventDefault()
            push("/tactologylab")
          }}>Read more through this link!</a>
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
      <section>
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
        <section style={{ paddingTop: "3em", paddingBottom: "3em" }}>
          <p>
            Made possible through <br />the generous support of:<br />
            <img src="/assets/sponsors_slt.png" height="58" style={{marginTop: "1em"}}/>
          </p>
        </section>
      </section>
      <div style={{ position: "fixed", left: x, top: y, width, height, zIndex: 9876 }}>
        <iframe src="https://player.vimeo.com/video/554668833?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Tactology Lab - Sounds Like Touch"></iframe>
      </div>
    </div>
  )
}

export default Home
