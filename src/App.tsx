import promo from './little-marble-kisses-promo.jpg'
import embrace from './little-marble-kisses-embrace.jpg'
import thanks from './little-marble-kisses-thanks.jpg'
import theTankLogo from './the-tank-logo.png'
import haagenDazs from './sponsor-logos/haagen-dazs.jpg'
import nycCulturalAffairs from './sponsor-logos/nyc-cultural-affairs.jpg'
import shubertFoundation from './sponsor-logos/shubert-foundation.jpg'
import nyCommunityTrust from './sponsor-logos/ny-community-trust.jpg'
import nysCouncilOnTheArts from './sponsor-logos/nys-council-on-the-arts.jpg'
import howardFoundation from './sponsor-logos/howard-foundation.jpg'
import artNewYork from './sponsor-logos/art-new-york.jpg'
import broadwayGreenAlliance from './sponsor-logos/broadway-green-alliance.jpg'
import mentalInsightFoundation from './sponsor-logos/mental-insight-foundation.jpg'

import './App.css';

const logos = {
  haagenDazs,
  nycCulturalAffairs,
  shubertFoundation,
  nyCommunityTrust,
  nysCouncilOnTheArts,
  howardFoundation,
  artNewYork,
  broadwayGreenAlliance,
  mentalInsightFoundation,
}

const images = {
  promo,
  embrace,
  thanks,
}

function App() {
  return (
    <div className="App">

      {/* Page 1 */}
      <section className="page-1">
        <header className="header">
          <div className="byline">
            Sabrina Gail Lobner
          </div>
          <div className="association">
            <span className="subtext">in association with</span> The Tank
          </div>
          <sub>
            presents
          </sub>
          <div>
            <i>Little Marble Kisses</i>
          </div>
        </header>
        <div className="image-wrapper">
          <img
            className="image promo"
            alt="Dancer with leg in air."
            src={images.promo}
          />
        </div>
        <footer className="footer">
          <div>
            Thursday, August 17th - Saturday, August 19th
          </div>
          <div>
            The Tank NYC
          </div>
        </footer>
      </section>


      {/* Page 2 */}
      <section className="page-2">
        <div className="group">
          <header><b>Creatives</b></header>
          <ul className="credits">
            <li>
              <b>Choreography</b> by Sabrina Gail Lobner
            </li>
            <li>
              <b>Lighting Design</b> by Sawyer Smith
            </li>
            <li>
              <b>Music</b> by Dr. David Ott
            </li>
            <li>
              <b>Music Supervision</b> by Dan Zimberg
            </li>
            <li>
              <b>Poetry</b> by Anna Marie Ray
            </li>
          </ul>
        </div>
        <div className="group">
          <header><b>The Troupe</b></header>
          <ul>
            <li>
              <b>Creature</b>..........Chloe Singer
            </li>
            <li>
              <b>Being</b>..........Ariana Ammons
            </li>
            <li>
              <b>Specter</b>..........Brian Craig Nelson
            </li>
            <li>
              <b>Youth</b>..........Gigi Hausman
            </li>
            <li>
              <b>Author</b>..........Nicholas Lovalvo
            </li>
            <li>
              <b>Shade</b>..........Moss Lovejoy
            </li>
            <li>
              <b>Narrator</b>..........Josh McWhortor
            </li>
            <li>
              <b>Shadow</b>..........Unnamed
            </li>
          </ul>
        </div>
        <footer>
          <i>There will be a 10-minute intermission.</i>
        </footer>
      </section>

      {/* Page 3 */}
      <section className="page-3 choreographers-note">
        <header>CHOREOGRAPHER'S NOTE</header>
        <p>
          While what you are witnessing tonight is the product of ten weeks of extraordinary efforts put forth by all involved, the concept for <i>Little Marble Kisses</i> has been living and growing within me for months. I continually circled back to ideas of interwoven communication for the piece until, finally, I glanced upon the jar of marbles in my bedroom.
        </p>
        <p>
          When my partner first began courting me, he simply stated, “Together we have a jar of marbles and will continue to place marbles in the jar. In the times when one or both of us knocks marbles out of the jar, or even spills the jar entirely, together we will pick up the marbles one by one and place them back in the jar.” And we have done just that.
        </p>
        <p>
          I have come to realize jars of marbles exist within all of my relationships, whether they be familial, friendly or platonic. We are all constantly filling, and sometimes shattering, each other's marble jars. Each time someone places a new marble in my life, or aids me in picking up the shards of a shattered jar, I carry the experience with me. You are all teaching me how to fill my own jar.
        </p>
        <div className="image-wrapper">
          <img
            className="embrace image"
            src={images.embrace}
            alt="Two dancers embracing."
          />
        </div>
      </section>

      {/* Page 4 */}
      <section className="page-4 special-thanks">
        <header>SPECIAL THANKS</header>
        <ul>
          <li>Stage Manager GWEN APPENFELLER</li>
          <li>Technical Director ALEXANDRA BILODEAU</li>
          <li>Tank Technical Manager PETE BETCHER</li>
          <br/>
          <li>
            BJORN BOLINDER at <br />FIND THE LIGHT PHOTOGRAPHY<br/>
            <div><i>@findthelightphotography</i></div>
          </li>
        </ul>
        <footer>
          <p>In dedication to...</p>
          <span>Ari, Gigi, Nick, Chloe, Moss, Brian, The Ott Family, Anna Marie, Dan, Sawyer, Gwen, Alexandra, Bjorn, Ty, Lucas, Courtney, Mason, My Parents and Joshua David.</span>
        </footer>
      </section>

      {/* Page 5 */}
      <section className="page-5 theater-info">
        <header>
          <img
            className="theater-logo"
            src={theTankLogo}
            alt="'The Tank' Theater Logo"
          />
        </header>
        <div className='land-ack'>
          <a
            className="land-ack"
            href="https://thetanknyc.org/land-acknowledgement"
            >
            CLICK HERE TO READ THE TANK LAND ACKNOWLEDGMENT
          </a>
        </div>
        <ul className="theater-staff">
          <li><b>MEGHAN FINN</b>, ARTISTIC DIRECTOR</li>
          <li><b>MOLLY FITZMAURICE</b>, MANAGING PRODUCER</li>
          <li><b>JOHNNY LLOYD</b>, DIRECTOR OF ARTISTIC DEVELOPMENT</li>
          <li><b>PETE BETCHER</b>, TECHNICAL MANAGER</li>
          <li><b>CONNOR SCULLY</b>, MARKETING AND AUDIENCE ENGAGEMENT MANAGER <b>KAELA MEI-SHING GARVIN</b>, PROGRAMMING ASSOCIATE</li>
          <li><b>MATT ROSS PR</b>, PRESS RELATIONS</li>
        </ul>
        <div className="theater-blurbs">
          <div>
            <b>ARE YOU AN ARTIST?</b> The Tank is committed to supporting the work of as many artists as we possibly can. We operate with open submissions, so you can email us and do a show. For info on how to submit a proposal, please visit <a href="https://thetanknyc.org/perform">thetanknyc.org/perform</a>
          </div>
          <div>
            <b>THANKS TO OUR INDIVIDUAL DONORS</b> With your support, we can continue facilitating emerging artists and new ideas for a good long time. By making a donation of any amount, you’ll help us help artists. To contribute visit <a href="https://thetanknyc.org/support">thetanknyc.org/support</a>
          </div>
          <div>
            <b>TANK BOARD</b> Justin Krebs (President), Anthony Sunga (Secretary), Patrick Rousseau (Treasurer), Jenn de la Vega, Eric Krebs, JJ Lind, Josh Luxenberg, Tiffany Rea-Fisher, Jill Rousseau, Stephane Samuel, Rachel Schweitzer
          </div>
          <div>
            <b>TANK ADVISORY BOARD</b> Wesley Chow, Emma McMullin, Gregory Rae, Rachel Schweitzer, Claire Silberman, Alex Timbers
          </div>
          <div>
            <div><b>2023 TANK INSTITUTIONAL FUNDERS</b></div>
            <div>This program is supported, in part, by public funds from the New York City Department of Cultural Affairs in partnership with the City Council.</div>
          </div>
          <div>
            The Tank's programming is made possible by the New York State Council on the Arts.
          </div>
          <div>
            CyberTank programming is made possible by the NYC COVID-19 Response and Impact Fund and The New York Community Trust.
          </div>
          <div>
            Additional Rehearsal Space pre-COVID-19 made possible by the A.R.T./New York Creative Space Grant, supported by the Andrew W. Mellon Foundation.
          </div>
          <div>
            The Howard Gilman Foundation | The Shubert Foundation | Indie Theater Fund | The Jim Henson Foundation | Off-Broadway Greening Grant | The Puppet Slam Network | City Council Member Ben Kallos | The Mental Insight Foundation | The John Golden Fund
          </div>
        </div>
        <div className="sponsor-logos">
          <img
            src={logos.haagenDazs}
            alt="Haagen Dasz Logo"
            className="haagen-dazs"
          />
          <img
            src={logos.nycCulturalAffairs}
            alt="Haagen Dasz Logo"
            className="haagen-dazs"
          />
          <img
            src={logos.shubertFoundation}
            alt="Haagen Dasz Logo"
            className="haagen-dazs"
          />
          <img
            src={logos.nyCommunityTrust}
            alt="Haagen Dasz Logo"
            className="haagen-dazs"
          />
          <img
            src={logos.nysCouncilOnTheArts}
            alt="Haagen Dasz Logo"
            className="haagen-dazs"
          />
          <img
            src={logos.howardFoundation}
            alt="Haagen Dasz Logo"
            className="haagen-dazs"
          />
          <img
            src={logos.artNewYork}
            alt="Haagen Dasz Logo"
            className="haagen-dazs"
          />
          <img
            src={logos.broadwayGreenAlliance}
            alt="Haagen Dasz Logo"
            className="haagen-dazs"
          />
          <img
            src={logos.mentalInsightFoundation}
            alt="Haagen Dasz Logo"
            className="haagen-dazs"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
