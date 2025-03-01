module.exports = {
  params: {
    designator: "B", // for Button
    side: "F",
    label: "Outline",
  },
  body: (p) => `
    
    (module E73:SW_TACT_ALPS_SKQGABE010 (layer F.Cu) (tstamp 5BF2CC94)

        (descr "Low-profile SMD Tactile Switch, https://www.e-switch.com/product-catalog/tact/product-lines/tl3342-series-low-profile-smt-tact-switch")
        (tags "SPST Tactile Switch")

        ${p.at /* parametric position */}
        
        ${"" /* outline */}
        (fp_line (start 15 6) (end 15 -6) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start 15 -6) (end -15 -6) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -15 -6) (end -15 6) (layer ${p.side}.SilkS) (width 0.15))
        (fp_line (start -15 6) (end 15 6) (layer ${p.side}.SilkS) (width 0.15))

    )
    
    `,
};
