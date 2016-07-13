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
  alf: require("../assets/alf.jpg"),
<<<<<<< Updated upstream
  harvestCron: require("../assets/the_harvest_chron.jpg")
=======
  harvestCron: require("../assets/the_harvest_cron.jpg"),
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
=======
          <Slide transition={["fade"]} bgImage={images.harvestCron.replace("/", "")} bgDarken={0.75} textColor="tertiary">
>>>>>>> Stashed changes
            <List>
              <Appear><ListItem>runs multiple times a day</ListItem></Appear>
              <Appear><ListItem>checks for new uses of the translation function</ListItem></Appear>
              <Appear><ListItem>checks for diffs in text to translate</ListItem></Appear>
              <Appear><ListItem>After translations are made, ALF submits a PR with the new translations</ListItem></Appear>
            </List>
          </Slide>


          {/* GENERAL LOCALIZATION TIPS */}
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              General
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Localization Tips
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
            <List>
              <Appear><ListItem>Translate any text that might be displayed to the user</ListItem></Appear>
              <Appear><ListItem>Don't concatenate strings</ListItem></Appear>
              <Appear><ListItem>Don't put punctuation outside of the translation</ListItem></Appear>
              <Appear><ListItem>Keep as much of a sentence or phrase inside the translation as possible</ListItem></Appear>
              <Appear><ListItem>Design text areas with room to expand for longer translations</ListItem></Appear>
              <Appear><ListItem>Don't hard-code date or time formats - use generic formats in moment.js</ListItem></Appear>
            </List>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
