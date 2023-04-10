// Doing imports like this overcomes the limitation of resource loader about ES Module imports
import("http://localhost:5173/src/main.js").catch((err) => {
  console.error(
    "Dev server connection failed. Please check if vite dev server is running."
  );
  console.error(err);
  console.log("Attempting to load CX3 build");
  import(
    `${mw.config.get(
      "wgScriptPath"
    )}/extensions/ContentTranslation/app/dist/cx3.es.js`
  );
});
