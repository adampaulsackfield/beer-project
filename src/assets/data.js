const beers = [
    {
        "id": 1,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "first_brewed": "09/2007",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.5,
        "ibu": 60,
        "target_fg": 1010,
        "target_og": 1044,
        "ebc": 20,
        "srm": 10,
        "ph": 4.4,
        "attenuation_level": 75,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 64,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 19,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 3.3,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.2,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.4,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 25,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Fuggles",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "First Gold",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Cascade",
                    "amount": {
                        "value": 37.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Spicy chicken tikka masala",
            "Grilled chicken quesadilla",
            "Caramel toffee cake"
        ],
        "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 2,
        "name": "Trashy Blonde",
        "tagline": "You Know You Shouldn't",
        "first_brewed": "04/2008",
        "description": "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
        "image_url": "https://images.punkapi.com/v2/2.png",
        "abv": 4.1,
        "ibu": 41.5,
        "target_fg": 1010,
        "target_og": 1041.7,
        "ebc": 15,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 76,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 69,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 18,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Maris Otter Extra Pale",
                    "amount": {
                        "value": 3.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.2,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.4,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 13.8,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Simcoe",
                    "amount": {
                        "value": 13.8,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 26.3,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Motueka",
                    "amount": {
                        "value": 18.8,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Fresh crab with lemon",
            "Garlic butter dipping sauce",
            "Goats cheese salad",
            "Creamy lemon bar doused in powdered sugar"
        ],
        "brewers_tips": "Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 3,
        "name": "Berliner Weisse With Yuzu - B-Sides",
        "tagline": "Japanese Citrus Berliner Weisse.",
        "first_brewed": "11/2015",
        "description": "Japanese citrus fruit intensifies the sour nature of this German classic.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.2,
        "ibu": 8,
        "target_fg": 1007,
        "target_og": 1040,
        "ebc": 8,
        "srm": 4,
        "ph": 3.2,
        "attenuation_level": 83,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 60,
                        "unit": "celsius"
                    },
                    "duration": 10
                },
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 30
                },
                {
                    "temp": {
                        "value": 72,
                        "unit": "celsius"
                    },
                    "duration": 10
                },
                {
                    "temp": {
                        "value": 78,
                        "unit": "celsius"
                    },
                    "duration": 5
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 21,
                    "unit": "celsius"
                }
            },
            "twist": "Soured naturally using the kettle souring technique, Yuzu fruit: 50g at middle, Yuzu juice: 200ml at FV"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Propino Pale Malt",
                    "amount": {
                        "value": 1.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat Malt",
                    "amount": {
                        "value": 1.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Propino Pale Malt for kettle souring",
                    "amount": {
                        "value": 0.03,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Acidulated Malt for kettle souring",
                    "amount": {
                        "value": 0.03,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Bramling Cross",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "bitter"
                }
            ],
            "yeast": "Wyeast 1056 - American Ale™"
        },
        "food_pairing": [
            "Smoked chicken wings",
            "Miso ramen",
            "Yuzu cheesecake"
        ],
        "brewers_tips": "Clean everything twice. All you want is the clean sourness of lactobacillus.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 4,
        "name": "Pilsen Lager",
        "tagline": "Unleash the Yeast Series.",
        "first_brewed": "09/2013",
        "description": "Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.",
        "image_url": "https://images.punkapi.com/v2/4.png",
        "abv": 6.3,
        "ibu": 55,
        "target_fg": 1012,
        "target_og": 1060,
        "ebc": 30,
        "srm": 15,
        "ph": 4.4,
        "attenuation_level": 80,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": null
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 9,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 4.58,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Caramalt",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Dark Crystal",
                    "amount": {
                        "value": 0.06,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 10,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Centennial",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 17.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Spicy crab cakes",
            "Spicy cucumber and carrot Thai salad",
            "Sweet filled dumplings"
        ],
        "brewers_tips": "Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.",
        "contributed_by": "Ali Skinner <AliSkinner>"
    },
    {
        "id": 5,
        "name": "Avery Brown Dredge",
        "tagline": "Bloggers' Imperial Pilsner.",
        "first_brewed": "02/2011",
        "description": "An Imperial Pilsner in collaboration with beer writers. Tradition. Homage. Revolution. We wanted to showcase the awesome backbone of the Czech brewing tradition, the noble Saaz hop, and also tip our hats to the modern beers that rock our world, and the people who make them.",
        "image_url": "https://images.punkapi.com/v2/5.png",
        "abv": 7.2,
        "ibu": 59,
        "target_fg": 1027,
        "target_og": 1069,
        "ebc": 10,
        "srm": 5,
        "ph": 4.4,
        "attenuation_level": 67,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 66,
                        "unit": "celsius"
                    },
                    "duration": 70
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 10,
                    "unit": "celsius"
                }
            },
            "twist": null
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Lager Malt",
                    "amount": {
                        "value": 6.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.38,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 60,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 60,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Saaz",
                    "amount": {
                        "value": 60,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 2007 - Pilsen Lager™"
        },
        "food_pairing": [
            "Vietnamese squid salad",
            "Chargrilled corn on the cob with paprika butter",
            "Strawberry and rhubarb pie"
        ],
        "brewers_tips": "Make sure you have a big enough yeast starter to ferment through the OG and lager successfully.",
        "contributed_by": "Sam Mason <samjbmason>"
    },
    {
        "id": 6,
        "name": "Electric India",
        "tagline": "Vibrant Hoppy Saison.",
        "first_brewed": "05/2013",
        "description": "Re-brewed as a spring seasonal, this beer – which appeared originally as an Equity Punk shareholder creation – retains its trademark spicy, fruity edge. A perfect blend of Belgian Saison and US IPA, crushed peppercorns and heather honey are also added to produce a genuinely unique beer.",
        "image_url": "https://images.punkapi.com/v2/6.png",
        "abv": 5.2,
        "ibu": 38,
        "target_fg": 1005,
        "target_og": 1045,
        "ebc": 15,
        "srm": 7.5,
        "ph": 4.4,
        "attenuation_level": 88.9,
        "volume": {
            "value": 20,
            "unit": "litres"
        },
        "boil_volume": {
            "value": 25,
            "unit": "litres"
        },
        "method": {
            "mash_temp": [
                {
                    "temp": {
                        "value": 65,
                        "unit": "celsius"
                    },
                    "duration": 75
                }
            ],
            "fermentation": {
                "temp": {
                    "value": 22,
                    "unit": "celsius"
                }
            },
            "twist": "Honey: 62.5g at End (WP), Coriander Seeds: 8.5g at 45mins"
        },
        "ingredients": {
            "malt": [
                {
                    "name": "Extra Pale",
                    "amount": {
                        "value": 3.63,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Munich",
                    "amount": {
                        "value": 0.13,
                        "unit": "kilograms"
                    }
                },
                {
                    "name": "Wheat",
                    "amount": {
                        "value": 0.25,
                        "unit": "kilograms"
                    }
                }
            ],
            "hops": [
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "start",
                    "attribute": "bitter"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Peppercorns",
                    "amount": {
                        "value": 2.5,
                        "unit": "grams"
                    },
                    "add": "middle",
                    "attribute": "flavour"
                },
                {
                    "name": "Nelson Sauvin",
                    "amount": {
                        "value": 20,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                },
                {
                    "name": "Amarillo",
                    "amount": {
                        "value": 12.5,
                        "unit": "grams"
                    },
                    "add": "end",
                    "attribute": "flavour"
                }
            ],
            "yeast": "Wyeast 3711 - French Saison™"
        },
        "food_pairing": [
            "Mussels with a garlic and herb sauce",
            "Crab melt sandwich",
            "Shortbread cookies"
        ],
        "brewers_tips": "Source some really good heather honey to get the right spicy esters in the beer.",
        "contributed_by": "Sam Mason <samjbmason>"
    }
];

export default beers;