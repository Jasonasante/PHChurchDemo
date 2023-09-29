const esbuild = require('esbuild');

(async () => {
    let ctx = await esbuild.context({
        entryPoints: ["src/index.jsx" ],
        outdir: "public",
        bundle: true,
        // minify:true,
        loader: {
            ".png": "dataurl",
            ".jpg":"dataurl",
            ".jpeg":"dataurl",
            ".svg":"dataurl",
            ".gif":"dataurl",
          },
    });
    await ctx.watch();
    console.log('waiting');
})();
