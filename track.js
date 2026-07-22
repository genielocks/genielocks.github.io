/* Append-only track record for the Genie. The daily task adds each card's picks here
   (status "pending"), then grades them after the fights: result win/loss + clv (closing
   line value %). Keep it honest — never delete a losing pick. */
window.TRACK = {
  "since": "2026-06-21",
  "note": "We post every pick BEFORE the fights, then come back and mark whether it won or lost — and whether the odds moved our way afterward. Losses stay on the board forever. Nothing here is cherry-picked.",
  "historical": {
    "label": "Backtest — 99 fights, 8 cards (Jan–Mar 2026)",
    "accuracy": "78.8%",
    "roi": "+10.8%",
    "caveat": "Honest caveat: when asked to just pick winners, the Genie usually picks the favorite — and favorites win a lot anyway. So this number looks better than it really is, and it is NOT proof of an edge. It's here for transparency, not bragging. The live pick log above is the real test."
  },
  "picks": [
    {"date": "2026-06-27", "event": "UFC Fight Night 280", "fighter": "Manuel Torres", "div": "Lightweight (Main Event)", "odds": 115, "modelP": 0.642, "mktP": 0.45, "edge": 0.192, "kind": "value pick + parlay leg", "result": "loss", "clv": -6.5},
    {"date": "2026-06-27", "event": "UFC Fight Night 280", "fighter": "Charles Johnson", "div": "Flyweight", "odds": 180, "modelP": 0.425, "mktP": 0.345, "edge": 0.08, "kind": "parlay leg", "result": "loss", "clv": -18.8},
    {"date": "2026-06-27", "event": "UFC Fight Night 280", "fighter": "Michel Pereira", "div": "Middleweight (Co-Main)", "odds": 270, "modelP": 0.329, "mktP": 0.26, "edge": 0.069, "kind": "parlay leg", "result": "loss", "clv": -3.9},
    {"date": "2026-06-27", "event": "UFC Fight Night 280", "fighter": "Matheus Camilo", "div": "Lightweight", "odds": 217, "modelP": 0.419, "mktP": 0.314, "edge": 0.105, "kind": "parlay leg", "result": "win", "clv": 11.2},
    {"date": "2026-07-11", "event": "UFC 329", "fighter": "Conor McGregor", "div": "Welterweight (Main Event)", "odds": 180, "modelP": 0.504, "mktP": 0.336, "edge": 0.168, "kind": "value pick + parlay leg", "result": "loss", "clv": -16.4},
    {"date": "2026-07-11", "event": "UFC 329", "fighter": "Terrance McKinney", "div": "Lightweight", "odds": -190, "modelP": 0.768, "mktP": 0.63, "edge": 0.138, "kind": "parlay leg", "result": "loss", "clv": -22.2},
    {"date": "2026-07-11", "event": "UFC 329", "fighter": "Mario Bautista", "div": "Bantamweight", "odds": 125, "modelP": 0.527, "mktP": 0.426, "edge": 0.101, "kind": "parlay leg", "result": "win", "clv": 2.3},
    {"date": "2026-07-11", "event": "UFC 329", "fighter": "Benoit Saint Denis", "div": "Lightweight (Co-Main)", "odds": -148, "modelP": 0.632, "mktP": 0.572, "edge": 0.06, "kind": "parlay leg", "result": "loss", "clv": -7.9},
    {"date": "2026-07-18", "event": "UFC Fight Night: Du Plessis vs. Usman", "fighter": "Kamaru Usman", "div": "Middleweight (Main Event)", "odds": 225, "modelP": 0.437, "mktP": 0.292, "edge": 0.146, "kind": "value pick + parlay leg", "result": "loss", "clv": 23.6},
    {"date": "2026-07-18", "event": "UFC Fight Night: Du Plessis vs. Usman", "fighter": "Jared Cannonier", "div": "Middleweight (Co-Main)", "odds": 240, "modelP": 0.336, "mktP": 0.281, "edge": 0.055, "kind": "parlay leg", "result": "loss", "clv": -12.8},
    {"date": "2026-07-18", "event": "UFC Fight Night: Du Plessis vs. Usman", "fighter": "Mitch Ramirez", "div": "Lightweight", "odds": 240, "modelP": 0.307, "mktP": 0.281, "edge": 0.026, "kind": "parlay leg", "result": "loss", "clv": -11.7},
    {"date": "2026-07-18", "event": "UFC Fight Night: Du Plessis vs. Usman", "fighter": "Tommy McMillen", "div": "Featherweight", "odds": -112, "modelP": 0.59, "mktP": 0.5, "edge": 0.09, "kind": "parlay leg", "result": "win", "clv": 25.1},
    {"date": "2026-07-18", "event": "UFC Fight Night: Du Plessis vs. Usman", "fighter": "Tabatha Ricci", "div": "Women's Strawweight", "odds": 350, "modelP": 0.437, "mktP": 0.214, "edge": 0.224, "kind": "value pick + parlay leg", "result": "loss", "clv": -4.3},
    {"date": "2026-07-18", "event": "UFC Fight Night: Du Plessis vs. Usman", "fighter": "Stewart Nicoll", "div": "Flyweight (Prelim)", "odds": 700, "modelP": 0.358, "mktP": 0.12, "edge": 0.238, "kind": "value pick + parlay leg", "result": "loss", "clv": 0.0},
    {"date": "2026-07-18", "event": "UFC Fight Night: Du Plessis vs. Usman", "fighter": "Jean-Paul Lebosnoyani", "div": "Welterweight (Prelim)", "odds": 175, "modelP": 0.518, "mktP": 0.349, "edge": 0.169, "kind": "parlay leg", "result": "win", "clv": 10.9},
    {"date": "2026-07-18", "event": "UFC Fight Night: Du Plessis vs. Usman", "fighter": "Austin Bashi", "div": "Featherweight (Prelim)", "odds": -110, "modelP": 0.58, "mktP": 0.5, "edge": 0.08, "kind": "value pick + parlay leg", "result": "loss", "clv": 12.3},
    {"date": "2026-07-19", "event": "UFC Fight Night: Ankalaev vs Guskov", "fighter": "Nurullo Aliev", "div": "Lightweight (Prelim)", "odds": -159, "modelP": 0.636, "mktP": 0.583, "edge": 0.053, "kind": "value pick + parlay leg", "result": null, "clv": null},
    {"date": "2026-07-19", "event": "UFC Fight Night: Ankalaev vs Guskov", "fighter": "Ismael Bonfim", "div": "Lightweight", "odds": 145, "modelP": 0.481, "mktP": 0.387, "edge": 0.094, "kind": "parlay leg", "result": null, "clv": null},
    {"date": "2026-07-19", "event": "UFC Fight Night: Ankalaev vs Guskov", "fighter": "Ramazan Temirov", "div": "Flyweight", "odds": -105, "modelP": 0.507, "mktP": 0.486, "edge": 0.021, "kind": "parlay leg", "result": null, "clv": null},
    {"date": "2026-07-20", "event": "UFC Fight Night: Ankalaev vs Guskov", "fighter": "Tyrell Fortune", "div": "Heavyweight", "odds": 215, "modelP": 0.424, "mktP": 0.302, "edge": 0.122, "kind": "parlay leg", "result": null, "clv": null},
    {"date": "2026-07-20", "event": "UFC Fight Night: Ankalaev vs Guskov", "fighter": "Thomas Petersen", "div": "Heavyweight (Prelim)", "odds": 170, "modelP": 0.406, "mktP": 0.35, "edge": 0.056, "kind": "parlay leg", "result": null, "clv": null},
    {"date": "2026-07-21", "event": "UFC Fight Night: Ankalaev vs Guskov", "fighter": "Mike Davis", "div": "Lightweight (Prelim)", "odds": 180, "modelP": 0.364, "mktP": 0.342, "edge": 0.022, "kind": "parlay leg", "result": null, "clv": null},
    {"date": "2026-07-21", "event": "UFC Fight Night: Ankalaev vs Guskov", "fighter": "Damian Rzepecki", "div": "Lightweight", "odds": 260, "modelP": 0.55, "mktP": 0.271, "edge": 0.279, "kind": "value pick", "result": null, "clv": null}
  ]
};
