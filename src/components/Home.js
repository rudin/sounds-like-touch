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
        </p>

        <p>
            {'Sounds Like Touch organises the so-called '}
          <a href="/tactologylab" onClick={e => {
            e.preventDefault()
            push("/tactologylab")
          }}>Tactology Lab</a>, a 4-day structured programme that brings artists and creators together. Tactology Lab is a space to experiment with expression through tactile interaction with materials and electronics in art practices.
        </p>
        <p>
            The programme enhances the exchange between local, professional artists and designers in Utrecht, collaborating on new tangible electronic ways of expression for a live performance context. The results of our first Tactology Lab will be presented during the Gaudeamus festival in September 2021.
        </p>
        <p>
          Are you an artist or creator and interested in participating in our Tactology Labs? <a href="/tactologylab" onClick={e => {
            e.preventDefault()
            push("/tactologylab")
          }}>Read more through this link!</a>
        </p>
      </section>
      <section>
        <p>
          <h1>Who</h1>
          <a href="https://dianneverdonk.com/" rel="noreferrer noopener" target="_blank"><i>Dianne Verdonk</i></a>
          <br />
          Initiator and Lab curator
        </p>
        <p>
          {`Performer, composer and instrument developer - who seeks the ultimate, personal form of musical expression in the creation and performance of electronic/electroacoustic music.`}
        </p>
        <p><a href="https://roaldvandillewijn.nl/" rel="noreferrer noopener" target="_blank"><i>Roald van Dillewijn</i></a>
            <br />
            Lab curator
        </p>
        <p>
            {'Sound artist, creative coder, designer and lecturer, always aiming to work on a new view of designing sounds and let them interact in a fascinating way.'}
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
        <p>
            <a href="https://www.facebook.com/soundsliketouch/" rel="noreferrer noopener" target="_blank"><u>Facebook</u></a>
        </p>
        <p>
            <a href="https://www.instagram.com/soundsliketouch/" rel="noreferrer noopener" target="_blank"><u>Instagram</u></a>
        </p>
        <p>
            <a href="https://www.linkedin.com/company/sounds-like-touch" rel="noreferrer noopener" target="_blank"><u>LinkedIn</u></a>
        </p>
          <a
            href="mailto:info@soundsliketouch.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            info@soundsliketouch.com
          </a>
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
