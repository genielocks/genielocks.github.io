window.CARD = {
  "event": "UFC 329 \u00b7 McGregor vs. Holloway 2 \u00b7 T-Mobile Arena, Las Vegas \u00b7 Jul 11, 2026",
  "source": "trained Python model (5/5 bouts; baseline fallback for 0)",
  "fights": [
    {
      "div": "Welterweight (Main Event)",
      "a": {
        "n": "Max Holloway",
        "o": -240,
        "w": 27,
        "l": 9,
        "fin": 12,
        "age": 34,
        "reach": 69,
        "rank": 0.8
      },
      "b": {
        "n": "Conor McGregor",
        "o": 180,
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
        "o": -180,
        "w": 14,
        "l": 2,
        "fin": 11,
        "age": 30,
        "reach": 72,
        "rank": 0.55
      },
      "b": {
        "n": "Paddy Pimblett",
        "o": 155,
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
      "div": "Lightweight",
      "a": {
        "n": "Terrance McKinney",
        "o": -190,
        "w": 18,
        "l": 8,
        "fin": 16,
        "age": 31,
        "reach": 73,
        "rank": 0.25
      },
      "b": {
        "n": "King Green",
        "o": 160,
        "w": 35,
        "l": 17,
        "fin": 22,
        "age": 39,
        "reach": 71,
        "rank": 0.3
      },
      "modelA": 0.7682
    }
  ],
  "updated": 1782695326296,
  "env": {
    "label": "Indoor \u00b7 climate-controlled (T-Mobile Arena, Las Vegas)",
    "heat": 0
  }
};

// Kalshi live API unreachable this run (sandbox network blocked). Prices below are
// de-vigged market implied %% as a stand-in so the row renders; treat as estimate,
// not live Kalshi.
window.CARD.kalshi = {
  "Max Holloway": 66,
  "Conor McGregor": 34,
  "Benoit Saint Denis": 62,
  "Paddy Pimblett": 38,
  "Mario Bautista": 58,
  "Cory Sandhagen": 42,
  "Lone'er Kavanagh": 61,
  "Brandon Royval": 39,
  "Terrance McKinney": 63,
  "King Green": 37
};

// Official UFC.com headshots baked this run (event_results_athlete_headshot style).
window.CARD.photos = {
  "Max Holloway": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2024-04/HOLLOWAY_MAX_04-13.png?itok=e3UJ9I_-",
  "Conor McGregor": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2021-07/67667%252Fprofile-galery%252Fprofile-picture%252FMCGREGOR_CONOR_07-10.png?itok=gkJxt2OA",
  "Benoit Saint Denis": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-01/SAINT_DENIS_BENOIT_01-31.png?itok=DdQlmp7O",
  "Paddy Pimblett": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-01/PIMBLETT_PADDY_01-24.png?itok=bvzdUmCh",
  "Mario Bautista": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-02/BAUTISTA_MARIO_02-07.png?itok=309CCrBc",
  "Cory Sandhagen": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-10/SANDHAGEN_CORY_10-04.png?itok=fGySGH1e",
  "Lone'er Kavanagh": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-02/KAVANAGH_LONEER_02-28.png?itok=BNHMDX_k",
  "Brandon Royval": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2025-12/ROYVAL_BRANDON_12-13.png?itok=EYT1vAg8",
  "Terrance McKinney": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-03/MCKINNEY_TERRANCE_03-28.png?itok=XaH_e6I8",
  "King Green": "https://ufc.com/images/styles/event_results_athlete_headshot/s3/2026-05/GREEN_KING_05-09.png?itok=zxOvSxLW"
};
