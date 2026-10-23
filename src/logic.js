"use strict";
function inToCm(v){return Math.round(Number(v)*2.54*100)/100;}
function cmToIn(v){return Math.round(Number(v)/2.54*100)/100;}
function convertValue(v,from){return from==="in"?inToCm(v):cmToIn(v);}
function escapeHtml(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
function csvEscape(v){const s=String(v==null?"":v);return /[",\n]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;}
const PRESETS={
 tops:{title:"Tops (chest)",headers:["Size","Chest (in)","Chest (cm)"],rows:[["XS","31-34",inToCm(31)+"-"+inToCm(34)],["S","34-37",inToCm(34)+"-"+inToCm(37)],["M","38-41",inToCm(38)+"-"+inToCm(41)],["L","42-45",inToCm(42)+"-"+inToCm(45)],["XL","46-49",inToCm(46)+"-"+inToCm(49)]]},
 shoes:{title:"Shoes",headers:["US","UK","EU","Foot (cm)"],rows:[["7","6","40","25.0"],["8","7","41","25.7"],["9","8","42.5","26.0"],["10","9","44","27.1"],["11","10","45","27.8"],["12","11","46","28.3"]]},
 kids:{title:"Kids",headers:["Size","Age","Height (in)","Height (cm)"],rows:[["2T","2 yrs","33-35",inToCm(33)+"-"+inToCm(35)],["4T","4 yrs","39-41",inToCm(39)+"-"+inToCm(41)],["6","6 yrs","45-47",inToCm(45)+"-"+inToCm(47)],["8","8 yrs","50-52",inToCm(50)+"-"+inToCm(52)]]}
};
function convertChart(rows,fromUnit){return rows.map(function(r){return r.map(function(c,i){if(i===0)return c;var n=parseFloat(c);if(isNaN(n))return c;var parts=String(c).split("-");if(parts.length===2&&!isNaN(parseFloat(parts[1]))){return convertValue(parseFloat(parts[0]),fromUnit)+"-"+convertValue(parseFloat(parts[1]),fromUnit);}return String(convertValue(n,fromUnit));});});}
function buildHtmlTable(headers,rows,opts){opts=opts||{};var color=opts.color||"#0b1f3a";var head=headers.map(function(h){return "<th>"+escapeHtml(h)+"</th>";}).join("");var body=rows.map(function(r){return "<tr>"+r.map(function(c){return "<td>"+escapeHtml(c)+"</td>";}).join("")+"</tr>";}).join("");return '<table style="border-collapse:collapse;font-family:Arial,sans-serif;width:100%"><thead><tr style="background:'+color+";color:#fff\">"+head+"</tr></thead><tbody>"+body+"</tbody></table>";}
function buildCsv(headers,rows){return [headers].concat(rows).map(function(r){return r.map(csvEscape).join(",");}).join("\n")+"\n";}
const api={inToCm,cmToIn,convertValue,escapeHtml,csvEscape,PRESETS,convertChart,buildHtmlTable,buildCsv};
if(typeof module!=="undefined"&&module.exports){module.exports=api;} if(typeof window!=="undefined"){window.SizeChartBuilder=api;}
