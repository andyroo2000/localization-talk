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
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
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


          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Localization
            </Heading>
            <Heading size={1} fit caps>
              How to write code that works in more than one language
            </Heading>
          </Slide>


          {/* INTRO SLIDE */}
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
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              ALF
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Adobe Language Framework
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>We specify what to translate</ListItem></Appear>
              <Appear><ListItem>People on the ALF team do it for us</ListItem></Appear>
              <Appear><ListItem>Like magic!</ListItem></Appear>
            </List>
          </Slide>


          {/* THE HARVEST CHRON */}
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              The Harvest
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              CHRON
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
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

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
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
