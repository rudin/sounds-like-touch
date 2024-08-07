import { h } from "preact";
import { useLocation } from "./useLocation";
import useDimensions from "react-use-dimensions";

const Home = () => {
  const { push } = useLocation();
  const [ref, { x, y, width, height }] = useDimensions();

  return (
    <div style={{ background: "#FFF" }}>
      <section>
        <p>
          We are Sounds Like Touch, a springboard for artists, designers and creators who like to make (literally) touching, electronic, performative arts by using their body for interaction. To be able to do this, many different expertises are needed. That is why Sounds Like Touch connects makers with different skill sets for collaboration and exchange of knowledge. 
          <br />
          <br />
          -------------------------------------------------------------
        </p>
      </section>

      <section>
        <h1>Program</h1>
        <p>
        /* <a
          href="/tactologylab"
          onClick={(e) => {
            e.preventDefault();
            push("/tactologylab");
          }}
        > */
          <h3> <i> Tactology Lab </i> </h3>
       // </a>
          <p>
          Since 2021 we organize the so-called Tactology Lab, a multiple-day structured program that bringst artists and creators together to explore new ways of (tactile) interaction with electronics.
          </p>
          <p>
          <div ref={ref} style={{ width: "100%", paddingBottom: "56.25%" }} />
          </p>
          <p>
          The program fosters the exchange between (local) professional artists and designers, collaborating on new tangible electronic ways of expression for a performance context: either live on stage or in an exhibition setting. 
          </p>
          <p>
          The results of Tactology Lab 1: ‘Exchange’ were presented during Gaudeamus festival in 2021 and the results of Lab 2: ‘Perform’ during Rewire festival 2022. The next Tactology Lab is expected in the first half of 2025.
          </p>
          <p>
            Are you an artist or creator and interested in participating in our
          Tactology Labs?{" "}
          <a
            href="/tactologylab"
            onClick={(e) => {
              e.preventDefault();
              push("/tactologylab");
            }}
          >
            Read more about the program here!
          </a>
              </p>
          <h3> <i> Meetups </i> </h3>
          <p>
          We host meetups in the form of artist talks, workshops, brainstorm sessions and tryouts in our Makerspace. These meetups are a place for artists, designers and cultural workers to exchange ideas, knowledge and inspiration.
          </p>
        </p>
      </section>
<br />
      <section>
        <h1>Who</h1>
        <a
          href="https://dianneverdonk.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <i>Dianne Verdonk</i>
        </a>
        <br />
        Initiator and Lab curator
        <p>
          {`Performer, composer and instrument developer - who seeks the ultimate, personal form of musical expression in the creation and performance of electronic/electroacoustic music.`}
        </p>
        <p>
          <a
            href="https://roaldvandillewijn.nl/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i>Roald van Dillewijn</i>
          </a>
          <br />
          Lab curator
        </p>
        <p>
          {
            "Sound artist, creative coder, designer and lecturer, always aiming to work on a new view of designing sounds and let them interact in a fascinating way."
          }
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
          <a
            href="https://www.facebook.com/soundsliketouch/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <u>Facebook</u>
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/soundsliketouch/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <u>Instagram</u>
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/company/sounds-like-touch"
            rel="noreferrer noopener"
            target="_blank"
          >
            <u>LinkedIn</u>
          </a>
        </p>
        <p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdj-BOJRilznSnU8nE7mTf2YpiVqK9cc6FabAH_R1-DiKQ61w/viewform"
            rel="noreferrer noopener"
            target="_blank"
          >
            <u>Newsletter</u>
          </a>
        </p>
        <p>
          <a
            href="mailto:info@soundsliketouch.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            info@soundsliketouch.com
          </a>
        </p>
        <section style={{ paddingTop: "3em", paddingBottom: "3em" }}>
          <p>
            Made possible through <br />
            the generous support of:
            <br />
            <img
              src="/assets/sponsors_slt.png"
              height="58"
              style={{ marginTop: "1em" }}
            />
          </p>
        </section>
      </section>
      <div
        style={{
          position: "fixed",
          left: x,
          top: y,
          width,
          height,
          zIndex: 9876,
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/650420967?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="Tactology Lab - Sounds Like Touch"
        />
      </div>
    </div>
  );
};

export default Home;
