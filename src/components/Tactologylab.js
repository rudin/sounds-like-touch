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
        <h1>Participate</h1>
        <p>
          Providing a program and space for experiments, Tactology Lab is for you if you are interested as an artist/designer in working with electronics and exploring ways to connect physical/material to digital/electronic to advance your art practice.
        </p>
        <p>
          If you're an artist who's willing to work with electronics, but are still a beginner, this program is perfect for you. If you consider yourself a pure performer who's interested in experimenting with physical, interactive objects to improve your personal expression, we invite you to participate. If you're already a software and hardware geek but looking for the interaction that suits you, we encourage you to sign up!
        </p>
        <p>
          Our exchange of expertise will lead us to a perfect learning space, showing the results of our experiments during the Gaudeamus festival in September 2021.
        </p>
      </section>

      <section>
        <h1>Sign up</h1>
        <p>
          Want to participate? <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFvo43NYqwi1p1816kWYCq_7-T6cWH4Qmo7b8Ev8CiTnXtcg/viewform" rel="noreferrer noopener" target="_blank">Sign up here!</a>
        </p>
      </section>

      <section>
        <h1>Dates</h1>
        <p>
          <ul>
            <li>24/6: Kick Off lecture &nbsp; performance LAB 1</li>
            <li>01/7: Day 1</li>
            <li>11/7: Day 2</li>
            <li>12/7: Day 3</li>
            <li>26/8 – 28/8 (TBA): Day 4</li>
            <li>08/9 – 12/9: performance(s) and expo at Gaudeamus festival</li>
          </ul>
        </p>
      </section>

      <section>
        <h1>Location</h1>
        <p>
          Utrecht, The Netherlands<br />
          Various lab spaces in Utrecht – TBA
        </p>
      </section>

      <section>
        <h1>What you get</h1>
        <p>
          <ul>
            <li>Full 4-day program, curated by Dianne Verdonk and Roald van Dillewijn</li>
            <li>Performance/expo at Gaudeamus festival 2021</li>
            <li>Knowledge and experience combining electronics with physical materials</li>
            <li>Local/regional network of makers</li>
            <li>Scenographic/dramaturgic expertise and coaching by professionals</li>
            <li>Teensy 3.2/4.0</li>
            <li>Sensors and Teensy Audio board at extra cost if needed for your project</li>
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
          For any questions, please contact <a href="https://dianneverdonk.com/contact/" rel="noreferrer noopener" target="_blank">Dianne Verdonk</a>
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
