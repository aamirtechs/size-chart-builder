const test=require("node:test");const assert=require("node:assert/strict");const L=require("../src/logic.js");
test("inch to cm and back",()=>{assert.equal(L.inToCm(10),25.4);assert.equal(L.cmToIn(25.4),10);assert.equal(L.convertValue(1,"in"),2.54);});
test("presets exist with rows",()=>{assert.ok(L.PRESETS.tops.rows.length>=4);assert.ok(L.PRESETS.shoes.headers.includes("EU"));assert.ok(L.PRESETS.kids.rows.length>=3);});
test("shoe preset has US UK EU mapping",()=>{const r=L.PRESETS.shoes.rows.find(x=>x[0]==="10");assert.equal(r[1],"9");assert.equal(r[2],"44");});
test("HTML table escapes content",()=>{const h=L.buildHtmlTable(["A<B"],[["x&y"]]);assert.match(h,/<table/);assert.match(h,/A&lt;B/);assert.match(h,/x&amp;y/);});
test("CSV export builds quoted output",()=>{const c=L.buildCsv(["Size","Note"],[["M",'a,b']]);assert.match(c,/Size,Note/);assert.match(c,/"a,b"/);});
test("convertChart converts numeric ranges",()=>{const out=L.convertChart([["S","10"]],"in");assert.equal(out[0][1],"25.4");});
test("escapeHtml handles quotes",()=>{assert.equal(L.escapeHtml('a"b'),"a&quot;b");});
