import{j as e}from"./jsx-runtime-af4e3356.js";import{u as n}from"./index-ed03f49f.js";import"./chunk-HLWAVYOI-3355a6c0.js";import{M as r,C as a,d,e as i}from"./index-bb9a2ab0.js";/* empty css             *//* empty css               */import"./iframe-2145c842.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-de833af9.js";import"./index-11d98b33.js";import"./get-b82f916e.js";import"./index-6c0bc028.js";import"./index-356e4a49.js";function t(l){const s={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",...n(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),`
`,e.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),`
`,e.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",rel:"stylesheet"}),`
`,e.jsx(r,{title:"Tokens/Email"}),`
`,e.jsx(s.h1,{id:"email-design-with-mjml",children:"Email design with MJML"}),`
`,e.jsx(s.p,{children:"MJML is a markup language used to develop responsive, cross-platform/client emails with ease. Its syntax makes it easy to understand, removing all need for manually written table-based layouts and inline CSS rules, and simplifying it with the use of components and simple class names."}),`
`,e.jsxs(s.p,{children:["It is recommended to read the ",e.jsx("a",{href:"https://documentation.mjml.io/",target:"_blank",children:"official documentation of MJML"})," to get familiar with the syntax, specially the section dedicated to ",e.jsx("a",{href:"https://documentation.mjml.io/#standard-body-components",target:"_blank",children:"standard body components"}),", as those are the elements most used in our templates."]}),`
`,e.jsxs(s.p,{children:["Our email files can be found in the ",e.jsx(s.code,{children:"/frontend/email"})," folder. The base header, footer, and styling files are found in the ",e.jsx(s.code,{children:"/includes"})," folder. The snippets in this folder are shared across all templates and editing them will result in changes to every email."]}),`
`,e.jsx(s.h2,{id:"typeface",children:"Typeface"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Family"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Weights available"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"25%",children:e.jsx("div",{style:{fontFamily:"Inter",fontSize:"30px"},children:"Inter"})}),e.jsx("td",{children:e.jsxs(s.p,{children:[e.jsx("a",{href:"https://fonts.google.com/specimen/Inter",target:"_blank",children:"Inter"})," is our only typeface for email design. It's a sans-serif webfont provided by Google Fonts, and it's our unique typeface for headlines, body copy, buttons, and any other component. It relies on Helvetica and Arial as a fallback in case the font file can't be retrieved, or the email client doesn't support webfonts."]})}),e.jsx("td",{width:"25%",children:e.jsxs(s.p,{children:["400 (Regular)",e.jsx("br",{}),`
600 (Semibold)`,e.jsx("br",{}),`
700 (Bold)`]})})]})})]}),`
`,e.jsx(s.h2,{id:"color-tokens",children:"Color tokens"}),`
`,e.jsxs(s.p,{children:["Colors here DO NOT work as variables or are available through class names. For email application, the colors are set independently in its own stylesheet dedicated to email design only (",e.jsx(s.code,{children:"email-styles.mjml"}),"). Since they're imported by default with each component, there's no need to use token names when editing emails. The color names shown here are for reference only."]}),`
`,e.jsxs(a,{children:[e.jsx(d,{title:"Full Palette",colors:{Raisin:"#292525",Moonstone:"#1f96e0",White:"#ffffff",Alabaster:"#f4f2e6",Cultured:"#f8f7f3"}}),e.jsx(d,{title:"Surface",colors:{"color-surface-dark":"#292525","color-surface-light":"#ffffff","color-surface-alabaster":"#f4f2e6"}}),e.jsx(d,{title:"Text",colors:{"color-text-default":"#292525","color-text-on-dark":"#f8f7f3"}}),e.jsx(d,{title:"Decorative",colors:{"color-decorative-icon-dark":"#292525","color-decorative-icon-light":"#f8f7f3"}}),e.jsx(d,{title:"Action",colors:{"color-primary":"#1f96e0","color-secondary":"#292525","color-affiliation":"#ffffff"}})]}),`
`,e.jsx(s.h2,{id:"typography-tokens",children:"Typography tokens"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Token"}),e.jsx("th",{children:"MJML or CSS class"}),e.jsx("th",{children:"Size"}),e.jsx("th",{children:"Weight"}),e.jsx("th",{children:"Lineheight"}),e.jsx("th",{children:"Padding"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--header1",children:"Header 1"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--header1"})}),e.jsx("td",{children:"48px"}),e.jsx("td",{children:"600"}),e.jsx("td",{children:"1.3"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--header2",children:"Header 2"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--header2"})}),e.jsx("td",{children:"30px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.3"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--header3",children:"Header 3"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--header3"})}),e.jsx("td",{children:"24px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.3"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--header4",children:"Header 4"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--header4"})}),e.jsx("td",{children:"18px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{children:"Body (Default)"})}),e.jsx("td",{children:"—"}),e.jsx("td",{children:"18px"}),e.jsx("td",{children:"400"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--bold",children:"Any element in bold"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--bold"})}),e.jsx("td",{children:"18px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--link",children:"Hyperlink"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--link"})}),e.jsx("td",{children:"18px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--small",children:"Small"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--small"})}),e.jsx("td",{children:"14px"}),e.jsx("td",{children:"400"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--label",children:"Label"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--label"})}),e.jsx("td",{children:"12px"}),e.jsx("td",{children:"400"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--testimonial",children:"Testimonial"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--testimonial"})}),e.jsx("td",{children:"24px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"—"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--btn",children:"Button Primary"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--btn"})}),e.jsx("td",{children:"18px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"15px 35px"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"#292525",color:"#f8f8f8"},children:e.jsx("div",{class:"idsmail--btn-secondary",children:"Button Secondary"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--btn-secondary"})}),e.jsx("td",{children:"18px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"15px 35px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{class:"idsmail--btn-affiliation",children:"Button Affiliation"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--btn-affiliation"})}),e.jsx("td",{children:"18px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"15px 35px"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("div",{class:"idsmail--btn-header",children:"Button Header"})}),e.jsx("td",{children:e.jsx("code",{children:"idsmail--btn-header"})}),e.jsx("td",{children:"16px"}),e.jsx("td",{children:"700"}),e.jsx("td",{children:"1.4"}),e.jsx("td",{children:"10px 20px"})]})]})]}),`
`,e.jsxs("div",{children:[e.jsx("h4",{children:"Notes:"}),e.jsxs("ul",{children:[e.jsx("li",{children:'If a token is not specified, it will inherit all properties from the "body" token. This is the initial styling for every component.'}),e.jsxs("li",{children:[e.jsx("span",{class:"idsmail--label",children:"LABEL"})," tags should always be in uppercase characters. Although it has a rule in CSS to force it (",e.jsx("code",{children:"text-transform: uppercase;"}),") it's still recommended to write the content itself in uppercase letters too."]}),e.jsxs("li",{children:[e.jsx("code",{children:".idsmail--link"})," and ",e.jsx("code",{children:".idsmail--bold"}),' are inline styling elements, and should be used differently. This is explained later in "MJML class names and CSS class names"']})]})]}),`
`,e.jsx(s.h2,{id:"components",children:"Components"}),`
`,e.jsx(s.p,{children:"As part of our new design language, we're implementing styling for MJML built-in components as well as new custom components speficic for our emails. In all cases, they have to use our custom class names."}),`
`,e.jsx(s.h4,{id:"headings-and-paragraphs",children:"Headings and paragraphs"}),`
`,e.jsxs("div",{style:{backgroundColor:"#292525",padding:"30px",maxWidth:"600px"},children:[e.jsx("div",{class:"idsmail--header1",style:{color:"#f8f8f8"},children:"Header 1"}),e.jsx("div",{class:"idsmail--header2",style:{color:"#f8f8f8"},children:"Header 2"}),e.jsx("div",{class:"idsmail--header3",style:{color:"#f8f8f8",marginBottom:"20px"},children:"Header 3"}),e.jsx("div",{style:{color:"#f8f8f8",marginBottom:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum, orci vel suscipit placerat, urna nisl porttitor dolor, bibendum elementum."}),e.jsx("div",{class:"idsmail--small",style:{color:"#f8f8f8"},children:"Ut tincidunt leo aliquam arcu euismod, quis consequat leo congue. Proin id urna id odio posuere dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus."})]}),`
`,e.jsx(i,{language:"html",dark:!0,code:`
<mj-text mj-class="idsmail--header1">Header 1</mj-text>
<mj-text mj-class="idsmail--header2">Header 2</mj-text>
<mj-text mj-class="idsmail--header3">Header 3</mj-text>
<mj-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</mj-text>
<mj-text class="idsmail--small">Ut tincidunt leo aliquam arcu eui...</mj-text>
  `}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h4,{id:"buttons",children:"Buttons"}),`
`,e.jsxs("div",{style:{backgroundColor:"#292525",padding:"30px",maxWidth:"600px"},children:[e.jsx("div",{class:"idsmail--btn",style:{marginBottom:"20px"},children:"Button Primary"}),e.jsx("br",{}),e.jsx("div",{class:"idsmail--btn-secondary",children:"Button Secondary"})]}),`
`,e.jsx(i,{language:"html",dark:!0,code:`
<mj-button mj-class="idsmail--btn">Button Primary</mj-button>
<mj-button mj-class="idsmail--btn-secondary">Button Secondary</mj-button>
  `}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h4,{id:"icons",children:"Icons"}),`
`,e.jsx("div",{style:{backgroundColor:"#292525",padding:"30px",maxWidth:"600px"},children:e.jsx("img",{class:"idsmail--icon",src:"https://p91.f3.n0.cdn.getcloudapp.com/items/8Luq22D7/fc1fd1d3-1859-4d69-a1a6-c418f261a684.png?source=viewer&v=51174c47d95da5a9a0382a234b7f801d"})}),`
`,e.jsx(i,{language:"html",dark:!0,code:`
<mj-image mj-class="idsmail--icon" src="images/icon.png" />
  `}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h4,{id:"avatar",children:"Avatar"}),`
`,e.jsxs("div",{style:{backgroundColor:"#292525",padding:"30px",maxWidth:"600px"},children:[e.jsx("img",{class:"idsmail--avatar",src:"https://this-person-does-not-exist.com/img/avatar-11842daaa027c03d164ed7be3fa0f969.jpg"}),e.jsx("div",{class:"idsmail--header4",style:{color:"#f8f8f8",paddingBottom:"0"},children:e.jsx(s.p,{children:"Adriana J."})}),e.jsx("div",{style:{color:"#f8f8f8"},children:e.jsx(s.p,{children:"Marketing Specialist"})})]}),`
`,e.jsx(i,{language:"html",dark:!0,code:`
<mj-image mj-class="idsmail--avatar" src="images/avatar.png" />
<mj-text mj-class="idsmail--header4" padding-bottom="0px">
  Adriana J.
</mj-text>
<mj-text>
  Marketing Specialist
</mj-text>
  `}),`
`,e.jsx("hr",{}),`
`,e.jsx(s.h4,{id:"project-card",children:"Project card"}),`
`,e.jsxs("div",{style:{backgroundColor:"#292525",padding:"30px",maxWidth:"600px"},children:[e.jsx("div",{class:"idsmail--card-caption",children:e.jsx(s.p,{children:"Project or Call"})}),e.jsx("div",{class:"idsmail--card-title idsmail--link",children:e.jsx(s.p,{children:"Project Name"})}),e.jsx("div",{class:"idsmail--card-data",children:e.jsx(s.p,{children:"for Organization Name"})})]}),`
`,e.jsx(i,{language:"html",dark:!0,code:`
<mj-section>
  <mj-column mj-class="idsmail--card-wrapper">
    <mj-text mj-class="idsmail--card-caption">
      {{callOrProject}}
    </mj-text>
    <mj-text mj-class="idsmail--card-title">
      <a class="idsmail--link" href="{{projectUrl}}">{{projectTitle}}</a>
    </mj-text>
    <mj-text mj-class="idsmail--card-data">
      for {{orgName}}
    </mj-text>
  </mj-column>
</mj-section>
  `}),`
`,e.jsxs(s.p,{children:["Note: Projects cards need to be in a ",e.jsx(s.code,{children:"mj-section"})," on its own, and the ",e.jsx(s.code,{children:"mj-column"})," requires the ",e.jsx(s.code,{children:"idsmail--card-wrapper"})," class name."]}),`
`,e.jsx(s.h2,{id:"mjml-class-names-and-css-class-names",children:"MJML class names and CSS class names"}),`
`,e.jsxs(s.p,{children:["Some components in our MJML templates require the usage of ",e.jsx("a",{href:"https://documentation.mjml.io/#mj-attributes",target:"_blank",children:"MJML class names"}),". MJML class names (",e.jsx(s.code,{children:"mj-class"}),") apply only to MJML components like text blocks (",e.jsx(s.code,{children:"<mj-text>"}),"), images (",e.jsx(s.code,{children:"<mj-image>"}),"), or buttons (",e.jsx(s.code,{children:"<mj-button>"}),"), but they can't be used in inline html elements like ",e.jsx(s.code,{children:"<a>"})," or ",e.jsx(s.code,{children:"<span>"})," tags. MJML class names are special for email use as they not only apply regular CSS styling but also layout-oriented settings, like full-width capabilities, vertical alignment, table settings, and more. Here's an example of a regular MJML class name for one of our components:"]}),`
`,e.jsx(i,{language:"html",dark:!0,code:`
<mj-button mj-class="idsmail--btn">Button Primary</mj-button>
  `}),`
`,e.jsxs(s.p,{children:["In this example, ",e.jsx(s.code,{children:'mj-class="idsmail--btn"'})," looks like a regular CSS class name, as it's used to define the rounded shape, margins, background color and text color of the button; but it also defines its ",e.jsx(s.code,{children:"inner-padding"}),`, which is not a regular CSS property. There is also an option to set the "outter padding", which creates an offset effect on the button. This is not a property we use, but it's another example on why `,e.jsx(s.code,{children:"mj-class"})," differs from regular CSS class names."]}),`
`,e.jsx(s.p,{children:"We still need to use regular CSS class names in inline elements."}),`
`,e.jsx(i,{language:"html",dark:!0,code:`
<mj-text>Remember to <a class="idsmail--link">add this to your calendar</a>.</mj-text>
  `}),`
`,e.jsx(i,{language:"html",dark:!0,code:`
<mj-text>You've been invited to join <span class="idsmail--bold">The Seven Sounds</span> organization.</mj-text>
  `}),`
`,e.jsxs(s.p,{children:["You can always find more examples and component blocks already created in our email templates, specially in the ",e.jsx(s.code,{children:"email/base-example-full.mjml"})," template."]})]})}function v(l={}){const{wrapper:s}={...n(),...l.components};return s?e.jsx(s,{...l,children:e.jsx(t,{...l})}):t(l)}export{v as default};
