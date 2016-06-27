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

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Help me, Zoo!!!
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Seriously
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Why???
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
