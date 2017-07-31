package main

import (
	"flag"
	"io/ioutil"
	"os"

	"github.com/gramework/gramework"
	"github.com/kirillDanshin/myutils"
)

var pubPath = flag.String("pubdist", "./public/dist", "path to public dist")
var indexName = flag.String("indexName", "index.html", "name of the index file")

var pubDist string

var dirServer func(*gramework.Context)

func serveIndex(ctx *gramework.Context) {
	ctx.HTML().SendFile(pubDist + *indexName)
}

func main() {
	app := gramework.New()
	app.TLSEmails = []string{"kirill@danshin.pro"}

	app.RegFlags()
	flag.Parse()

	pubDist = *pubPath + string(os.PathSeparator)
	dirServer = app.ServeDir(*pubPath)

	app.
		GET("/*any", func(ctx *gramework.Context) {
			if len(ctx.Path()) <= 1 {
				serveIndex(ctx)
				return
			}

			if _, err := ioutil.ReadFile(myutils.Concat(pubDist, string(os.PathSeparator), string(ctx.Path()))); err != nil {
				serveIndex(ctx)
				return
			}

			dirServer(ctx)
		}).
		SPAIndex(pubDist + string(os.PathSeparator) + *indexName)

	app.ListenAndServe()
}
