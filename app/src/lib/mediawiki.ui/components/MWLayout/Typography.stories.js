import "./typography.scss";

export default {
  title: "Layout/Typography"
};

export const Typography = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <main :lang="language" dir="auto" style="margin: 2em auto; max-width: 75ch;">
    <h1>Typography</h1>
    <p>Wikimedia projects rely on writing and reading. Typography is a key component of their design. Consider the typeface, size, style, and spacing of your text to achieve good <a href="https://en.wikipedia.org/wiki/Readability">readability</a>. Our typographic choices make our content accessible, present it in a neutral way, and convey its reliability.</p>
    <img style="max-width:100%" src="https://design.wikimedia.org/style-guide/img/visual-style/typography-readability@2x.png" alt="Content typesetting following the guidelines">
    <section id="readability">
    <h2>Readability</h2>
    <p>Content should be readable by everyone, regardless of their circumstances. Color blindness or the sun on a device's screen should not be barriers to access.</p>
    <h3>Contrast</h3>
    <p>When using text, make sure that it provides enough contrast to be read comfortably. Check the contrast between the colors used for the text and its background. Provide at least level AA sufficient contrast (4.5:1). The color palette provides the contrast levels for pure white and black surfaces, but you need to ensure the contrast on other combinations.</p>
    <h3>Tracking and leading</h3>
    <p><strong>Text spacing.</strong> How text is placed in space can affect its readability. Follow these considerations for text paragraphs:</p>
    <ul>
      <li>Line length for reading in English is ideally no longer than <a href="https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style">75 characters</a>.</li>
      <li>Line height should be 1.6 times the size of the font used.</li>
    </ul>
    <h3>Dynamic text</h3>
    <p>Content will be available in multiple languages, and text length will vary for pieces of content across languages. Avoid designing interfaces that depend on certain expectations about text length.</p>
    <figure class="figure figure--full">
      <img style="max-width:100%" src="https://design.wikimedia.org/style-guide/img/visual-style/typography-dynamic-text@2x.png" alt="Text shown at different font sizes depending on their length" role="img">
      <figcaption class="figure__caption">Text shown at different font sizes depending on their length.</figcaption>
    </figure>
    <p>Here are few ways to tackle dynamic text:</p>
    <ul>
      <li><b>Uncrowded user interface.</b> Design with an eye for simplicity. Consider reducing the number of elements to ensure the remaining ones have enough room. </li>
      <li><b>Dynamic layout.</b> Make containers expandable, so that they can fit the content.</li>
      <li><b>Dynamic text.</b> Adjust the size depending on the content. Use a smaller font-size for long content.</li>
      <li><b>Clipping.</b> Clip the text with ellipsis, only if there is no risk of missing important information or the complete information is reachable through a clear alternative means.</li>
    </ul>
  </section>

  <section id="typefaces">
    <h2>Typefaces</h2>
    <p>Text can be read in multiple languages on different devices. We recommend using the fonts already available on each device and operating system. This keeps the experience simple and consistent with the platform conventions and ensures widest language script support as provided by the operating systems themselves. The following sections provides a selection criteria for choosing appropriate typefaces, and how to apply it on different platforms.</p>

    <h3>Font selection criteria</h3>
    <p>To select an appropriate font family for a given language script or device, follow these criteria:</p>
    <ol>
      <li><b>Readability.</b> Fonts with a bigger x-height and open shapes are preferred.</li>
      <li><b>Neutral aspect.</b> The font should work with many different kinds of content without adding a particular voice to it.</li>
      <li><b>Simple shapes.</b> Fonts with less complex shapes work better at smaller sizes, on low-resolution devices, and reduce printing costs.</li>
      <li><b>Open.</b> Open source fonts are preferred to align with the open knowledge they deliver.</li>
    </ol>

    <h3>Platform-specific fonts</h3>
    <p>We recommend relying on the operating system's default sans-serif typeface.</p>
    <p>Most platforms have plenty of options for supporting latin-based languages, where the serif concept makes sense. Among the different serif system fonts we recommend <a href="https://en.wikipedia.org/wiki/Georgia_(typeface)">Georgia</a> (present in many operating systems).</p>

    <p>Below you can see an example CSS code to support the default system fonts:</p>
    <pre>
    /**
     * System font stack for sans-serif fonts
     *
     * \`-apple-system\` ('San Francisco' font) – Support Safari 9+ macOS and iOS, Firefox macOS
     * \`BlinkMacSystemFont\` ('San Francisco' font) – Chrome 48+ macOS and iOS
     * \`Segoe UI\` – Windows Vista &amp; newer
     * \`Roboto\` – Android 4.0+
     * \`Lato\` – Wikimedia Design choice, OFL licensed
     * \`Helvetica, Arial, sans-serif\` – (Generic) Web fallback
     * Note that standard \`system-ui\` value has resulted in unresolved side-effects
     * in certain OS/language combinations as of now and is therefore not included.
     */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Lato, Helvetica, Arial, sans-serif;
    </pre>
    <p>Fonts are not always available for all scripts or all operating systems. For example, Helvetica does not support the Korean script. Using the default font on the user device for Korean text seems the safest choice, unless there is a better candidate based on the selection criteria described above, and selected by someone familiar with the script.</p>

    <h3>Platform-neutral fonts</h3>
    In some cases you may be designing in a neutral-platform context. For example, creating mockups to convey a general interface concept targeting multiple platforms, or contributing to this style guide. In those cases, it is convenient to select free fonts that follow above criteria. We recommend Charter (supported by the Charis SIL font implementation), and Lato, when available in your language. As well as the Noto font family for extended language support.<p></p>
    <ul>
      <li><b>Charter</b> is a serif typeface designed by Matthew Carter in 1987. Charter has a simplified and clean structure that works well, even on low resolution displays. Although <a href="https://en.wikipedia.org/wiki/Bitstream_Charter">Bitstream Charter</a> is the original implementation for Charter, we recommend using <a href="https://en.wikipedia.org/wiki/Charis_SIL">Charis SIL</a> since it provides a wider Unicode support.</li>
      <li><b><a href="https://www.latofonts.com/lato-free-fonts/">Lato</a></b> is a sans-serif typeface designed by Łukasz Dziedzic in 2010. Lato provides good readability even at small sizes.</li>
      <li>The <b><a href="https://en.wikipedia.org/wiki/Noto_fonts">Noto family</a></b> provides a great coverage of languages, providing good alternatives for both serif and sans-serif typefaces.</li>
    </ul>
    <img width="100%" src="https://design.wikimedia.org/style-guide/img/visual-style/typography-specimen@2x.png" alt="Lato and Charter typeface specimen" role="img">
    <p>These fonts are provided as a reference, but you may select other free fonts using similar criteria when the recommended ones are not available in your context.</p>
  </section>

  <section id="use-of-styles">
    <h2>Use of styles</h2>
    <p>The recommended styles are intended to optimize readability of Wikipedia’s dense encyclopedic content.</p>
    <p>In our guidelines we use scale-independent pixels (sp). They can result in a different number of actual pixels in the user screen due to screen density or user preferences. A 16 sp text is rendered as 16 px in a 1x device at standard zoom level, but it becomes 21 px in a 2x device (or when zoomed 200% on a 1x device).</p>
    <p>Common text styles are based on the defined scale to clearly communicate the content hierarchy. </p>
    <dl class="typography-styles">
      <dt>Heading 1: Linux Libertine/Charter Regular 400, 32 sp</dt>
      <dd>
        <h1>Wikimedia Foundation</h1>
      </dd>
      <dt>Heading 2: System sans-serif 600, 24 sp</dt>
      <dd>
        <h2>Wikimedia Foundation</h2>
      </dd>
      <dt>Heading 3: System sans-serif 600, 20 sp</dt>
      <dd>
        <h3>Wikimedia Foundation</h3>
      </dd>
      <dt>Heading 4: System sans-serif 600, 18 sp</dt>
      <dd>
        <h4>Wikimedia Foundation</h4>
      </dd>
      <dt>Heading 5: System sans-serif 600, 16 sp</dt>
      <dd>
        <h5>Wikimedia Foundation</h5>
      </dd>
      <dt>Heading 6: System sans-serif 400, 16 sp</dt>
      <dd>
        <h6>Wikimedia Foundation</h6>
      </dd>
    </dl>
    <hr>
    <dl class="typography-styles">
      <dt>Body Paragraph</dt>
      <dd>
        <p>Lato Regular / system sans-serif 16 sp<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis reprehenderit minima voluptates doloribus nemo, enim eius. Itaque laudantium, praesentium maiores distinctio! Voluptate ipsam consequatur corrupti inventore cum illo quae modi.</p>
      </dd>
      <dt>Complementary Paragraph</dt>
      <dd>
        <p class="complementary">Lato Regular / system sans-serif 14 sp<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis reprehenderit minima voluptates doloribus nemo, enim eius. Itaque laudantium, praesentium maiores distinctio! Voluptate ipsam consequatur corrupti inventore cum illo quae modi.</p>
      </dd>
      <dt>Block quotation<br>citation</dt>
      <dd>
        <blockquote>Charter Italic 20 sp, 3px border before<br><cite>Lato regular / system sans-serif 14 sp</cite></blockquote>
      </dd>
      <dt>Figure caption</dt>
      <dd>
        <figcaption class="figure__caption">System sans-serif, italic 13 sp</figcaption>
      </dd>
      <dt>Small text</dt>
      <dd>
        <small>System sans-serif 13 sp</small>
      </dd>
      <dt>Placeholder</dt>
      <dd>
        <span class="is-placeholder">System sans-serif 16 sp</span>
      </dd>
      <dt>Unordered List</dt>
      <dd>
        <ul>
          <li>system sans-serif</li>
          <li>16 sp</li>
          <li>CSS default values</li>
          <li>List item first order <code>list-style-type: disc; list-style-position: outside;</code><br>
            <ul>
              <li>Nested list item order <code>list-style-type: circle;</code>
                <ul>
                  <li>Nested list item third order <code>list-style-type: square;</code></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </dd>
      <dt>Ordered List</dt>
      <dd>
        <ol start="777">
          <li>system sans-serif</li>
          <li>16 sp</li>
          <li><code>list-style-position: outside;</code><br>
            <ol>
              <li>Nested list item</li>
            </ol>
          </li>
        </ol>
      </dd>
      <dt class="typography-styles__code">Code</dt>
      <dd>
        <pre><span style="color:#72777d;">/**
* System font stack for monospace fonts
*
* \`Menlo\` – macOS 10.6+
* \`Consolas\` – Windows Vista &amp; newer
* \`Liberation Mono\` – Fedora, Ubuntu, … OFL licensed
* \`'Courier New', monospace\` – (Generic) web font fallback
*/</span>
font-family: 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
font-size: 14px;</pre>
      </dd>
    </dl>
  </section>
</main>
  `
});

Typography.args = {
  language: "en"
};

Typography.argTypes = {
  language: {
    type: "option",
    description: "Language for the content",
    options: {
      English: "en",
      Persian: "fa",
      Bengali: "bn",
      Odia: "or",
      Hindi: "hi",
      Marathi: "mr",
      Nepali: "ne",
      Assamese: "as",
      Maithili: "mai",
      "Southern Kurdish": "sdh",
      Azerbaijani: "azb",
      "Southern Balochi": "bcc",
      "Western Balochi": "bgn",
      "Kazakh(Arabic script)": "kk-arab",
      "Northern Luri": "lrc",
      "Southern Luri": "luz"
    }
  }
};
