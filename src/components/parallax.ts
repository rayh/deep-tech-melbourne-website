export const parallaxConfig = {
    "name": "Parallax",
    "particles": {
        "number": {
            "value": 200,
            "density": {
                "enable": true
            }
        },
        "color": {
            "value": [
                "#ffffff"
            ]
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": {
                "min": 0.1,
                "max": 0.5
            },
            "animation": {
                "enable": false
            }
        },
        "size": {
            "value": 0,
            "animation": {
                "enable": false
            }
        },
        "links": {
            "enable": true,
            "distance": 140,
            "color": "#ffffff",
            "opacity": 0.1,
            "width": 1,
            triangles: {
                enable: true,
            }
        },
        "move": {
            "enable": true,
            "speed": 2
        }
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": true,
                "mode": "repulse",
                "parallax": {
                    "enable": false,
                    "smooth": 10,
                    "force": 100
                }
            },
            // "onClick": {
            //     "enable": true,
            //     "mode": "gravity",
            // }
        },
        "modes": {
            "grab": {
                "distance": 400,
                "links": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 0.8
            },
            "repulse": {
                "distance": 200
            },
            "push": {
                "quantity": 4
            },
            "remove": {
                "quantity": 2
            }
        }
    },
    "background": {
        "color": "#000022"
    },
    "fullScreen": {
        "enable": true,
        "zIndex": -1
    }
}