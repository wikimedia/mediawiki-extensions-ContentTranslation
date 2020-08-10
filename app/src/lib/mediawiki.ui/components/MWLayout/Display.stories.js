import "./grid.scss";
import "./grid-story.less";

export default {
  title: "Layout"
};

export const Display = () => ({
  template: `
  <main class="container">
      <h2>Classes to help hiding elements</h2>
      <p>A set of helper classes are provided to control the display of elements. In general they are prefixed with <code>d</code> to denote display and <code>h</code> to denote hidden. They can be used with viewport classes as illustrated below</p>
     <div class="h-xs"><code>h-xs</code> -Hidden only in xs viewports.</div>
      <div class="h-sm"><code>h-sm</code> -Hidden only in sm viewports.</div>
      <div class="h-md"><code>h-md</code> -Hidden only in md viewports.</div>
      <div class="h-lg"><code>h-lg</code> -Hidden only in lg viewports.</div>
      <div class="h-xl"><code>h-xl</code> -Hidden only in xl viewports.</div>
      <div class="h-sm-and-up"><code>h-sm-up</code> -Hidden in sm and up viewports.</div>
      <div class="h-md-and-up"><code>h-md-up</code> -Hidden in md and up viewports.</div>
      <div class="h-lg-and-up"><code>h-lg-up</code> -Hidden in lg and up viewports.</div>
      <div class="h-sm-and-down"><code>h-sm-down</code> -Hidden in sm and down viewports.</div>
      <div class="h-md-and-down"><code>h-md-down</code> -Hidden in md and down viewports.</div>
      <div class="h-lg-and-down"><<code>code>h-lg-down</code> -Hidden in lg and down viewports.</div>
      <p>Resize the viewport and you can see the effect of this classes.</p>
    </main>`
});
