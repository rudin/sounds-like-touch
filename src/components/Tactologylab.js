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
          Tactology Lab is a 6-day structured workshop and performance programme for artists and creators of various skills and art disciplines, organised by Sounds Like Touch. We believe that expression through tactile electronics can amplify a personal, visible, rousing performance experience, enhancing a strong connection between performer and audience. With Tactology Lab, Sounds Like Touch provides a unique learning space, basic materials and coaching by professionals. Additionally, the creative processes and the results will be shared via an online platform to provide an international stage to local makers.
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
        <h1>Lab 2: Perform</h1>
        <p>
          Tactology Lab 2 invites local, professional artists and designers to work on their design and performance skills through multidisciplinary collaboration. Within groups, they develop physical, tangible electronic prototypes for a live performance context, which will be performed live at the Rewire festival 2022 in The Hague. Coached by experts, participants will work towards this performance within five separate workshop days before playing at Rewire.
        </p>
        <p>
          You can sign up for Tactology Lab 2 if you’re a professional artist or creator - there’s no need to have participated in Lab 1. The programme of Lab 2 focuses primarily on working towards this performance, whereas Lab 1 mainly resulted in exposing the results. 
        </p>
      </section>

      <section>
        <h1>Participate</h1>
        <p>
          Providing a programme and space for experiments, Tactology Lab is for you if you are interested as an artist or creator in working with electronics and exploring ways to connect physical and material to the digital and electronics to advance your art practice. If you want to learn how to improve your performance by exploring your personal expression through interaction with electronic tools, definitely sign up for Lab 2!
        </p>
        <p>
          It doesn’t matter if you are a beginner or advanced at working with electronics or physical materials; as long as you are interested in combining these, your contribution is valuable. Our exchange of expertise will lead us to an inspiring, creative space working towards new ways of tactile expression. Want to participate? <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFvo43NYqwi1p1816kWYCq_7-T6cWH4Qmo7b8Ev8CiTnXtcg/viewform" rel="noreferrer noopener" target="_blank">Fill in this form to sign up!</a>
        </p>
        <p>
          We care about a well balanced group of participants, aiming to bring together diverse makers with different skill levels and backgrounds. Therefore, the final selection of the program will be made by our Lab-makers/curators via a short, informal conversation with you via Zoom or in real life - if possible. 
        </p>
      </section>

      <section>
        <h1>Programme Tactology Lab 2: Perform</h1>
        <p>
            Since this is a group project, it is important to be available at all of the Lab Days! All locations are in Utrecht and in The Hague, The Netherlands.
        </p>
        <p>
          <ul>
            <li><i>Day 1: inspire </i> &nbsp; &nbsp; <b>7 March*</b> &nbsp;&nbsp; morning + afternoon</li>
            <li><i>Day 2: prototype </i> &nbsp;<b>19 March*</b> &nbsp;&nbsp; morning + afternoon</li>
            <li><i>Day 3: construct </i> &nbsp;<b>20 March*</b> &nbsp;&nbsp; morning + afternoon</li>
            <li><i>Day 4: express </i> &nbsp;&nbsp; <b>27 March*</b>&nbsp; &nbsp; morning + afternoon</li>
            <li><i>Day 5: embed </i> &nbsp;&nbsp; &nbsp;&nbsp; <b>1 April*</b>&nbsp; morning + afternoon</li>
            <li><i>Day 6: perform </i> <b>7-10 April*</b>&nbsp;&nbsp; one of these days</li>
          </ul>
        </p>
        <p>
            *note: dates are with reservation and will be confirmed ASAP
        </p>
      </section>

      <section>
        <h1>What you get</h1>
        <p>
          <ul>
            <li>Full 6-day programme, curated by performer and instrument designer&nbsp;
              <a href="https://dianneverdonk.com/" rel="noreferrer noopener" target="_blank">Dianne Verdonk</a>
             &nbsp;and creative software designer and sound artist&nbsp;
              <a href="https://roaldvandillewijn.nl/" rel="noreferrer noopener" target="_blank">Roald van Dillewijn</a></li>
            <li>Performance coaching and stage presence by theatre director Ramses Graus (Het Filiaal, Utrecht)</li>
            <li>Perform the outcomes of our creative process, live at Rewire festival</li>
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
            <li>€150,-</li>
          </ul>
        </p>
      </section>

      <section>
        <h1>Sign up</h1>
        <p>
          Want to participate in future Tactology Labs? <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFvo43NYqwi1p1816kWYCq_7-T6cWH4Qmo7b8Ev8CiTnXtcg/viewform" rel="noreferrer noopener" target="_blank">Sign up here!</a>
        </p>
      </section>

      <section>
        <h1>Contact</h1>
        <p>
          For any questions, please contact <a
            href="mailto:info@soundsliketouch.com"
            style={{ color: "inherit"}}
          >Sounds Like Touch
          </a>
        </p>
      </section>

      <section style={{ paddingTop: "3em", paddingBottom: "3em" }}>
          <p>
            Made possible through <br />the generous support of:<br />
            <img src="/assets/sponsors_tl.png" height="58" style={{marginTop: "1em"}}/>
          </p>
        </section>

      <div style={{ position: "fixed", left: x, top: y, width, height, zIndex: 9876 }}>
        <iframe src="https://player.vimeo.com/video/650420967?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Tactology Lab - Sounds Like Touch"></iframe>
      </div>
    </div>
  )
}

export default Tactologylab
