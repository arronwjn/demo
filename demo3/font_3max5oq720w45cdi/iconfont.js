;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-sandaogang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M0.021489 795.408745l1023.957021 0 0 113.77323L0.021489 909.181975 0.021489 795.408745zM0.021489 454.090079l1023.957021 0 0 113.77323L0.021489 567.863309 0.021489 454.090079zM0.021489 112.771413l1023.957021 0 0 113.77323L0.021489 226.544643 0.021489 112.771413z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M716.705 213.684c-138.888-138.934-364.124-138.934-503.059 0s-138.934 364.17 0 503.059c138.914 138.924 364.14 138.924 503.059 0.015v-0.015c138.924-138.904 138.924-364.13 0.015-503.044 0-0.005-0.015-0.005-0.015-0.015zM136.238 794.151c-181.64-181.69-181.64-476.225 0-657.921 181.68-181.64 476.2-181.64 657.921 0 181.65 181.696 181.65 476.23 0 657.921-181.721 181.64-476.235 181.64-657.92 0z m869.113 211.238c-24.836 24.801-65.069 24.801-89.885 0l-89.84-89.885c-24.806-24.822-24.806-65.039 0-89.845 24.801-24.8 65.018-24.8 89.84 0l89.885 89.845c24.863 24.862 24.863 65.069 0 89.885z" fill="#666666" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
