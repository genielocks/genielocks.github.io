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
    {"date":"2026-06-27","event":"UFC Fight Night 280","fighter":"Manuel Torres","div":"Lightweight (Main Event)","odds":115,"modelP":0.642,"mktP":0.45,"edge":0.192,"kind":"value pick + parlay leg","result":"loss","clv":-6.5},
    {"date":"2026-06-27","event":"UFC Fight Night 280","fighter":"Charles Johnson","div":"Flyweight","odds":180,"modelP":0.425,"mktP":0.345,"edge":0.08,"kind":"parlay leg","result":"loss","clv":-18.8},
    {"date":"2026-06-27","event":"UFC Fight Night 280","fighter":"Michel Pereira","div":"Middleweight (Co-Main)","odds":270,"modelP":0.329,"mktP":0.26,"edge":0.069,"kind":"parlay leg","result":"loss","clv":-3.9},
    {"date":"2026-06-27","event":"UFC Fight Night 280","fighter":"Matheus Camilo","div":"Lightweight","odds":217,"modelP":0.419,"mktP":0.314,"edge":0.105,"kind":"parlay leg","result":"win","clv":11.2},
    {"date":"2026-07-11","event":"UFC 329","fighter":"Conor McGregor","div":"Welterweight (Main Event)","odds":180,"modelP":0.504,"mktP":0.336,"edge":0.168,"kind":"value pick + parlay leg","result":"loss","clv":-16.4},
    {"date":"2026-07-11","event":"UFC 329","fighter":"Terrance McKinney","div":"Lightweight","odds":-190,"modelP":0.768,"mktP":0.630,"edge":0.138,"kind":"parlay leg","result":"loss","clv":-22.2},
    {"date":"2026-07-11","event":"UFC 329","fighter":"Mario Bautista","div":"Bantamweight","odds":125,"modelP":0.527,"mktP":0.426,"edge":0.101,"kind":"parlay leg","result":"win","clv":2.3},
    {"date":"2026-07-11","event":"UFC 329","fighter":"Benoit Saint Denis","div":"Lightweight (Co-Main)","odds":-148,"modelP":0.632,"mktP":0.572,"edge":0.060,"kind":"parlay leg","result":"loss","clv":-7.9},
    {"date":"2026-07-18","event":"UFC Fight Night: Du Plessis vs. Usman","fighter":"Kamaru Usman","div":"Middleweight (Main Event)","odds":225,"modelP":0.437,"mktP":0.292,"edge":0.146,"kind":"value pick + parlay leg","result":null,"clv":null},
    {"date":"2026-07-18","event":"UFC Fight Night: Du Plessis vs. Usman","fighter":"Jared Cannonier","div":"Middleweight (Co-Main)","odds":240,"modelP":0.336,"mktP":0.281,"edge":0.055,"kind":"parlay leg","result":null,"clv":null},
    {"date":"2026-07-18","event":"UFC Fight Night: Du Plessis vs. Usman","fighter":"Mitch Ramirez","div":"Lightweight","odds":240,"modelP":0.307,"mktP":0.281,"edge":0.026,"kind":"parlay leg","result":null,"clv":null},
    {"date":"2026-07-18","event":"UFC Fight Night: Du Plessis vs. Usman","fighter":"Tommy McMillen","div":"Featherweight","odds":-112,"modelP":0.590,"mktP":0.500,"edge":0.090,"kind":"parlay leg","result":null,"clv":null},
    {"date":"2026-07-18","event":"UFC Fight Night: Du Plessis vs. Usman","fighter":"Tabatha Ricci","div":"Women's Strawweight","odds":350,"modelP":0.437,"mktP":0.214,"edge":0.224,"kind":"value pick + parlay leg","result":null,"clv":null}
  ]
};
