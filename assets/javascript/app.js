$(document).ready(function() {
  $('#pagepiling').pagepiling({
    menu: '#myMenu',
    direction: 'horizontal',
    verticalCentered: true,
    sectionsColor: [],
    anchors: ['About', 'secondPage', 'thirdPage', 'fourthPage'],
    scrollingSpeed: 300,
    easing: 'swing',
    loopBottom: true,
    loopTop: false,
    css3: true,
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['About', 'Portfolio: Skynet', 'Portfolio: The Code Dictator', 'Portfolio: ']
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
  });
});