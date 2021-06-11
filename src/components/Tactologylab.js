import { h } from "preact"
import { useLocation } from "./useLocation"
import useDimensions from "react-use-dimensions"

const Tactologylab = () => {
  const { push } = useLocation()

  const [ref, { x, y, width, height }] = useDimensions()

  return (
    <div style={{ background: "#FFF" }}>
      <section>
        <p>
          <i>Expression through tactile electronics</i>
        </p>
      </section>
      <section>
        <p>
          Tactology Lab is a 4-day structured workshop and performance program for artists and creators of various skills and art disciplines, organised by Sounds Like Touch. We believe that expression through tactile electronics can amplify a personal, visible, rousing performance experience, enhancing a strong connection between performer and audience. With Tactology Lab, Sounds Like Touch provides a unique learning space, basic materials and coaching by professionals. Additionally, the creative processes and the results will be shared via an online platform to provide an international stage to local makers.
        </p>
        <p>
          {/* <a href="/" onClick={e => {
            e.preventDefault()
            push("/")
          }}>Go Home</a> */}
          <div ref={ref} style={{ width: "100%", paddingBottom: "56.25%" }} />
        </p>
      </section>

      <section>
        <h1>Lab 1: Exchange</h1>
        <p>
          Tactology Lab 1 enhances the exchange between local, professional artists and designers in Utrecht through multidisciplinary collaboration. Within groups, they develop physical, tangible electronic prototypes for a live performance context. In four days, participants will work towards exposing and performing their outcomes during the Gaudeamus festival in September 2021.
        </p>
      </section>

      <section>
        <h1>Participate</h1>
        <p>
          Providing a program and space for experiments, Tactology Lab is for you if you are interested as an artist or creator in working with electronics and exploring ways to connect physical and material to the digital and electronics to advance your art practice.
        </p>
        <p>
          It doesn’t matter if you are a beginner or advanced at working with electronics or physical materials; as long as you are interested in combining these, your contribution is valuable. Our exchange of expertise will lead us to an inspiring, creative space working towards new ways of tactile expression. Want to participate? <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFvo43NYqwi1p1816kWYCq_7-T6cWH4Qmo7b8Ev8CiTnXtcg/viewform" rel="noreferrer noopener" target="_blank">Sign up here!</a>
        </p>
        </section>

      <section>
        <h1>Programme</h1>
        <p>
            Since this is a group project, it is important to be available at all of the Lab Days! All locations are in Utrecht, The Netherlands.
        </p>
        <p>
          <ul>
            <li><i>Day 1: invent </i> &nbsp; &nbsp; <b>1 July</b> &nbsp;&nbsp; morning + afternoon</li>
            <li><i>Day 2: build </i> &nbsp; &nbsp; <b>10 July</b> &nbsp;&nbsp; morning + afternoon</li>
            <li><i>Day 3: interact </i> &nbsp;<b>11 July</b> &nbsp;&nbsp; morning + afternoon</li>
            <li><i>Day 4: expose </i> &nbsp;&nbsp; <b>26 August</b>&nbsp; morning + afternoon</li>
          </ul>
        </p>
        <p>
          <ul>
            <li>Presentation outcome at Gaudeamus festival: <b>11 and 12 September</b></li>
          </ul>
        </p>
      </section>

      <section>
        <h1>What you get</h1>
        <p>
          <ul>
            <li>Full 4-day programme, curated by performer and instrument designer Dianne Verdonk and creative software designer and sound artist Roald van Dillewijn</li>
            <li>Presenting the outcomes of our creative process at Gaudeamus festival</li>
            <li>Knowledge and experience combining electronics with physical materials</li>
            <li>A local network of creators</li>
            <li>Scenographic/dramaturgic expertise and coaching by professionals</li>
            <li>A Teensy USB development board 3.2 or 4.0</li>
            <li>Additional sensors and boards are available at extra cost</li>
          </ul>
        </p>
      </section>


      <section>
        <h1>What you pay</h1>
        <p>
          <ul>
            <li>Regular price: €150,-</li>
            <li>Student price: €120,-</li>
          </ul>
        </p>
      </section>

      <section>
        <h1>Sign up</h1>
        <p>
          Want to participate? <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFvo43NYqwi1p1816kWYCq_7-T6cWH4Qmo7b8Ev8CiTnXtcg/viewform" rel="noreferrer noopener" target="_blank">Sign up here!</a>
        </p>
      </section>

      <section>
        <h1>Contact</h1>
        <p>
          For any questions, please contact <a href="https://dianneverdonk.com/contact/" rel="noreferrer noopener" target="_blank">Sounds Like Touch</a>
        </p>
      </section>

      <section style={{ paddingTop: "3em", paddingBottom: "3em" }}>
          <p>
            Made possible through <br />the generous support of:<br />
            <img src="/assets/sponsors_tl.png" height="58" style={{marginTop: "1em"}}/>
          </p>
        </section>

      <div style={{ position: "fixed", left: x, top: y, width, height, zIndex: 9876 }}>
        <iframe src="https://player.vimeo.com/video/554668833?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Tactology Lab - Sounds Like Touch"></iframe>
      </div>
    </div>
  )
}

export default Tactologylab
