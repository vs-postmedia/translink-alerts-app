(this["webpackJsonptranslink-alerts-app"]=this["webpackJsonptranslink-alerts-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),l=a(1),o=a(2),i=a(4),u=a(3),m=a(5),d=function(e){return e.children},h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"Enter a bus number..."},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement("label",{id:"input"},r.a.createElement("input",{type:"text",placeholder:this.state.value,onChange:this.props.onChange})))}}]),t}(n.Component),p=(a(13),function(e){var t=function(e){for(var t={bus:0,routes:0,seabus:0,routeList:[]},a=0;a<e.length;++a)"bus"===e[a].transitType&&t.bus++,t.routeList.includes(e[a]).route||(t.routeList.push(e[a].route),t.routes++);return t}(e.data);return r.a.createElement("div",{className:"summary-box"},r.a.createElement("h2",null,"There are ",r.a.createElement("span",{className:"highlight"},"".concat(t.bus," buses"))," cancelled on ",r.a.createElement("span",{className:"highlight"},"".concat(t.routes))," different routes."))}),f=(a(14),function(e){var t=e.data,a=t.time.split("-"),n="".concat(a[1],". ").concat(a[0]),s=t.time.split(" "),c="".concat(s[1]," ").concat(s[2]," to ").concat(s[5]," ").concat(s[6]);return r.a.createElement("div",{className:"card"},r.a.createElement("header",null,r.a.createElement("h2",null,t.route),r.a.createElement("p",{className:"type"},t.alertType)),r.a.createElement("div",{className:"schedule"},r.a.createElement("div",{className:"date"},r.a.createElement("p",{className:"day"},r.a.createElement("strong",null,n)),r.a.createElement("p",{className:"time"},c)),r.a.createElement("div",{className:"update"},r.a.createElement("p",null,r.a.createElement("strong",null,"Updated")),r.a.createElement("p",null,"about ",t.lastUpdate))),r.a.createElement("h4",null,"Details"),r.a.createElement("p",{className:"info"},t.info))}),E=(a(15),function(e){var t=e.data.sort((function(e,t){return parseInt(e.route)-parseInt(t.route)}));return r.a.createElement("div",{className:"card-list"},t.map((function(e,t){return r.a.createElement(f,{className:"card",data:e,key:t,id:e.route})})))}),v=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],filteredData:[],timestamp:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.dataURL).then((function(e){return e.json()})).then((function(t){return e.setState({data:t.alerts,filteredData:t.alerts,timestamp:t.timestamp})}))}},{key:"handleInputChange",value:function(e){var t=""===e.target.value?this.state.data:this.state.data.filter((function(t){return t.route.includes(e.target.value)}));this.setState({filteredData:t})}},{key:"render",value:function(){var e;return e=this.state.filteredData.length>0?r.a.createElement(E,{data:this.state.filteredData}):r.a.createElement("p",{className:"no-data"},"No cancellations"),r.a.createElement(d,null,r.a.createElement("h1",null,"Is my bus cancelled?"),r.a.createElement(h,{onChange:this.handleInputChange.bind(this)}),r.a.createElement(p,{data:this.state.data}),e,r.a.createElement("footer",{className:"footer"},"Last update: ".concat(this.state.timestamp)))}}]),t}(n.Component)),g=(a(17),"https://docs.google.com/spreadsheets/d/11u1G_UkKV4RZUAn2uYLsrtaaK2G9Die2rNfONGXV-A0/edit?usp=sharing"),b="https://storage.googleapis.com/vs-postmedia-data/alerts.json";var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{sheet:g,dataURL:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.92e40197.chunk.js.map