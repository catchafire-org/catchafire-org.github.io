import{j as e}from"./jsx-runtime-af4e3356.js";import{u as r}from"./index-ed03f49f.js";import{M as o}from"./index-bb9a2ab0.js";/* empty css             */import"./iframe-2145c842.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-11d98b33.js";import"./get-b82f916e.js";import"./index-6c0bc028.js";import"./index-356e4a49.js";function i(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"https://www.notion.so/catchafire/UX-Accessibility-Annotations-b756eb80715849e38b95384ebbe67c83"}),`
`,e.jsx(n.h2,{id:"key-areas",children:"Key Areas"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Note: Using native elements in place of ‘custom’ elements will always lead to better accessibility by default."})}),`
`,e.jsxs(n.p,{children:["Many of the areas of focus in the ",e.jsx(n.a,{href:"https://www.notion.so/catchafire/UX-Accessibility-Annotations-b756eb80715849e38b95384ebbe67c83",rel:"nofollow",children:e.jsx(n.strong,{children:"Notion doc"})})," fall into one of the following:"]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"wcag-operable",children:"WCAG: Operable"}),`
`,e.jsx(n.h3,{id:"form-elements",children:"Form Elements"}),`
`,e.jsxs(n.p,{children:[`Form elements should be focusable and interactive with keyboard as well as mouse.
Using proper HTML markup will ensure this is likely already possible, but we would want to check all important forms for this functionality.
`,e.jsx(n.a,{href:"https://docs.google.com/document/d/11TTItsqNer83Ugzfw3R4y8O9vnIUf-EnBuQmZBElKec/edit#heading=h.v0fgzl492n0k",rel:"nofollow",children:e.jsx(n.strong,{children:"Notes about “Understandable” markup below"})})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"links-vs-buttons",children:"Links vs Buttons"}),`
`,e.jsxs(n.p,{children:["Using semantic markup is always preferred over manually defining a “role”. For example, an anchor tag ",e.jsx(n.code,{children:"<a>"})," or ",e.jsx(n.code,{children:"<button>"})," is always preferred over another element (",e.jsx(n.code,{children:"<div>"}),") with an onclick handler."]}),`
`,e.jsx(n.h4,{id:"buttons",children:"Buttons"}),`
`,e.jsxs(n.p,{children:["Buttons are clickable actions on the page. For example, downloading a file, form submitting or log out. ",e.jsx(n.code,{children:"<button></button>"})," preferred over ",e.jsx(n.code,{children:'<div role="button"></div>'})," and ",e.jsx(n.code,{children:'<a href role="button"></a>'})]}),`
`,e.jsx(n.h4,{id:"links",children:"Links"}),`
`,e.jsx(n.p,{children:`Links are usually text links that move you away from the current page you are on.
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a`}),`
`,e.jsxs(n.p,{children:[`Providing a role can be used to better explain the content of the link
Ex. (a link in a list of items):
`,e.jsx(n.code,{children:"<a href=”http://google.com” role=”menuitem”>Google.com</a>"}),`
Screen readers handle links slightly differently than they do buttons. All links and buttons are tabbable (with proper `,e.jsx(n.code,{children:"tabindex"})," attributes applied), but pressing ",e.jsx(n.code,{children:"Space"})," or ",e.jsx(n.code,{children:"Enter"})," triggers a button, whereas links are only triggered with an ",e.jsx(n.code,{children:"Enter"}),"."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"annotation-examples",children:"Annotation examples"}),`
`,e.jsx(n.h4,{id:"aria-role-link",children:"Aria role: link"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"<a href=”http://google.com”>Link text</a>"})}),`
`,e.jsxs(n.p,{children:["Note: the ",e.jsx(n.code,{children:"href"})," is important to pick up native support with no additional attributes for interactivity."]}),`
`,e.jsx(n.h4,{id:"aria-role-button",children:"Aria role: button"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"<button type=”button”>Click here to signup</button>"})}),`
`,e.jsxs(n.p,{children:["Note: https://w3c.github.io/aria/#button Prefer the native ",e.jsx(n.code,{children:"<button>"})," instead of defining a ",e.jsx(n.code,{children:'role="button"'})," because you may then need to provide additional attributes which can become unwieldy depending on the complexity of the interactions expected. Ex. ",e.jsx(n.code,{children:"<div role=”button” aria-disabled=”true”>Disabled button</div>"})]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"wcag-understandable",children:"WCAG: Understandable"}),`
`,e.jsx(n.h3,{id:"landmarks",children:"Landmarks"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Articles https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Represents a self-contained composition in a document. Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<article></article>"})," preferred over ",e.jsx(n.code,{children:'<div role="article"></div>'})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Aside https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A supporting section that relates to the main content. Usually on the right or left of the page"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<aside></aside>"})," preferred over ",e.jsx(n.code,{children:'<div role="complementary"></div>'})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Main https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A main landmark identifies the primary content of the page."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<main></main>"})," preferred over ",e.jsx(n.code,{children:'<div role="main"></div>'})]}),`
`,e.jsxs(n.li,{children:["Used in conjunction with ",e.jsx(n.a,{href:"https://css-tricks.com/how-to-create-a-skip-to-content-link/",rel:"nofollow",children:e.jsx(n.strong,{children:"“Skip” linking"})})," https://www.w3.org/TR/WCAG21/#bypass-blocks"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Nav https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A list of links that are intended to navigate the site or the page"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<nav></nav>"})," preferred over ",e.jsx(n.code,{children:'<div role="navigation"></div>'})]}),`
`,e.jsxs(n.li,{children:["To the point above, the navigation should be skippable with a ",e.jsx(n.a,{href:"https://css-tricks.com/how-to-create-a-skip-to-content-link/",rel:"nofollow",children:e.jsx(n.strong,{children:"Skip link"})})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Banner https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A banner usually appears at the top of the page and typically spans the full width."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<header></header>"})," preferred over ",e.jsx(n.code,{children:'<div role="banner"></div>'})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Section https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A area that doesn't have a more specific semantic element to represent it"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<section></section>"})," preferred over ",e.jsx(n.code,{children:'<div role="contentinfo"></div>'})]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"content-order-tab-order",children:"Content order (Tab order)"}),`
`,e.jsx(n.p,{children:"Tab order is for users who have difficulty navigating a web page with a mouse. So instead they use their keyboard."}),`
`,e.jsx(n.p,{children:"Indicating tab orders allows users to navigate the site with intention and logical purpose."}),`
`,e.jsx(n.h4,{id:"annotation-example",children:"Annotation example"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'tabindex="-1"'}),` means the element should not be considered in the tab order
`,e.jsx(n.code,{children:'tabindex="0"'})," is typically the default if a non-standard element (",e.jsx(n.code,{children:"<div>"}),", ",e.jsx(n.code,{children:"<span>"}),", etc) should be focusable with the tab key. Tab order will be top to bottom in this example."]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"alt-text-for-graphics",children:"Alt text for graphics"}),`
`,e.jsx(n.p,{children:"The text alternative should convey the meaning or content that is displayed visually, which typically isn’t a literal description of the image."}),`
`,e.jsx(n.h4,{id:"annotation-examples-1",children:"Annotation examples"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:'<img src="yellow_sunflower.jpg" alt="Photo of a yellow sunflower"/>'}),`
`,e.jsx(n.code,{children:'<img src="background_pattern.png" alt=""/>'}),`
(if the image or graphic is decorative and not essential to the page content)`]}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h3,{id:"form-elements-1",children:"Form Elements"}),`
`,e.jsxs(n.p,{children:[`Provide labels to identify all form controls. This allows users to understand the required data for the form element.
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/tutorials/forms/labels/",rel:"nofollow",children:e.jsx(n.strong,{children:"Read More"})})]}),`
`,e.jsx(n.h4,{id:"annotation-examples-2",children:"Annotation examples"}),`
`,e.jsx(n.h5,{id:"aria-role-input",children:"Aria role: input"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<input type="text" name="search" aria-label="Search">

<label for="firstname">First name:</label>
<input type="text" name="firstname" id="firstname">

<input type="text" name="search" aria-labelledby="searchbutton">
<button id="searchbutton" type="submit">Search</button>
`})}),`
`,e.jsx(n.h5,{id:"aria-role-checkbox",children:"Aria role: checkbox"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:'<input type="checkbox" name="occupations" aria-label="Teacher">'})}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h5,{id:"grouping-related-checkboxes-screen-readers-will-make-a-distinction-when-reading-back-the-content-of-the-page",children:"Grouping related checkboxes (screen readers will make a distinction when reading back the content of the page)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<fieldset>
  <legend>I want to receive</legend>
  <div>
    <input type="checkbox" name="newsletter" id="check_1">
    <label for="check_1">The weekly newsletter</label>
  </div>
  <div>
    <input type="checkbox" name="newsletter" id="check_2">
    <label for="check_2">Offers from the company</label>
  </div>
</fieldset>
`})})]})}function u(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
