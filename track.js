/* Append-only track record for the Genie. The daily task adds each card's picks here
   (status "pending"), then grades them after the fights: result win/loss + clv (closing
   line value %). Keep it honest — never delete a losing pick. */
window.TRACK = {
  "since": "2026-06-21",
  "note": "Forward-tracking the Genie's value picks against the closing line. CLV (closing line value) and W/L fill in automatically as each card completes. Shown warts and all — nothing here is cherry-picked.",
  "historical": {
    "label": "Backtest — 99 fights, 8 cards (Jan–Mar 2026)",
    "accuracy": "78.8%",
    "roi": "+10.8%",
    "caveat": "Honest caveat: on a straight winner pick the model leans to the favorite, so this is mostly 'favorites won a lot' in a small sample — NOT a proven edge, and it carries no CLV. It's here for transparency, not as a flex. The forward log below, with CLV, is the real test."
  },
  "picks": [
    {"date":"2026-06-27","event":"UFC Fight Night 280","fighter":"Manuel Torres","div":"Lightweight (Main Event)","odds":115,"modelP":0.642,"mktP":0.45,"edge":0.192,"kind":"value pick + parlay leg","result":"loss","clv":-6.5},
    {"date":"2026-06-27","event":"UFC Fight Night 280","fighter":"Charles Johnson","div":"Flyweight","odds":180,"modelP":0.425,"mktP":0.345,"edge":0.08,"kind":"parlay leg","result":"loss","clv":-18.8},
    {"date":"2026-06-27","event":"UFC Fight Night 280","fighter":"Michel Pereira","div":"Middleweight (Co-Main)","odds":270,"modelP":0.329,"mktP":0.26,"edge":0.069,"kind":"parlay leg","result":"loss","clv":-3.9},
    {"date":"2026-06-27","event":"UFC Fight Night 280","fighter":"Matheus Camilo","div":"Lightweight","odds":217,"modelP":0.419,"mktP":0.314,"edge":0.105,"kind":"parlay leg","result":"win","clv":11.2},
    {"date":"2026-07-11","event":"UFC 329","fighter":"Conor McGregor","div":"Welterweight (Main Event)","odds":180,"modelP":0.504,"mktP":0.336,"edge":0.168,"kind":"value pick + parlay leg","result":null,"clv":null},
    {"date":"2026-07-11","event":"UFC 329","fighter":"Terrance McKinney","div":"Lightweight","odds":-190,"modelP":0.768,"mktP":0.630,"edge":0.138,"kind":"parlay leg","result":null,"clv":null},
    {"date":"2026-07-11","event":"UFC 329","fighter":"Mario Bautista","div":"Bantamweight","odds":125,"modelP":0.527,"mktP":0.426,"edge":0.101,"kind":"parlay leg","result":null,"clv":null}
  ]
};
