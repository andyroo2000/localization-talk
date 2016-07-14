// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import CodeSlide plugin
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  worldMap: require("../assets/worldMap.jpg"),
  aBillionUsersTeaser: require("../assets/aBillionUsersTeaser.jpg"),
  aBillionUsers: require("../assets/aBillionUsers.jpg"),
  lazyHomer: require("../assets/lazyHomer.jpg"),
  ifYouSeeSomething: require("../assets/ifYouSeeSomething.jpg"),
  abstractArt: require("../assets/abstractArt.jpg"),
  alf: require("../assets/alf.jpg"),
  harvestCron: require("../assets/theHarvestCron.jpg"),
  strategyGame: require("../assets/strategyGame.jpg"),
  mustache: require("../assets/mustache.jpg"),
  danger: require("../assets/danger.jpg"),
  smartQuotes: require("../assets/smartQuotes.png"),
  moment: require("../assets/moment.png"),
  leavingBrooklyn: require("../assets/leavingBrooklyn.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#1769ff"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[]} transitionDuration={500} progress="bar" controls="0">


          {/* BLANK SLIDE */}
          <Slide>
          </Slide>



          {/* INTRO SLIDE */}
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Localization
            </Heading>
            <Heading size={1} fit caps>
              How and why to write code that works in more than one language
            </Heading>
          </Slide>


          {/* WHAT HAPPENS IF WE IGNORE LOCALIZATION */}
          <Slide transition={["fade"]} bgImage={images.worldMap.replace("/", "")}>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.worldMap.replace("/", "")} bgDarken={0.75} textColor="tertiary">
            <Appear fid="1">
              <Heading size={1} fit>
                What happens if we don't worry about localization?
              </Heading>
            </Appear>
            <List>
              <Appear><ListItem>Unlocalized text makes non-English speakers feel unwelcome</ListItem></Appear>
              <Appear><ListItem>Users speaking languages other than English feel that the site is not for them</ListItem></Appear>
              <Appear><ListItem>How would you feel if you were visiting Ikea.com and you received validation error messages in Swedish?</ListItem></Appear>
            </List>
          </Slide>



          {/* A BILLION USERS MEME */}
          <Slide transition={[]} bgImage={images.aBillionUsersTeaser.replace("/", "")}>
          </Slide>
          <Slide transition={[]} bgImage={images.aBillionUsers.replace("/", "")}>
          </Slide>


          {/* WHY LOCALIZE? */}
          <Slide transition={[]} bgImage={images.worldMap.replace("/", "")} bgDarken={0.75} textColor="tertiary">
            <Heading size={1} fit>
              Benefits of thorough localization
            </Heading>
            <List>
              <Appear><ListItem>~50% of our traffic is from non-English locales</ListItem></Appear>
              <Appear><ListItem>There are more non-English speaking potential users than English speaking ones</ListItem></Appear>
              <Appear><ListItem>This is a tremendous opportunity for growth - duh</ListItem></Appear>
            </List>
          </Slide>



          {/* BUT WHAT IF I'M LAZY? */}
          <Slide transition={[]} bgImage={images.lazyHomer.replace("/", "")} bgDarken={0.75} textColor="tertiary">
            <Heading size={1} fit>
              But what if I'm lazy?
            </Heading>
            <Appear fid="1">
              <Heading size={1} fit>
                Can't I do my "work" and then do this localization stuff later?
              </Heading>
            </Appear>
            <List>
              <Appear><ListItem>Localization concerns may influence technical choices made when creating a feature, so they should be considered from the beginning</ListItem></Appear>
              <Appear><ListItem>Not doing it now will create technical debt, which may be harder to solve after the feature has been completed</ListItem></Appear>
              <Appear><ListItem>Not doing it now increases the likelihood that our non-English speaking users will have a bad experience on the site</ListItem></Appear>
              <Appear><ListItem>Like tests, localization work should be included in your sprint-planning estimates as part of your work</ListItem></Appear>
              <Appear><ListItem>Really... it's not so hard.</ListItem></Appear>
            </List>
          </Slide>



          {/* IF YOU SEE SOMETHING, SAY SOMETHING - SEE AN ENGLISH STRING? */}
          <Slide transition={["fade"]} bgImage={images.ifYouSeeSomething.replace("/", "")}>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              See an english string?
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              Wrap it in a translate function
            </Heading>
          </Slide>

          {/* IF YOU SEE SOMETHING, SAY SOMETHING - ENGLISH ERROR MESSAGE? */}
          <Slide transition={[]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              English error message?
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              Wrap it in a translate function
            </Heading>
          </Slide>

          {/* IF YOU SEE SOMETHING, SAY SOMETHING - CREATIVE FIELDS IN ENGLISH? */}
          <Slide transition={[]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              Creative fields in english?
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              Wrap them with the translateFields function
            </Heading>
          </Slide>

          {/* IF YOU SEE SOMETHING, SAY SOMETHING - DATE DISPLAYED IN US FORMAT? */}
          <Slide transition={[]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              Creative fields in english?
            </Heading>
            <List>
              <Appear><ListItem>Reviewing a PR and a string is in English? Call it out.</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={[]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              Use timestampFormatter
            </Heading>
          </Slide>

          {/* IF YOU SEE SOMETHING, SAY SOMETHING - REVIEWING A PR AND A STRING IS IN ENGLISH? */}
          <Slide transition={[]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              Reviewing a PR and a string is in English?
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.ifYouSeeSomething.replace("/", "")} bgDarken={0.9} textColor="tertiary">
            <Heading size={1} fit>
              Call it out!
            </Heading>
          </Slide>



          {/* COOL, BUT THIS IS A BIT ABSTRACT */}
          <Slide transition={["fade"]} bgImage={images.abstractArt.replace("/", "")}>
          </Slide>
          <Slide transition={[]} bgImage={images.abstractArt.replace("/", "")} bgDarken={0.75} textColor="tertiary">
            <Heading size={1} fit>
              Fine, I'm on board but...
            </Heading>
            <Appear fid="1">
              <Heading size={1} fit>
                This has been a bit abstract
              </Heading>
            </Appear>
            <Appear fid="1">
              <Heading size={1} fit>
                Up next... some code examples
              </Heading>
            </Appear>
          </Slide>



          {/* TRANSLATIONS FILE - KEYS AND VALUES */}
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit>
              Translations.php
            </Heading>
            <Appear fid="1">
              <Heading size={1} fit>
                const SOME_KEY => 'snake_case_value'
              </Heading>
            </Appear>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/translations.php")}
              margin="20px auto"
              textSize="16px"
            />
          </Slide>



          {/* CONTROLLER TRANSLATION - BEFORE */}
          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit>
              someController.php
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/some_controller_before.php")}
              margin="20px auto"
              textSize="16px"
            />
          </Slide>


          {/* CONTROLLER TRANSLATION - AFTER */}
          <Slide transition={[]} bgColor="primary">
            <Heading size={1} fit>
              someController.php
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/some_controller.php")}
              margin="20px auto"
              textSize="16px"
            />
          </Slide>


          {/* CONTROLLER TRANSLATION - AFTER WITH TRANSLATIONS FILE */}
          <Slide transition={[]} bgColor="primary">

            <CodePane
              lang="jsx"
              source={require("raw!../assets/some_controller.php")}
              margin="20px auto"
              textSize="14px"
            />
            <CodePane
              lang="jsx"
              source={require("raw!../assets/translations_php.php")}
              margin="20px auto"
              textSize="14px"
            />
          </Slide>


          {/* JS TRANSLATION - BEFORE */}
          <Slide transition={[]} bgColor="primary">
            <Heading size={4} textColor="#FFF">
              aFile.js - not localized
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/aFileBefore.js")}
              margin="20px auto"
              textSize="14px"
            />
          </Slide>


          {/* JS TRANSLATION - AFTER */}
          <Slide transition={[]} bgColor="primary">
            <Heading size={4} textColor="#FFF">
              aFile.js - localized
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/aFileAfter.js")}
              margin="20px auto"
              textSize="14px"
            />

          </Slide>


          {/* JS TRANSLATION - AFTER WITH TRANSLATIONS FILE */}
          <Slide transition={[]} bgColor="primary">
            <Heading size={4} textColor="#FFF">
              aFile.js - localized
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/aFileAfter.js")}
              margin="20px auto"
              textSize="14px"
            />
            <Heading size={4} textColor="#FFF">
              Translations.php
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/translations_js.php")}
              margin="20px auto"
              textSize="14px"
            />
          </Slide>


          {/* MUSTACHE TRANSLATION - BEFORE */}
          <Slide transition={[]} bgColor="primary">
            <Heading size={4} textColor="#FFF">
              aFile.mustache - not localized
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/aFileBefore.mustache")}
              margin="20px auto"
              textSize="14px"
            />
          </Slide>


          {/* MUSTACHE TRANSLATION - AFTER */}
          <Slide transition={[]} bgColor="primary">
            <Heading size={4} textColor="#FFF">
              aFile.mustache - localized
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/aFileAfter.mustache")}
              margin="20px auto"
              textSize="14px"
            />
          </Slide>

          {/* MUSTACHE TRANSLATION - AFTER - WITH TRANSLATIONS FILE */}
          <Slide transition={[]} bgColor="primary">
            <Heading size={4} textColor="#FFF">
              aFile.mustache - localized
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/aFileAfter.mustache")}
              margin="20px auto"
              textSize="14px"
            />
            <CodePane
              lang="jsx"
              source={require("raw!../assets/translations_mustache.php")}
              margin="20px auto"
              textSize="14px"
            />
          </Slide>

          {/* ALF */}
          <Slide transition={["fade"]} bgImage={images.alf.replace("/", "")} bgDarken={0.25}>
            <Heading caps fit size={1} textColor="tertiary">
              ALF
            </Heading>
            <Heading caps fit size={1} textColor="tertiary">
              Adobe Language Framework
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.alf.replace("/", "")} bgDarken={0.50} textColor="tertiary">
            <List>
              <Appear><ListItem>We specify what to translate</ListItem></Appear>
              <Appear><ListItem>People on the ALF team do it for us</ListItem></Appear>
              <Appear><ListItem>Like magic!</ListItem></Appear>
            </List>
          </Slide>


          {/* THE HARVEST CHRON */}
          <Slide transition={["fade"]} bgImage={images.harvestCron.replace("/", "")}>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.harvestCron.replace("/", "")} bgDarken={0.75} textColor="tertiary">
            <List>
              <Appear><ListItem>runs multiple times a day</ListItem></Appear>
              <Appear><ListItem>checks for new uses of the translation function</ListItem></Appear>
              <Appear><ListItem>checks for diffs in text to translate</ListItem></Appear>
              <Appear><ListItem>After translations are made, ALF submits a PR with the new translations</ListItem></Appear>
            </List>
          </Slide>



          {/* BASIC LOCALIZATION STRATEGIES AND TIPS */}
          <Slide transition={[]} bgImage={images.strategyGame.replace("/", "")} bgDarken={0.35} textColor="tertiary">
            <Heading size={1} fit>
              Localization Strategies
            </Heading>
          </Slide>


          {/* USE MUSTACHE TEMPLATES WHENEVER POSSIBLE */}
          <Slide transition={[]} bgImage={images.mustache.replace("/", "")}>
          </Slide>
          <Slide transition={[]} bgImage={images.mustache.replace("/", "")} bgDarken={0.75} textColor="tertiary">
            <Appear fid="1">
              <Heading size={1} fit>
                Use mustache templates whenever possible
              </Heading>
            </Appear>
            <List>
              <Appear><ListItem>Variable interpolation is only possible in mustache</ListItem></Appear>
              <Appear><ListItem>Translation, harvesting, and maintenance are much simpler</ListItem></Appear>
              <Appear><ListItem>PHP and JS remains cleaner without calls to translation functions everywhere</ListItem></Appear>
              <Appear><ListItem>Avoids introducing another module into the code that you have to test</ListItem></Appear>
            </List>
          </Slide>



          {/* WHAT IF I CAN'T PUT IT IN A MUSTACHE TEMPLATE */}
          <Slide transition={[]} bgImage={images.mustache.replace("/", "")} bgDarken={0.75} textColor="tertiary">
            <Appear fid="1">
              <Heading size={1} fit>
                What if text is coming from the model?
              </Heading>
            </Appear>
            <List>
              <Appear><ListItem>Try to move it to a template.</ListItem></Appear>
              <Appear><ListItem>If that's not possible, try to move it to the controller, where you can inject the Intl Service provided by the Service Container</ListItem></Appear>
            </List>
          </Slide>


          {/* WHAT IF IT'S COMING FROM THE CSS CONTENT PROPERTY */}
          <Slide transition={[]} bgImage={images.mustache.replace("/", "")} bgDarken={0.75} textColor="tertiary">
            <Appear fid="1">
              <Heading size={1} fit>
                What if text is coming from the CSS content property?
              </Heading>
            </Appear>
            <List>
              <Appear><ListItem>This is not a battle you will win.</ListItem></Appear>
              <Appear><ListItem>Try to move it somewhere else or move on.</ListItem></Appear>
            </List>
          </Slide>



          {/* DATES */}
          <Slide transition={[]} bgImage={images.moment.replace("/", "")}>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.moment.replace("/", "")} bgDarken={0.85}>
            <Heading caps fit size={1} textColor="tertiary">
              Dates - use Moment.js
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Specifically, use only the Moment.js formats that only contain the letter "L"</ListItem></Appear>
              <Appear><ListItem>An example is LLLL</ListItem></Appear>
              <Appear><ListItem>Any custom formats which use other combinations of letters will not automatically localize</ListItem></Appear>
              <Appear><ListItem>Most countries display date and time information in a different order and format</ListItem></Appear>
              <Appear><ListItem>If you only use the standard Moment.js formats, it will always display correctly for the user's locale</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={[]} bgImage={images.moment.replace("/", "")} bgDarken={0.85}>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/momentExample.js")}
              margin="20px auto"
              textSize="16px"
            />
          </Slide>



          {/* DANGER!!! THINGS TO LOOK OUT FOR */}
          <Slide transition={["fade"]} bgImage={images.danger.replace("/", "")} bgDarken={0.25}>
            <Heading caps fit size={1} textColor="tertiary">
              Beware!!!
            </Heading>
            <Heading caps fit size={1} textColor="tertiary">
              The following will cause you pain
            </Heading>
          </Slide>
          <Slide transition={[]} bgImage={images.danger.replace("/", "")} bgDarken={0.8} textColor="tertiary">
          </Slide>

          {/* DANGER!!! -- MAGIC OR SMART QUOTES */}
          <Slide transition={[]} bgImage={images.danger.replace("/", "")} bgDarken={0.8}>
            <Heading caps fit size={1} textColor="tertiary">
              "Magic" or "smart" quotes
            </Heading>
          </Slide>

          <Slide transition={[]} bgImage={images.smartQuotes.replace("/", "")} bgDarken={0.0} textColor="tertiary">
          </Slide>

          <Slide transition={[]} bgImage={images.danger.replace("/", "")} bgDarken={0.8}>
            <Heading caps fit size={1} textColor="tertiary">
              “Magic” or “smart” quotes
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Just use "straight" quotes</ListItem></Appear>
              <Appear><ListItem>If it is appropriate for the locale, smart quotes will be used in the translation</ListItem></Appear>
            </List>
          </Slide>



          {/* DANGER!!! -- VARIABLES OR CONSTANTS WITHIN TRANSLATED STRINGS */}
          <Slide transition={[]} bgImage={images.danger.replace("/", "")} bgDarken={0.8}>
            <Heading caps fit size={1} textColor="tertiary">
              Variables or constants within translated strings
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>It's not possible to use PHP Constant values inside a translated string</ListItem></Appear>
              <Appear><ListItem>It's also not possible to use PHP variables inside a translated string</ListItem></Appear>
              <Appear><ListItem>Don't even think about trying to stick JavaScript code or variables inside a translated string</ListItem></Appear>
              <Appear><ListItem>Just no.</ListItem></Appear>
            </List>
          </Slide>



          {/* DANGER!!! -- DON'T BUILD A SENTENCE PIECE BY PIECE*/}
          <Slide transition={[]} bgImage={images.danger.replace("/", "")} bgDarken={0.8}>
            <Heading caps fit size={1} textColor="tertiary">
              Don't try to build a sentence programmatically
            </Heading>
            <List textColor="tertiary">
              <Appear>
                  <CodePane
                      lang="jsx"
                      source={require("raw!../assets/programmaticSentence.php")}
                      margin="0px auto"
                      textSize="14px"
                  />
              </Appear>
              <Appear><ListItem>^^ PLEASE DON'T EVER DO THIS ^^</ListItem></Appear>
              <Appear>
                  <CodePane
                      lang="jsx"
                      source={require("raw!../assets/nonProgrammaticSentence.php")}
                      margin="0px auto"
                      textSize="14px"
                  />
              </Appear>
              <Appear><ListItem>^^ THIS IS BETTER ^^</ListItem></Appear>
              <Appear>
                  <CodePane
                      lang="jsx"
                      source={require("raw!../assets/translatedSentence.php")}
                      margin="0px auto"
                      textSize="14px"
                  />
              </Appear>
              <Appear><ListItem>^^ THIS IS WHAT WE REALLY WANT ^^</ListItem></Appear>
              <Appear><ListItem>Also:</ListItem></Appear>
              <Appear><ListItem>Don't even think about trying to stick JavaScript code or variables inside a translated string</ListItem></Appear>
              <Appear><ListItem>Just no.</ListItem></Appear>
            </List>
          </Slide>



          {/* THINGS YOU CAN FORGET ABOUT DOING */}
          <Slide transition={["fade"]} bgImage={images.leavingBrooklyn.replace("/", "")}>
          </Slide>
          <Slide transition={["fade"]} bgImage={images.leavingBrooklyn.replace("/", "")} bgDarken={0.85}>
            <Heading caps fit size={1} textColor="tertiary">
              Things you can forget about translating
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Log messages</ListItem></Appear>
              <Appear><ListItem>Admin tools</ListItem></Appear>
              <Appear><ListItem>Sections getting deleted soon</ListItem></Appear>
              <Appear><ListItem>Sections being redesigned soon</ListItem></Appear>
              <Appear><ListItem>Methods (POST, DELETE, etc.)</ListItem></Appear>
              <Appear><ListItem>Code comments</ListItem></Appear>
              <Appear><ListItem>Anything not user-facing</ListItem></Appear>
            </List>
          </Slide>



          {/* GENERAL LOCALIZATION TIPS REFRESHER */}
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              General
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Localization Tip Summary
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
            <List>
              <Appear><ListItem>Translate any text that might be displayed to the user</ListItem></Appear>
              <Appear><ListItem>Don't concatenate strings</ListItem></Appear>
              <Appear><ListItem>Don't put punctuation outside of the translation</ListItem></Appear>
              <Appear><ListItem>Design text areas with room to expand for longer translations</ListItem></Appear>
              <Appear><ListItem>Don't hard-code date or time formats - use generic formats in moment.js</ListItem></Appear>
            </List>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
