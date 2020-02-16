(this["webpackJsonpapp-party"]=this["webpackJsonpapp-party"]||[]).push([[0],{19:function(n){n.exports=JSON.parse('{"title":"Party","cardName":{"left":"Rick","right":"Morty"}}')},23:function(n){n.exports=JSON.parse('{"errorText":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435","warningText":"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"}')},31:function(n,t,e){n.exports=e.p+"static/media/close.f1d36c4b.svg"},39:function(n,t,e){n.exports=e(50)},40:function(n,t,e){(function(n){n.SC_DISABLE_SPEEDY=!0}).call(this,e(25))},48:function(n,t,e){},49:function(n,t,e){},50:function(n,t,e){"use strict";e.r(t);e(40);var r=e(1),a=e.n(r),i=e(27),o=e.n(i),c=e(9),u=e(37),l=e(12),f=e(4);var d=e(5);function m(){var n=Object(f.a)(["\n  margin-right: auto;\n  margin-left: auto;\n  display: block;\n  width: 80px;\n  height: 80px;\n  animation: 3s "," linear infinite;\n"]);return m=function(){return n},n}function p(){var n=Object(f.a)(["\n  fill: none;\n  stroke-dasharray: 280;\n  stroke-dashoffset: 100;\n  stroke-linecap: round;\n  stroke-width: 5;\n  stroke: #dadada;\n  animation: 3s "," linear infinite;\n"]);return p=function(){return n},n}function s(){var n=Object(f.a)(["\n  0%,\n  100% {\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dashoffset: -280;\n  }\n"]);return s=function(){return n},n}function g(){var n=Object(f.a)(["\n  0% {\n    transform: rotate(0);\n  }\n\n  50% {\n    transform: rotate(360deg);\n  }\n\n  100% {\n    transform: rotate(1080deg);\n  }\n"]);return g=function(){return n},n}var b=Object(d.c)(g()),v=Object(d.c)(s()),h=d.b.circle(p(),v),y=d.b.svg(m(),b),x=function(){return a.a.createElement(y,{version:"1.1",x:"0",y:"0",viewBox:"0 0 100 100"},a.a.createElement(h,{cx:"50",cy:"50",r:"44"}))},O=e(31),j=e.n(O);function k(){var n=Object(f.a)(["\n  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';\n  /* stylelint-disable font-family-no-missing-generic-family-keyword */\n  font-family: Roboto;\n  text-align: center;\n  color: #ffffff;\n  font-weight: 300;\n  font-size: 24px;\n  line-height: 28px;\n  text-transform: uppercase;\n  margin-bottom: 28px;\n"]);return k=function(){return n},n}function w(){var n=Object(f.a)(["\n  position: absolute;\n  cursor: pointer;\n  top: 8px;\n  width: 30px;\n  height: 30px;\n  right: 8px;\n  background-image: url(",");\n"]);return w=function(){return n},n}function E(){var n=Object(f.a)(["cursor: default;"]);return E=function(){return n},n}function C(){var n=Object(f.a)(["\n    background-image: url(",");\n    background-size: cover;\n  "]);return C=function(){return n},n}function _(){var n=Object(f.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  background-color: #dadada;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  ","\n  ","\n"]);return _=function(){return n},n}var R=d.b.div(_(),(function(n){var t=n.imageUrl;n.type;return t&&Object(d.a)(C(),t)}),(function(n){return"party"===n.type&&Object(d.a)(E())})),S=d.b.button(w(),j.a),P=d.b.p(k()),T=function(n){var t=n.children,e=n.onClick,r=n.imageUrl,i=n.type,o=void 0===i?"default":i,c=n.onRemoveCharacter;return a.a.createElement(R,{type:o,role:"button","data-testid":"character-card",imageUrl:r,onClick:e},"default"===o&&a.a.createElement(S,{"data-testid":"remove",type:"button",onClick:c}),"party"===o&&!r&&a.a.createElement(P,null,t))},U=e(14),N=e(13),q=e.n(N);function z(){var n=Object(f.a)(["\n  mutation updatePartyCharacter($character: Character) {\n    updatePartyCharacter(character: $character) @client\n  }\n"]);return z=function(){return n},n}function D(){var n=Object(f.a)(["\n  query Party {\n    party @client {\n      rick {\n        id\n        name\n        image\n      }\n      morty {\n        id\n        name\n        image\n      }\n    }\n  }\n"]);return D=function(){return n},n}function J(){var n=Object(f.a)(["\n  query CharactersQuery($filter: FilterCharacter) {\n    characters(filter: $filter) {\n      results {\n        id\n        name\n        image\n      }\n    }\n  }\n"]);return J=function(){return n},n}var $=q()(J()),B=q()(D()),L=q()(z()),M=e(23);function I(){var n=Object(f.a)(["\n  color: #dadada;\n  text-align: center;\n"]);return I=function(){return n},n}function Q(){var n=Object(f.a)(["\n  color: #ff0000;\n  text-align: center;\n"]);return Q=function(){return n},n}function A(){var n=Object(f.a)(["\n  padding: 10px;\n  width: 100%;\n  height: 240px;\n  max-width: 200px;\n"]);return A=function(){return n},n}function F(){var n=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: -10px;\n  margin-right: -10px;\n"]);return F=function(){return n},n}var Y=d.b.ul(F()),G=d.b.li(A()),H=d.b.div(Q()),K=d.b.div(I()),V=function(n){var t,e=n.debouncedSearchTerm,i=n.onRemoveCharacter,o=n.removedCharacters,c=Object(U.b)($,{variables:{filter:{name:e}}}),u=c.data,f=c.loading,d=c.error,m=Object(U.a)(L),p=Object(l.a)(m,1)[0],s=null===u||void 0===u?void 0:null===(t=u.characters)||void 0===t?void 0:t.results,g=Object(r.useMemo)((function(){return s&&s.filter((function(n){var t=n.id;return-1===o.indexOf(t)}))}),[s,o]),b=Object(r.useCallback)((function(n){p({variables:{character:n}})}),[p]);return f?a.a.createElement(x,null):d?a.a.createElement(H,{"data-testid":"error-text"},M.errorText):g&&0!==g.length?a.a.createElement(Y,null,null===g||void 0===g?void 0:g.map((function(n){var t=n.id,e=n.image,r=n.name;return a.a.createElement(G,{key:t},a.a.createElement(T,{imageUrl:e,onRemoveCharacter:function(n){n.stopPropagation(),i(t)},onClick:function(){return b({id:t,image:e,name:r})}}))}))):a.a.createElement(K,{"data-testid":"warning-text"},M.warningText)};function W(){var n=Object(f.a)(["\n  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';\n  /* stylelint-disable font-family-no-missing-generic-family-keyword */\n  font-family: Roboto;\n  border: 1px solid #a0a0a0;\n  width: 100%;\n  line-height: 35px;\n  padding-top: 22px;\n  padding-right: 27px;\n  padding-bottom: 25px;\n  padding-left: 27px;\n  margin-bottom: 20px;\n  font-weight: 300;\n  font-size: 30px;\n  color: #000000;\n"]);return W=function(){return n},n}var X=d.b.input(W()),Z=function(n){var t=n.onChange,e=n.value,i=Object(r.useRef)();Object(r.useEffect)((function(){i&&i.current&&i.current.focus()}),[i]);var o=Object(r.useCallback)((function(n){t(n.target.value)}),[t]);return a.a.createElement(X,{"data-testid":"input",ref:i,value:e,onChange:o})};function nn(){var n=Object(f.a)(["\n  margin-top: 141px;\n"]);return nn=function(){return n},n}var tn=d.b.div(nn()),en=function(){var n=Object(r.useState)([]),t=Object(l.a)(n,2),e=t[0],i=t[1],o=Object(r.useState)(""),c=Object(l.a)(o,2),f=c[0],d=c[1],m=function(n,t){var e=Object(r.useState)(n),a=Object(l.a)(e,2),i=a[0],o=a[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){o(n)}),t);return function(){clearTimeout(e)}}),[n,t]),i}(f,300),p=function(n){d(n)};return a.a.createElement(tn,null,a.a.createElement(Z,{onChange:p,value:f}),m&&m.length>2&&a.a.createElement(V,{removedCharacters:e,onRemoveCharacter:function(n){i([].concat(Object(u.a)(e),[n]))},searchTerm:f,onChange:p,debouncedSearchTerm:m}))},rn=e(24),an=e(15),on=e(36);function cn(){var n=Object(f.a)(["\n  width: 100%;\n  height: 220px;\n  max-width: 200px;\n  ","\n"]);return cn=function(){return n},n}function un(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return un=function(){return n},n}function ln(){var n=Object(f.a)(["\n  @import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500';\n  /* stylelint-disable font-family-no-missing-generic-family-keyword */\n  font-family: Roboto;\n  display: block;\n  font-size: 30px;\n  line-height: 35px;\n  text-align: center;\n  color: #000000;\n  font-weight: bold;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n"]);return ln=function(){return n},n}function fn(){var n=Object(f.a)(["\n  max-width: 380px;\n  margin-top: 90px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return fn=function(){return n},n}var dn=d.b.div(fn()),mn=d.b.title(ln()),pn=d.b.div(un()),sn=d.b.div(cn(),(function(n){return"left"===n.type?"\n          padding-right: 10px;\n        ":"\n          padding-left: 10px;\n        "})),gn=e(19),bn=function(){var n,t,e=Object(U.b)(B).data,r=null===e||void 0===e?void 0:null===(n=e.party)||void 0===n?void 0:n.rick,i=null===e||void 0===e?void 0:null===(t=e.party)||void 0===t?void 0:t.morty;return a.a.createElement(dn,null,a.a.createElement(mn,{"data-testid":"party-title"},gn.title),a.a.createElement(pn,null,a.a.createElement(sn,{"data-testid":"party-rick",type:"left"},a.a.createElement(T,{imageUrl:null===r||void 0===r?void 0:r.image,type:"party"},gn.cardName.left)),a.a.createElement(sn,{"data-testid":"party-morty",type:"right"},a.a.createElement(T,{imageUrl:null===i||void 0===i?void 0:i.image,type:"party"},gn.cardName.right))))};function vn(){var n=Object(f.a)(["\n  padding-left: 10px;\n  padding-right: 10px;\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n  max-width: 810px;\n"]);return vn=function(){return n},n}var hn=d.b.div(vn()),yn=function(){var n=new an.a({}),t=function(t){return n.readQuery({query:t})},e=function(t){return n.writeData({data:t})};return n.writeData({data:{characters:{__typename:"Characters",results:[]},party:{__typename:"Party",rick:{__typename:"Character",id:"",name:"",image:""},morty:{__typename:"Character",id:"",name:"",image:""}}}}),new on.a({uri:"https://rickandmortyapi.com/graphql",cache:n,resolvers:{Mutation:{updatePartyCharacter:function(n,r,a){var i=r.character,o=(a.cache,t(B)),c=-1!==i.name.toLowerCase().indexOf("rick"),u=-1!==i.name.toLowerCase().indexOf("morty");return e({party:{__typename:"Party",rick:c?Object(rn.a)({},i,{__typename:"Character"}):null===o||void 0===o?void 0:o.party.rick,morty:u?Object(rn.a)({},i,{__typename:"Character"}):null===o||void 0===o?void 0:o.party.morty}}),null}}}})}();e(48),e(49);o.a.render(a.a.createElement((function(){return a.a.createElement(c.a,{client:yn},a.a.createElement(hn,null,a.a.createElement(en,null),a.a.createElement(bn,null)))}),null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d0694497.chunk.js.map