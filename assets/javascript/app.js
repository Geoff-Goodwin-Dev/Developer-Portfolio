$(document).ready(function() {
  $('#pagepiling').pagepiling({
    menu: '#myMenu',
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    anchors: ['About', 'Project1', 'Project2', 'Project3', 'Project4', 'Project5'],
    scrollingSpeed: 400,
    easing: 'linear',
    loopBottom: true,
    loopTop: false,
    css3: true,
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#fff',
      'position': 'right',
      'tooltips': []
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