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
          {`We are Sounds Like Touch, a platform and springboard for artists and creators to experiment with new physical ways of interaction with technology. Together, we aim to develop and encourage a tangible and accessible practice of the electronic performing arts. We believe that expression through tactile electronics can amplify a personal, visible, rousing performance experience, enhancing a strong connection between performer and audience.`}
        </p>
      </section>

      <section>
          <h1>NIME 2023 Meetup</h1>
            <p>
              <i> at SLT Makerspace, Hof van Cartesius </i>
              {You might have heard of the International Conference on New Interfaces for Musical Expression (NIME). The conference gathers researchers and musicians from all over the world to share their knowledge and late-breaking work on new musical interface design.
This years’ edition will be held in Mexico City from May 31 till June 2nd. To join this conference from Utrecht, SLT is hosting a ‘hub’ meetup with drinks and tunes. For everyone who loves to geek out on electronic music and interaction and is curious about NIME, but can’t travel all the way to Mexico.
You are welcome on May 31st at our Makerspace at Hof van Cartesius from 20:00 on. Dianne Verdonk (SLT), Martijn Buser (Gaudeamus festival) and Hans Leeuw (HKU Music and Technology) will give a short intro for those of you who are new to NIME and we’ll be watching some (live) performances. And for those who are interested in being part of next year’s conference, we’ll share the ways you can participate in the conference!'}
           
       <br/>
             The meetup is free, but we appreciate it if you let us know if you’re joining by filling in 
             <a href="https://forms.gle/BvyxA8StuXJ7ZMv67" rel="noreferrer noopener" target="_blank">this form</a>`}
         </p>
             </section>
   
      <section>
 
              <h2>Info</h2>    
           <p>
               Date and time: 31st of May from 20:00 (doors open at 19:30) till 22:00
                <br />
                  Location: SLT Makerspace at Hof van Cartesius, Vlampijpstraat 94, 3534 AR Utrecht
                <br />
                  Free entrance! Drinks are on donation (cash or Tikkie, no pin)
</p>
<p>
                  Come by bike or public transport! The Makerspace is next to train/bus station Utrecht Zuilen. There is free parking in the area.
</p>
</section>

<section>
    
<h2>Accessibility</h2>    
        <p>
               Language: English / Dutch
                <br />
                  Venue: The makerspace is on the first floor, only accessible by stairs. Please let us know if you are planning to join but the venue is inaccessible for you. Then we can try to make other arrangements.
                <br />
                  Also let us know if you need other things in terms of accessibility.
</p>
</section>
              
      <section>
        <a href="/tactologylab" onClick={e => {
            e.preventDefault()
            push("/tactologylab")
          }}><h1>Tactology Lab</h1></a>
        <p>
          <i>Expression through tactile electronics</i>

        </p>
        <p>
          <div ref={ref} style={{ width: "100%", paddingBottom: "56.25%" }} />
        </p>

        <p>
            Sounds Like Touch organises the so-called
          <a href="/tactologylab" onClick={e => {
            e.preventDefault()
            push("/tactologylab")
          }}>Tactology Lab</a>, a multiple-day structured programme that brings artists and creators together to explore new ways of (tactile) interaction with electronics. 

        </p>
        <p>
            The programme enhances the exchange between local, professional artists and designers in Utrecht, collaborating on new tangible electronic ways of expression for a live performance context. The results of our first Tactology Lab 1: Exchange, were presented during the Gaudeamus festival in September 2021. Participants of Lab 2: Perform, will perform live at the Rewire festival in April 2022.
        </p>
        <p>
          Are you an artist or creator and interested in participating in our Tactology Labs? <a href="/tactologylab" onClick={e => {
            e.preventDefault()
            push("/tactologylab")
          }}>Read more through this link!</a>
</p>
      </section>




      <section>
          <h1>Who</h1>
          <a href="https://dianneverdonk.com/" rel="noreferrer noopener" target="_blank"><i>Dianne Verdonk</i></a>

          Initiator and Lab curator
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
        <p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdj-BOJRilznSnU8nE7mTf2YpiVqK9cc6FabAH_R1-DiKQ61w/viewform" rel="noreferrer noopener" target="_blank"><u>Newsletter</u></a>
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
        <iframe src="https://player.vimeo.com/video/650420967?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Tactology Lab - Sounds Like Touch"></iframe>
      </div>
    </div>
  )
}

export default Home
