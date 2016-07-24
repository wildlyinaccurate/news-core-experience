(function () {
  'use strict'

  var M = window.Morph = {
    versions: {},
    modules: {}
  }

  var $ = document.getElementById.bind(document)

  function $qsa (selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector))
  }

  function onClick (element, cb) {
    if (element) {
      element.addEventListener('click', cb)
    }
  }

  onClick($('load-images'), function () {
    var s = document.createElement('script')
    s.src = 'https://m.files.bbci.co.uk/modules/bbc-morph-lazysizes/0.2.1/bundle.js'
    s.onload = function () {
      M.modules['bbc-morph-lazysizes@0.2.1'].load()
    }

    document.body.appendChild(s)
  })

  onClick($('load-video'), function () {
    $('full-video').style.display = 'block'

    $qsa('.c-video-frame').forEach(function (element) {
      element.style.display = 'none'
    })
  })

  onClick($('download-top'), download($qsa('.c-promo').slice(0, 7)))
  onClick($('download-all'), download($qsa('.c-promo')))

  function download (stories) {
    return function () {
      stories.forEach(function (element) {
        element.className += ' c-promo--offline'
      })
    }
  }
})()
