//******************************************************************
//
// Particles
//
//******************************************************************

var width = $('body').innerWidth();

var size;
var value;

if ( width < 600 ) {
    var size = 100;
    var value = 10;
} else if ( width < 800 ) {
    var size = 150;
    var value = 7;
} else if ( width < 1200 && width > 800 ) {
    var size = 200;
    var value = 8;
} else if ( width > 1200 ) {
    var size = 300;
    var value = 10;
}



var particles = function() {

    if ( $('#floating_circles_header').length ) {
        
        console.log('it exists');

        particlesJS("floating_circles_header", {
            "particles": {
                "number": {
                    "value": 3,
                    "density": {
                        "enable": false
                    }
                },
                "color": {
                    "value": "#ec008c"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 1,
                        "color": "#ec008c"
                    },
                    "polygon": {
                        "nb_sides": 3
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 60,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 200,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.5,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": true,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": false
        });
    } // End of if statement

    
    particlesJS("floating_circles", {
        "particles": {
            "number": {
              "value": 4,
              "density": {
                "enable": false
              }
            },
            "color": {
              "value": "#e8e8e8"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 1,
                "color": "#dbdbdb"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 300,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1.5,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "bounce",
              "bounce": true,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": false
    });
}