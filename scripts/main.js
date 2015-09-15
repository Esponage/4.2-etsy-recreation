var url = "https://api.etsy.com/v2/listings/active.js?api_key=fr7tl5soy87u6jy89pxgount&keywords=whiskey&includes=Images,Shop";


function fetchJSONP(url, callback) {
var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
var script = document.createElement('script');

window[callbackName] = function(data) {
  delete window[callbackName];
  document.body.removeChild(script);
  callback(data);
};

script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
document.body.appendChild(script);
}
