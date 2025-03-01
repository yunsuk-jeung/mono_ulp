module.exports = {
  params: {
    designator: "B", // for Button
    side: "F",
    plus: undefined,
    minus: undefined,
    label: "Button",
  },
  body: (p) => `
    
    (module E73:SW_TACT_ALPS_SKQGABE010 (layer F.Cu) (tstamp 5BF2CC94)

        (descr "Low-profile SMD Tactile Switch, https://www.e-switch.com/product-catalog/tact/product-lines/tl3342-series-low-profile-smt-tact-switch")
        (tags "SPST Tactile Switch")

        ${p.at /* parametric position */}
        
        ${"" /* outline */}
        (fp_line (start 3 1) (end 3 -1) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 3 -1) (end -3 -1) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -3 -1) (end -3 1) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -3 1) (end 3 1) (layer ${p.side}.SilkS) (width 0.15))
        
        (fp_line (start -3 -2) (end -3 -1) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -3.5 -1.5) (end -2.5 -1.5) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 3.5 -1.5) (end 2.5 -1.5) (layer ${p.side}.SilkS) (width 0.15))

        ${"" /* pins */}
        (pad 1 smd rect (at -3.1 0 ${p.r}) (size 1.8 1.8) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.plus})
        (pad 2 smd rect (at 3.1 0 ${p.r}) (size 1.8 1.8) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.minus})
    )
    
    `,
};
