// Nice!NanoV2
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    designator: "MCU",
    orientation: "down",
    RAW: { type: "net", value: "RAW" },
    GND: { type: "net", value: "GND" },
    RST: { type: "net", value: "RST" },
    VCC: { type: "net", value: "VCC" },
    P031: { type: "net", value: "D21" },
    P029: { type: "net", value: "D20" },
    P002: { type: "net", value: "D19" },
    P115: { type: "net", value: "D18" },
    P113: { type: "net", value: "D15" },
    P111: { type: "net", value: "D14" },
    P010: { type: "net", value: "D16" },
    P009: { type: "net", value: "D10" },
    P006: { type: "net", value: "D01" },
    P008: { type: "net", value: "D00" },
    P017: { type: "net", value: "D02" },
    P020: { type: "net", value: "D03" },
    P022: { type: "net", value: "D04" },
    P024: { type: "net", value: "D05" },
    P100: { type: "net", value: "D06" },
    P011: { type: "net", value: "D07" },
    P104: { type: "net", value: "D08" },
    P106: { type: "net", value: "D09" },
    P101: { type: "net", value: "P101" },
    P102: { type: "net", value: "P102" },
    P107: { type: "net", value: "P107" },
  },
  body: (p) => {
    const standard = `
        (module nice_nano (layer F.Cu) (tedit 6058B206)
        ${p.at /* parametric position */}

        ${"" /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.2 1.2) (thickness 0.2032))))

        ${"" /* illustration of the (possible) USB port overhang */}
        (fp_line (start -14.224 -3.556) (end -14.224 3.81) (layer Dwgs.User) (width 0.2))
        (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.2))
        (fp_line (start -19.304 3.81) (end -19.304 -3.556) (layer Dwgs.User) (width 0.2))
        (fp_line (start -19.304 -3.556) (end -14.224 -3.556) (layer Dwgs.User) (width 0.2))

        ${"" /* component outline */}
        (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.381))
        (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.381))
        `;
    function pins(def_neg, def_pos) {
      return `
          ${"" /* pin names */}
          (fp_text user RAW (at -13.97 ${def_pos}5.473715 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user GND (at -11.43 ${def_pos}5.454667 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user RST (at -8.89 ${def_pos}5.588 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user VCC (at -6.35 ${def_pos}5.537191 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 031 (at -3.81 ${def_pos}5.537191 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 029 (at -1.27 ${def_pos}5.537191 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 002 (at 1.27 ${def_pos}5.537191 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 115 (at 3.81 ${def_pos}5.537191 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 113 (at 6.35 ${def_pos}5.537191 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 111 (at 8.89 ${def_pos}5.537191 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 010 (at 11.43 ${def_pos}5.537191 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

          (fp_text user 006 (at -13.97 ${def_neg}5.53719 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 008 (at -11.5 ${def_neg}5.53719 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user GND (at -8.89 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user GND (at -6.35 ${def_neg}5.461 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 017 (at -3.8 ${def_neg}5.53719 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 020 (at -1.2 ${def_neg}5.53719 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 022 (at 1.3 ${def_neg}5.53719 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 024 (at 3.81 ${def_neg}5.53719 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 100 (at 6.35 ${def_neg}5.53719 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
          (fp_text user 104 (at 11.43 ${def_neg}5.53719 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

          ${"" /* and now the actual pins */}
          (pad 1 smd circle (at -13.97 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P006.str})
          (pad 2 smd circle (at -11.43 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P008.str})
          (pad 3 smd circle (at -8.89 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.GND.str})
          (pad 4 smd circle (at -6.35 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.GND.str})
          (pad 5 smd circle (at -3.81 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P017.str})
          (pad 6 smd circle (at -1.27 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P020.str})
          (pad 7 smd circle (at 1.27 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P022.str})
          (pad 8 smd circle (at 3.81 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P024.str})
          (pad 9 smd circle (at 6.35 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P100.str})
          (pad 10 smd circle (at 8.89 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P011.str})
          (pad 11 smd circle (at 11.43 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P104.str})
          (pad 12 smd circle (at 13.97 ${def_neg}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P106.str})

          (pad 13 smd circle (at 13.97 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P009.str})
          (pad 14 smd circle (at 11.43 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P010.str})
          (pad 15 smd circle (at 8.89 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P111.str})
          (pad 16 smd circle (at 6.35 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P113.str})
          (pad 17 smd circle (at 3.81 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P115.str})
          (pad 18 smd circle (at 1.27 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P002.str})
          (pad 19 smd circle (at -1.27 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P029.str})
          (pad 20 smd circle (at -3.81 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.P031.str})
          (pad 21 smd circle (at -6.35 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.VCC.str})
          (pad 22 smd circle (at -8.89 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.RST.str})
          (pad 23 smd circle (at -11.43 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.GND.str})
          (pad 24 smd circle (at -13.97 ${def_pos}7.62) (size 1.7526 1.7526) (drill 1.0922) (layers F.Cu F.SilkS F.Mask) ${p.RAW.str})
          `;
    }
    if (p.orientation == "down") {
      return `
            ${standard}
            ${pins("-", "")})
            `;
    } else {
      return `
            ${standard}
            ${pins("", "-")})
            `;
    }
  },
};
