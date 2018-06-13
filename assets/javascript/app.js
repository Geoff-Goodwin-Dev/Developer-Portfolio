$(document).ready(function() {
  $('#pagepiling').pagepiling({
    menu: '#myMenu',
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    anchors: ['About', 'Project1', 'Project2', 'Project3', 'Project4', 'Project5'],
    scrollingSpeed: 500,
    easing: 'swing',
    loopBottom: true,
    loopTop: false,
    css3: true,
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['About', 'Skynet', 'The Code Dictator', 'Burger', 'Constructor Word Guess', 'Bamazon']
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