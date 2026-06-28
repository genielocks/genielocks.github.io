window.CARD = {
  "event": "UFC 329 \u00b7 McGregor vs. Holloway 2 \u00b7 T-Mobile Arena, Las Vegas \u00b7 Jul 11, 2026",
  "source": "trained Python model (5/6 bouts; baseline fallback for 1)",
  "fights": [
    {
      "div": "Welterweight (Main Event)",
      "a": {
        "n": "Max Holloway",
        "o": -450,
        "w": 27,
        "l": 9,
        "fin": 12,
        "age": 34,
        "reach": 69,
        "rank": 0.8
      },
      "b": {
        "n": "Conor McGregor",
        "o": 350,
        "w": 22,
        "l": 6,
        "fin": 19,
        "age": 37,
        "reach": 74,
        "rank": 0.25,
        "moveup": 1
      },
      "modelA": 0.4959
    },
    {
      "div": "Lightweight (Co-Main)",
      "a": {
        "n": "Benoit Saint Denis",
        "o": -200,
        "w": 14,
        "l": 2,
        "fin": 11,
        "age": 30,
        "reach": 72,
        "rank": 0.55
      },
      "b": {
        "n": "Paddy Pimblett",
        "o": 170,
        "w": 22,
        "l": 3,
        "fin": 16,
        "age": 31,
        "reach": 73,
        "rank": 0.6
      },
      "modelA": 0.6317
    },
    {
      "div": "Bantamweight",
      "a": {
        "n": "Mario Bautista",
        "o": -150,
        "w": 16,
        "l": 2,
        "fin": 8,
        "age": 32,
        "reach": 71,
        "rank": 0.5
      },
      "b": {
        "n": "Cory Sandhagen",
        "o": 130,
        "w": 18,
        "l": 5,
        "fin": 10,
        "age": 34,
        "reach": 70,
        "rank": 0.7
      },
      "modelA": 0.6087
    },
    {
      "div": "Flyweight",
      "a": {
        "n": "Lone'er Kavanagh",
        "o": -170,
        "w": 9,
        "l": 0,
        "fin": 5,
        "age": 26,
        "reach": 66,
        "rank": 0.5,
        "undef": 1
      },
      "b": {
        "n": "Brandon Royval",
        "o": 145,
        "w": 17,
        "l": 7,
        "fin": 11,
        "age": 33,
        "reach": 68,
        "rank": 0.65
      },
      "modelA": 0.6457
    },
    {
      "div": "Welterweight",
      "a": {
        "n": "Leon Edwards",
        "o": -360,
        "w": 22,
        "l": 4,
        "fin": 9,
        "age": 34,
        "reach": 74,
        "rank": 0.75
      },
      "b": {
        "n": "Daniel Rodriguez",
        "o": 290,
        "w": 18,
        "l": 5,
        "fin": 11,
        "age": 39,
        "reach": 71,
        "rank": 0.35
      },
      "modelA": 0.6256
    },
    {
      "div": "Heavyweight",
      "a": {
        "n": "Gable Steveson",
        "o": -1800,
        "w": 1,
        "l": 0,
        "fin": 1,
        "age": 26,
        "reach": 73,
        "rank": 0.2
      },
      "b": {
        "n": "Elisha Ellison",
        "o": 900,
        "w": 9,
        "l": 4,
        "fin": 6,
        "age": 31,
        "reach": 75,
        "rank": 0.15
      }
    }
  ],
  "updated": 1782609056889,
  "env": {
    "label": "Indoor \u00b7 climate-controlled (T-Mobile Arena, Las Vegas)",
    "heat": 0
  }
};

// Kalshi live API unreachable this run (sandbox 403). Prices below are de-vigged
// market implied %% as a stand-in so the row renders; treat as estimate, not live Kalshi.
window.CARD.kalshi = {
  "Max Holloway": 79,
  "Conor McGregor": 21,
  "Benoit Saint Denis": 64,
  "Paddy Pimblett": 36,
  "Mario Bautista": 58,
  "Cory Sandhagen": 42,
  "Lone'er Kavanagh": 61,
  "Brandon Royval": 39,
  "Leon Edwards": 75,
  "Daniel Rodriguez": 25,
  "Gable Steveson": 90,
  "Elisha Ellison": 10
};
