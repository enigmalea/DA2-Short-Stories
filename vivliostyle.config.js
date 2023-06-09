// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
  title: "Dragon Age 2 Short Stories",
  author: "Bioware",
  language: "en",
  readingProgression: "ltr",
  size: "5.5in,8.5in",
  // theme: '', // .css or local dir or npm package. default to undefined
  image: "ghcr.io/vivliostyle/cli:7.2.2",
  entry: [
    "cover.html",
    "copyright.html",
    {
      path: "toc.html",
      rel: "contents",
    },
    "anders.html",
    "aveline.html",
    "fenris.html",
    "isabela.html",
    "merrill.html",
    "sebastian.html",
    "varric.html",
  ],
  entryContext: "./src",
  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  workspaceDir: ".vivliostyle",
  toc: false, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   replace: [ // specify replace handlers to modify HTML outputs
  //     {
  //       // This handler replaces {current_time} to a current local time tag.
  //       test: /{current_time}/,
  //       match: (_, h) => {
  //         const currentTime = new Date().toLocaleString();
  //         return h('time', { datetime: currentTime }, currentTime);
  //       },
  //     },
  //   ],
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
};

module.exports = vivliostyleConfig;
