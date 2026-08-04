function body(c) {
  return `
  ${c.pageHero({
    eyebrow: "Services / Data & Intent Audiences",
    title: "See what an independent signal is worth on your numbers.",
    lede: "Drag the sliders to match your business and watch break-even and monthly upside update live.",
    crumbItems: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services/" },
      { label: "Data & Intent Audiences", href: "/services/audience-intent/" },
      { label: "Cost / Benefit Calculator", href: "/services/audience-intent/cost-benefit-calculator/" },
    ],
  })}

  <section class="section bg-white">
    <div class="container-page">
      <div class="roi-calc" data-reveal data-reveal-y="20">

        <div class="mode-toggle" role="tablist" aria-label="Calculator mode">
          <button type="button" id="mode-leads" class="active" role="tab" aria-selected="true">Leads</button>
          <button type="button" id="mode-roas" role="tab" aria-selected="false">ROAS / Ecommerce</button>
        </div>

        <div class="roi-grid">
          <div class="panel inputs">
            <h2>Client Inputs</h2>

            <div class="field">
              <div class="field-row">
                <label for="spend" id="spend-label">Monthly media spend</label>
                <span class="val" id="spend-val">$30,000</span>
              </div>
              <input type="range" id="spend" min="0" max="208" step="1" value="50" />
              <div class="range-scale"><span>$5,000</span><span>$1,000,000</span></div>
            </div>

            <div data-mode-fields="leads" class="active">
              <div class="field">
                <div class="field-row">
                  <label for="cac">Current cost per acquisition</label>
                  <span class="val" id="cac-val">$1,500</span>
                </div>
                <input type="range" id="cac" min="100" max="5000" step="25" value="1500" />
                <div class="range-scale"><span>$100</span><span>$5,000</span></div>
              </div>

              <div class="field">
                <div class="field-row">
                  <label for="profit">Avg. gross profit per customer</label>
                  <span class="val" id="profit-val">$6,000</span>
                </div>
                <input type="range" id="profit" min="200" max="50000" step="100" value="6000" />
                <div class="range-scale"><span>$200</span><span>$50,000</span></div>
              </div>

              <div class="field">
                <div class="field-row">
                  <label for="currentClose">Current close rate</label>
                  <span class="val" id="currentClose-val">20%</span>
                </div>
                <input type="range" id="currentClose" min="5" max="40" step="1" value="20" />
                <div class="range-scale"><span>5%</span><span>40%</span></div>
              </div>

              <div class="field">
                <div class="field-row">
                  <label for="expectedClose">Expected close rate</label>
                  <span class="val" id="expectedClose-val">25%</span>
                </div>
                <input type="range" id="expectedClose" min="5" max="50" step="1" value="25" />
                <div class="range-scale"><span>5%</span><span>50%</span></div>
              </div>
            </div>

            <div data-mode-fields="roas">
              <div class="field">
                <div class="field-row">
                  <label for="currentRoas">Current ROAS</label>
                  <span class="val" id="currentRoas-val">3.0x</span>
                </div>
                <input type="range" id="currentRoas" min="1" max="10" step="0.1" value="3" />
                <div class="range-scale"><span>1.0x</span><span>10.0x</span></div>
              </div>

              <div class="field">
                <div class="field-row">
                  <label for="margin">Gross margin</label>
                  <span class="val" id="margin-val">40%</span>
                </div>
                <input type="range" id="margin" min="10" max="80" step="1" value="40" />
                <div class="range-scale"><span>10%</span><span>80%</span></div>
              </div>

              <div class="field">
                <div class="field-row">
                  <label for="expectedRoas">Expected ROAS</label>
                  <span class="val" id="expectedRoas-val">5.0x</span>
                </div>
                <input type="range" id="expectedRoas" min="5" max="20" step="0.5" value="5" />
                <div class="range-scale"><span>5.0x</span><span>20.0x</span></div>
              </div>
            </div>

            <div class="fixed-field">
              <div class="ff-label">
                <span class="name">Monthly audience investment</span>
                <span class="tag">Fixed &middot; Triple O service fee</span>
              </div>
              <span class="val">$4,000</span>
            </div>

            <div class="reset-row">
              <button class="btn-reset" id="reset-btn" type="button">Reset to example</button>
            </div>
          </div>

          <div class="panel results">
            <h2>What It's Worth</h2>

            <div class="stat-row">
              <div class="stat" id="stat-breakeven">
                <span class="label" id="breakeven-label">Break-Even Close Rate</span>
                <span class="num" id="breakeven-num">23.1%</span>
                <span class="sub" id="breakeven-sub">needed for the fee to pay for itself in savings alone</span>
              </div>
              <div class="stat" id="stat-mid">
                <span class="label" id="mid-label">Projected New CAC</span>
                <span class="num" id="mid-num">$1,200</span>
                <span class="sub" id="mid-sub">$300 less per customer</span>
              </div>
              <div class="stat" id="stat-benefit">
                <span class="label">Net Monthly Benefit</span>
                <span class="num" id="benefit-num">$26,000</span>
                <span class="sub" id="benefit-sub">growth scenario, after the audience fee</span>
              </div>
            </div>

            <div class="bars">
              <div class="bar-block">
                <div class="bar-head"><span id="bar-current-label">Current acquisition program</span><span class="amt" id="bar-current-amt">$30,000</span></div>
                <div class="bar-track"><div class="bar-fill current" id="bar-current-fill" style="width:100%"></div></div>
                <div class="bar-foot"><span id="bar-current-sub">20.0 customers</span><span id="bar-current-each">$1,500 each</span></div>
              </div>
              <div class="bar-block">
                <div class="bar-head"><span id="bar-opt-label">Same customer volume, optimized</span><span class="amt" id="bar-opt-amt">$28,000</span></div>
                <div class="bar-track"><div class="bar-fill optimized" id="bar-opt-fill" style="width:93%"></div></div>
                <div class="bar-foot"><span id="bar-opt-sub">$24,000 media + $4,000 audience</span><span id="bar-opt-each">$2,000 saved</span></div>
              </div>
            </div>

            <div class="takeaway" id="takeaway">
              This clears break-even &mdash; <b>Triple O pays for itself in cost savings alone</b>, saving roughly <b>$2,000/month</b> before counting the <b>5.0 additional customers</b> a month worth approximately <b>$30,000</b> in gross profit.
            </div>

            <p class="disclaimer">Projection only. Actual results depend on media execution, audience match rates, sales conversion, and how closely these inputs reflect your business.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <style>
    .roi-calc {
      --rc-surface: #FFFFFF;
      --rc-surface-warm: #E8E4D9;
      --rc-ink: #1A2420;
      --rc-ink-soft: rgba(26,36,32,.64);
      --rc-ink-faint: rgba(26,36,32,.45);
      --rc-accent: #6B4423;
      --rc-deep: #2E3D36;
      --rc-deep-light: #3A4F45;
      --rc-border: rgba(46,61,54,.14);
      --rc-border-strong: rgba(46,61,54,.24);
      --rc-good: #3F6E52;
      --rc-good-bg: rgba(63,110,82,.10);
      --rc-caution: #A9752E;
      --rc-caution-bg: rgba(169,117,46,.12);
      --rc-panel-ink: #E8E4D9;
      --rc-panel-ink-soft: rgba(232,228,217,.68);
    }
    .roi-calc .mode-toggle {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      background: var(--rc-surface-warm);
      border-radius: 999px;
      padding: 4px;
      margin: 0 0 28px;
      width: fit-content;
    }
    .roi-calc .mode-toggle button {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 12.5px;
      letter-spacing: .04em;
      border: none;
      background: transparent;
      color: var(--rc-ink-soft);
      padding: 10px 20px;
      border-radius: 999px;
      cursor: pointer;
      transition: background .18s ease, color .18s ease;
    }
    .roi-calc .mode-toggle button.active { background: var(--rc-accent); color: #fff; }
    .roi-calc .mode-toggle button:not(.active):hover { color: var(--rc-ink); }
    .roi-calc .mode-toggle button:focus-visible { outline: 2px solid var(--rc-accent); outline-offset: 2px; }

    .roi-grid {
      display: grid;
      grid-template-columns: minmax(0,1fr) minmax(0,1.15fr);
      gap: 28px;
      align-items: start;
    }
    @media (max-width: 880px) { .roi-grid { grid-template-columns: 1fr; } }

    .roi-calc .panel {
      background: var(--rc-surface);
      border: 1px solid var(--rc-border);
      border-radius: 4px;
      box-shadow: 0 20px 50px -20px rgba(26,36,32,.2);
    }
    .roi-calc .inputs { padding: 30px 30px 10px; }
    .roi-calc .inputs h2, .roi-calc .results h2 {
      margin: 0 0 22px;
      font-family: 'Montserrat', sans-serif;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .1em;
      text-transform: uppercase;
      color: var(--rc-ink-faint);
    }

    .roi-calc .field { margin-bottom: 26px; }
    .roi-calc .field-row { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
    .roi-calc .field-row label { font-family: 'Montserrat', sans-serif; font-size: 14.5px; font-weight: 600; color: var(--rc-ink); }
    .roi-calc .field-row .val { font-family: 'Montserrat', sans-serif; font-variant-numeric: tabular-nums; font-weight: 700; font-size: 17px; color: var(--rc-accent); white-space: nowrap; }

    .roi-calc input[type="range"] {
      -webkit-appearance: none; appearance: none;
      width: 100%; height: 4px; border-radius: 2px;
      background: var(--rc-surface-warm);
      outline: none; margin: 0;
    }
    .roi-calc input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; appearance: none;
      width: 20px; height: 20px; border-radius: 50%;
      background: var(--rc-accent); border: 3px solid var(--rc-surface);
      box-shadow: 0 1px 4px rgba(0,0,0,.25), 0 0 0 1px var(--rc-border-strong);
      cursor: pointer; transition: transform .15s ease;
    }
    .roi-calc input[type="range"]:hover::-webkit-slider-thumb { transform: scale(1.08); }
    .roi-calc input[type="range"]:focus-visible::-webkit-slider-thumb { outline: 2px solid var(--rc-accent); outline-offset: 3px; }
    .roi-calc input[type="range"]::-moz-range-thumb {
      width: 14px; height: 14px; border-radius: 50%;
      background: var(--rc-accent); border: 3px solid var(--rc-surface);
      box-shadow: 0 1px 4px rgba(0,0,0,.25), 0 0 0 1px var(--rc-border-strong);
      cursor: pointer;
    }
    .roi-calc input[type="range"]::-moz-range-progress { height: 4px; border-radius: 2px; background: var(--rc-accent); }
    .roi-calc .range-scale {
      display: flex; justify-content: space-between; margin-top: 6px;
      font-family: 'Montserrat', sans-serif; font-size: 11px; color: var(--rc-ink-faint);
      font-variant-numeric: tabular-nums;
    }

    .roi-calc .fixed-field {
      display: flex; align-items: center; justify-content: space-between; gap: 12px;
      background: var(--rc-surface-warm); border-radius: 4px; padding: 16px 18px; margin-bottom: 8px;
    }
    .roi-calc .fixed-field .ff-label { display: flex; flex-direction: column; gap: 4px; }
    .roi-calc .fixed-field .ff-label span.name { font-family: 'Montserrat', sans-serif; font-size: 14.5px; font-weight: 600; color: var(--rc-ink); }
    .roi-calc .fixed-field .ff-label span.tag { font-family: 'Montserrat', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: var(--rc-ink-faint); }
    .roi-calc .fixed-field .val { font-family: 'Montserrat', sans-serif; font-variant-numeric: tabular-nums; font-weight: 700; font-size: 22px; color: var(--rc-accent); white-space: nowrap; }

    .roi-calc .results { padding: 30px; display: flex; flex-direction: column; gap: 22px; }

    .roi-calc .stat-row { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 12px; }
    @media (max-width: 560px) { .roi-calc .stat-row { grid-template-columns: 1fr; } }
    .roi-calc .stat {
      background: var(--rc-deep); color: var(--rc-panel-ink);
      border-radius: 4px; padding: 18px 18px 16px; min-height: 108px;
      display: flex; flex-direction: column; justify-content: space-between;
    }
    .roi-calc .stat .label { font-family: 'Montserrat', sans-serif; font-size: 10.5px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--rc-panel-ink-soft); }
    .roi-calc .stat .num { font-family: 'Montserrat', sans-serif; font-size: 26px; font-weight: 700; font-variant-numeric: tabular-nums; margin: 6px 0 4px; letter-spacing: -.01em; }
    .roi-calc .stat .sub { font-size: 12px; font-family: 'Lora', serif; color: var(--rc-panel-ink-soft); line-height: 1.4; }
    .roi-calc .stat.state-good .num { color: #94A996; }
    .roi-calc .stat.state-caution .num { color: #F3D19B; }

    .roi-calc .bars { display: flex; flex-direction: column; gap: 14px; }
    .roi-calc .bar-block .bar-head {
      display: flex; justify-content: space-between; align-items: baseline;
      font-family: 'Montserrat', sans-serif; font-size: 13.5px; font-weight: 600; color: var(--rc-ink); margin-bottom: 8px;
    }
    .roi-calc .bar-block .bar-head .amt { font-variant-numeric: tabular-nums; font-weight: 700; }
    .roi-calc .bar-track { height: 10px; border-radius: 5px; background: var(--rc-surface-warm); overflow: hidden; }
    .roi-calc .bar-fill { height: 100%; border-radius: 5px; transition: width .25s ease-out; }
    .roi-calc .bar-fill.current { background: var(--rc-deep-light); }
    .roi-calc .bar-fill.optimized { background: var(--rc-accent); }
    .roi-calc .bar-foot { display: flex; justify-content: space-between; margin-top: 6px; font-family: 'Montserrat', sans-serif; font-size: 12px; color: var(--rc-ink-faint); font-variant-numeric: tabular-nums; }

    .roi-calc .takeaway {
      border-left: 3px solid var(--rc-good); background: var(--rc-good-bg);
      padding: 16px 20px; border-radius: 0 4px 4px 0;
      font-family: 'Lora', serif; font-style: italic; font-size: 15.5px; line-height: 1.55; color: var(--rc-ink);
    }
    .roi-calc .takeaway.caution { border-left-color: var(--rc-caution); background: var(--rc-caution-bg); }
    .roi-calc .takeaway b { font-style: normal; font-weight: 600; }

    .roi-calc .disclaimer { font-size: 12px; color: var(--rc-ink-faint); border-top: 1px solid var(--rc-border); padding-top: 14px; line-height: 1.5; margin: 0; }

    .roi-calc .reset-row { display: flex; justify-content: flex-end; margin-top: 18px; }
    .roi-calc .btn-reset {
      font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
      color: var(--rc-ink-faint); background: none; border: 1px solid var(--rc-border-strong); border-radius: 3px;
      padding: 8px 14px; cursor: pointer; transition: color .15s, border-color .15s;
    }
    .roi-calc .btn-reset:hover { color: var(--rc-accent); border-color: var(--rc-accent); }
    .roi-calc .btn-reset:focus-visible { outline: 2px solid var(--rc-accent); outline-offset: 2px; }

    .roi-calc [data-mode-fields] { display: none; }
    .roi-calc [data-mode-fields].active { display: block; }
  </style>

  <script>
  (function () {
    var AUDIENCE_FEE = 4000;
    var mode = 'leads';

    var SPEND_MIN = 5000;
    var SPEND_BREAK = 100000;
    var SPEND_STEP1 = 500;
    var SPEND_STEP2 = 50000;
    var SPEND_STEPS1 = (SPEND_BREAK - SPEND_MIN) / SPEND_STEP1;

    function spendIndexToValue(i) {
      i = Math.round(i);
      if (i <= SPEND_STEPS1) return SPEND_MIN + i * SPEND_STEP1;
      return SPEND_BREAK + (i - SPEND_STEPS1) * SPEND_STEP2;
    }
    function spendValueToIndex(v) {
      if (v <= SPEND_BREAK) return Math.round((v - SPEND_MIN) / SPEND_STEP1);
      return SPEND_STEPS1 + Math.round((v - SPEND_BREAK) / SPEND_STEP2);
    }

    var DEFAULTS = {
      leads: { spend: 30000, cac: 1500, profit: 6000, currentClose: 20, expectedClose: 25 },
      roas: { spend: 30000, currentRoas: 3, margin: 40, expectedRoas: 5 },
    };

    var els = {
      spend: document.getElementById('spend'),
      cac: document.getElementById('cac'),
      profit: document.getElementById('profit'),
      currentClose: document.getElementById('currentClose'),
      expectedClose: document.getElementById('expectedClose'),
      currentRoas: document.getElementById('currentRoas'),
      margin: document.getElementById('margin'),
      expectedRoas: document.getElementById('expectedRoas'),
    };

    function fmtMoney(n) {
      var neg = n < 0;
      n = Math.round(Math.abs(n));
      var s = '$' + n.toLocaleString('en-US');
      return neg ? '-' + s : s;
    }
    function fmtNum(n, decimals) {
      return Number(n).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    }
    function fmtX(n, decimals) {
      return fmtNum(n, decimals === undefined ? 1 : decimals) + 'x';
    }

    function computeLeads() {
      var spend = spendIndexToValue(els.spend.value);
      var cac = parseFloat(els.cac.value);
      var profit = parseFloat(els.profit.value);
      var currentClose = parseFloat(els.currentClose.value);
      var expectedClose = parseFloat(els.expectedClose.value);
      var improvement = 1 - (currentClose / expectedClose);

      var customersCurrent = spend / cac;
      var cacNew = cac * (1 - improvement);
      var breakEvenImprovementFrac = AUDIENCE_FEE / spend;
      var breakEvenConvRate = (spend > AUDIENCE_FEE) ? (currentClose / (1 - breakEvenImprovementFrac)) : Infinity;

      var customersNew = spend / cacNew;
      var extraCustomers = customersNew - customersCurrent;
      var incrementalProfit = extraCustomers * profit;
      var netMonthlyBenefit = incrementalProfit - AUDIENCE_FEE;
      var netAnnualBenefit = netMonthlyBenefit * 12;

      var mediaNeededSameVolume = customersCurrent * cacNew;
      var totalCostSameVolume = mediaNeededSameVolume + AUDIENCE_FEE;
      var costSavingsSameVolume = spend - totalCostSameVolume;
      var clearsBreakEven = costSavingsSameVolume >= 0;

      return {
        spend: spend, breakEvenPct: breakEvenConvRate, currentMetric: expectedClose,
        netMonthlyBenefit: netMonthlyBenefit, netAnnualBenefit: netAnnualBenefit,
        clearsBreakEven: clearsBreakEven, costSavingsSameVolume: costSavingsSameVolume,
        barCurrentAmt: spend, barCurrentSub: fmtNum(customersCurrent, 1) + ' customers', barCurrentEach: fmtMoney(cac) + ' each',
        barOptAmt: totalCostSameVolume, barOptSub: fmtMoney(mediaNeededSameVolume) + ' media + ' + fmtMoney(AUDIENCE_FEE) + ' audience',
        barOptEach: costSavingsSameVolume >= 0 ? fmtMoney(costSavingsSameVolume) + ' saved' : fmtMoney(-costSavingsSameVolume) + ' above current',
        breakevenLabel: 'Break-Even Close Rate', breakevenNum: isFinite(breakEvenConvRate) ? fmtNum(breakEvenConvRate, 1) + '%' : '—',
        breakevenSubGood: 'cleared — your expected rate covers the fee',
        breakevenSubCaution: 'needed for the fee to pay for itself in savings alone',
        midLabel: 'Projected New CAC', midNum: fmtMoney(cacNew), midSub: fmtMoney(cac - cacNew) + ' less per customer',
        benefitSub: 'growth scenario · annualized ' + fmtMoney(netAnnualBenefit),
        barCurrentLabel: 'Current acquisition program', barOptLabel: 'Same customer volume, optimized',
        takeawayGood: 'This clears break-even — <b>Triple O pays for itself in cost savings alone</b>, saving roughly <b>' + fmtMoney(costSavingsSameVolume) + '/month</b> before counting the <b>' + fmtNum(Math.max(extraCustomers,0),1) + ' additional customer' + (Math.abs(extraCustomers-1)<0.05?'':'s') + '</b> a month worth approximately <b>' + fmtMoney(incrementalProfit) + '</b> in gross profit.',
        takeawayCaution: 'This hasn’t cleared break-even on cost savings alone at the current close rate target — but holding media spend steady adds roughly <b>' + fmtNum(Math.max(extraCustomers,0),1) + ' additional customer' + (Math.abs(extraCustomers-1)<0.05?'':'s') + '</b> a month, worth about <b>' + fmtMoney(netMonthlyBenefit) + '</b> in net monthly gross profit after the audience fee.',
      };
    }

    function computeRoas() {
      var spend = spendIndexToValue(els.spend.value);
      var currentRoas = parseFloat(els.currentRoas.value);
      var marginPct = parseFloat(els.margin.value);
      var margin = marginPct / 100;
      var expectedRoas = parseFloat(els.expectedRoas.value);

      var currentRevenue = spend * currentRoas;
      var newRevenueSameSpend = spend * expectedRoas;
      var incrementalRevenue = newRevenueSameSpend - currentRevenue;
      var incrementalProfit = incrementalRevenue * margin;
      var netMonthlyBenefit = incrementalProfit - AUDIENCE_FEE;
      var netAnnualBenefit = netMonthlyBenefit * 12;

      var spendNeededSameRevenue = currentRevenue / expectedRoas;
      var totalCostSameRevenue = spendNeededSameRevenue + AUDIENCE_FEE;
      var costSavingsSameRevenue = spend - totalCostSameRevenue;
      var clearsBreakEven = costSavingsSameRevenue >= 0;
      var breakEvenRoas = (spend > AUDIENCE_FEE) ? (currentRevenue / (spend - AUDIENCE_FEE)) : Infinity;

      return {
        spend: spend, breakEvenPct: breakEvenRoas, currentMetric: expectedRoas,
        netMonthlyBenefit: netMonthlyBenefit, netAnnualBenefit: netAnnualBenefit,
        clearsBreakEven: clearsBreakEven, costSavingsSameVolume: costSavingsSameRevenue,
        barCurrentAmt: spend, barCurrentSub: fmtMoney(currentRevenue) + ' revenue', barCurrentEach: fmtX(currentRoas) + ' ROAS',
        barOptAmt: totalCostSameRevenue, barOptSub: fmtMoney(spendNeededSameRevenue) + ' media + ' + fmtMoney(AUDIENCE_FEE) + ' audience',
        barOptEach: costSavingsSameRevenue >= 0 ? fmtMoney(costSavingsSameRevenue) + ' saved' : fmtMoney(-costSavingsSameRevenue) + ' above current',
        breakevenLabel: 'Break-Even ROAS', breakevenNum: isFinite(breakEvenRoas) ? fmtX(breakEvenRoas) : '—',
        breakevenSubGood: 'cleared — current ROAS target covers the fee',
        breakevenSubCaution: 'needed for the fee to pay for itself in efficiency alone',
        midLabel: 'Incremental Monthly Revenue', midNum: fmtMoney(incrementalRevenue), midSub: 'at the same ad spend',
        benefitSub: 'growth scenario · annualized ' + fmtMoney(netAnnualBenefit),
        barCurrentLabel: 'Current ad spend', barOptLabel: 'Same revenue, optimized spend',
        takeawayGood: 'This clears break-even — <b>Triple O pays for itself in spend efficiency alone</b>, saving roughly <b>' + fmtMoney(costSavingsSameRevenue) + '/month</b> before counting the additional <b>' + fmtMoney(Math.max(incrementalRevenue,0)) + '</b> in monthly revenue (~<b>' + fmtMoney(incrementalProfit) + '</b> gross profit) from holding spend steady.',
        takeawayCaution: 'This hasn’t cleared break-even on efficiency alone at the current ROAS target — but holding ad spend steady adds roughly <b>' + fmtMoney(Math.max(incrementalRevenue,0)) + '</b> in monthly revenue, worth about <b>' + fmtMoney(netMonthlyBenefit) + '</b> in net monthly gross profit after the audience fee.',
      };
    }

    function render() {
      var r = mode === 'leads' ? computeLeads() : computeRoas();

      document.getElementById('spend-label').textContent = mode === 'leads' ? 'Monthly media spend' : 'Monthly ad spend';
      document.getElementById('spend-val').textContent = fmtMoney(r.spend);
      if (mode === 'leads') {
        document.getElementById('cac-val').textContent = fmtMoney(parseFloat(els.cac.value));
        document.getElementById('profit-val').textContent = fmtMoney(parseFloat(els.profit.value));
        document.getElementById('currentClose-val').textContent = fmtNum(parseFloat(els.currentClose.value), 0) + '%';
        document.getElementById('expectedClose-val').textContent = fmtNum(parseFloat(els.expectedClose.value), 0) + '%';
      } else {
        document.getElementById('currentRoas-val').textContent = fmtX(parseFloat(els.currentRoas.value));
        document.getElementById('margin-val').textContent = els.margin.value + '%';
        document.getElementById('expectedRoas-val').textContent = fmtX(parseFloat(els.expectedRoas.value));
      }

      var beStat = document.getElementById('stat-breakeven');
      document.getElementById('breakeven-label').textContent = r.breakevenLabel;
      document.getElementById('breakeven-num').textContent = r.breakevenNum;
      beStat.classList.remove('state-good', 'state-caution');
      if (r.currentMetric >= r.breakEvenPct) {
        beStat.classList.add('state-good');
        document.getElementById('breakeven-sub').textContent = r.breakevenSubGood;
      } else {
        beStat.classList.add('state-caution');
        document.getElementById('breakeven-sub').textContent = r.breakevenSubCaution;
      }

      document.getElementById('mid-label').textContent = r.midLabel;
      document.getElementById('mid-num').textContent = r.midNum;
      document.getElementById('mid-sub').textContent = r.midSub;

      var benefitStat = document.getElementById('stat-benefit');
      benefitStat.classList.remove('state-good', 'state-caution');
      benefitStat.classList.add(r.netMonthlyBenefit >= 0 ? 'state-good' : 'state-caution');
      document.getElementById('benefit-num').textContent = fmtMoney(r.netMonthlyBenefit);
      document.getElementById('benefit-sub').textContent = r.benefitSub;

      document.getElementById('bar-current-label').textContent = r.barCurrentLabel;
      document.getElementById('bar-current-amt').textContent = fmtMoney(r.barCurrentAmt);
      document.getElementById('bar-current-sub').textContent = r.barCurrentSub;
      document.getElementById('bar-current-each').textContent = r.barCurrentEach;

      document.getElementById('bar-opt-label').textContent = r.barOptLabel;
      var maxBar = Math.max(r.barCurrentAmt, r.barOptAmt) || 1;
      document.getElementById('bar-current-fill').style.width = (r.barCurrentAmt / maxBar * 100) + '%';
      document.getElementById('bar-opt-fill').style.width = (r.barOptAmt / maxBar * 100) + '%';
      document.getElementById('bar-opt-amt').textContent = fmtMoney(r.barOptAmt);
      document.getElementById('bar-opt-sub').textContent = r.barOptSub;
      document.getElementById('bar-opt-each').textContent = r.barOptEach;

      var takeaway = document.getElementById('takeaway');
      if (r.clearsBreakEven) {
        takeaway.classList.remove('caution');
        takeaway.innerHTML = r.takeawayGood;
      } else {
        takeaway.classList.add('caution');
        takeaway.innerHTML = r.takeawayCaution;
      }
    }

    function setMode(next) {
      mode = next;
      document.getElementById('mode-leads').classList.toggle('active', mode === 'leads');
      document.getElementById('mode-leads').setAttribute('aria-selected', mode === 'leads');
      document.getElementById('mode-roas').classList.toggle('active', mode === 'roas');
      document.getElementById('mode-roas').setAttribute('aria-selected', mode === 'roas');
      document.querySelector('[data-mode-fields="leads"]').classList.toggle('active', mode === 'leads');
      document.querySelector('[data-mode-fields="roas"]').classList.toggle('active', mode === 'roas');
      render();
    }

    document.getElementById('mode-leads').addEventListener('click', function () { setMode('leads'); });
    document.getElementById('mode-roas').addEventListener('click', function () { setMode('roas'); });

    Object.keys(els).forEach(function (key) {
      els[key].addEventListener('input', render);
    });

    document.getElementById('reset-btn').addEventListener('click', function () {
      var d = DEFAULTS[mode];
      Object.keys(d).forEach(function (key) {
        if (!els[key]) return;
        els[key].value = key === 'spend' ? spendValueToIndex(d[key]) : d[key];
      });
      render();
    });

    render();
  })();
  </script>

  ${c.ctaBand({
    eyebrow: "Ready When You Are",
    title: "Want us to run these numbers on your real data?",
    body: "Book a 15-minute call and we'll build this out with your actual spend, CAC, and margins.",
    primary: { label: "Book a 15-Minute Call", href: "/contact/" },
    secondary: { label: "See Data & Intent Audiences", href: "/services/audience-intent/" },
  })}
  `;
}

module.exports = {
  meta: {
    title: "Cost / Benefit Calculator | Data & Intent Audiences | Triple O Agency",
    description: "See what an independent intent signal is worth on your own numbers — a live calculator for lead-gen CAC improvement or ecommerce ROAS growth.",
    path: "/services/audience-intent/cost-benefit-calculator/",
  },
  body,
};
