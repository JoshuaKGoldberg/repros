import { parse } from "parse-package-name";

parse("@egoist/foo@1.0.0/bar.js");
//=>
// {name:'@egoist/foo', version:'1.0.0', path:'/bar.js'}
