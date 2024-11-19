/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the pages folder
    "./src/components/**/*.{js,ts,jsx,tsx}", // Include all component files
    "./src/app/**/*.{js,ts,jsx,tsx}", // Include app directory if you're using it
  ],
  theme: {
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        imageGradient:
          "linear-gradient(179.91deg, rgba(0, 0, 0, 0) 0.08%, #1D1D1D 80.65%)",
        "hero-gradient": "linear-gradient(180deg, #831111 70.57%, #FFF 100%)",
        
      },
      borderColor: {
        borderLight: "rgba(217, 217, 217, .5)",
      },
      fontSize: {
        xs: ["11px", "14px"],
        sm: ["12px", "14px"],
        semiMd: ["13px", "16px"],
        md: ["16px", "19px"],
        lg: ["24px", "28px"],
        content: ["20px", "24px"],
        cardText: ["14px", "18px"],
        btnText: ["18px", "21px"],
        heading: ["48px", "54px"],
        subHeading: ["32px", "36px"],
        cardVal: ["28px", "33px"],
        questionSize: ["20px", "27px"],
        altMd: ["15px", "18px"],
        altXs: ["10px", "13px"],
        headlineText: ["19px", "24px"],
        xxl: ["56px", "54px"],
      },
      colors: {
        primary: "#000000",
        altBack: "#303030",
        maroon: "#800000",
        primaryMaroon: "#831111",
        grey: "#686868",
        secondGrey: "#838383",
        bgGrey: "#f4f4f4",
        bgOrange: "#e9ddcf",
        darkOrange: "#624316",
        semiGrey: "#a9a9a9",
        inputGrey: "#eae9ea",
        danger: "#B60400",
        linkColor: "#407BFF",
        silver: "#838383",
        greyInput: "#f5f5f7",
        yellow: "#FFD80C",
        altGrey: "#BFBFBF",
        lightGrey: "#EAEAEA",
        success: "#18C31F",
        lightGreen: "#C8E6C9",
        green: "#2AC71C",
        brown: "#F2ECE5",
        altGrey: "#5F5E5E",
        whatsappGreen: "#48AC4C",
        darkGrey: "#706F6F",
        lightGrey: "#E4E4E4",
        selectedTab: "#464950",
        lightSilver: "#DFDFDF",
        headerBg: "#3C3C3C",
        semiLightGrey: "#E6E6E6",
        cream: "#F8E6A6",
        darkCream: "#FFD771",
        slateGrey: "#F2F2F2",
        slateDarkGrey: "#C9C6C6",
        primaryRed: "#C71C1C",
        linkRed: "#DC1414",
        lightSlate: "#DADADA",
        primaryBlue: "#1F85DE",
        primaryDark: "#3D3838",
        iconColor: "#808191",
        skyBlue: "#B3DFF1",
        darkBlue: "#1877F2",
        pink: "#FCEAEA",
        mainBg: "#F5F6FB",
        golden: "#ECB016",
        lightBlue: "#F1F2F7",
        baseBlack: "#0F172A",
      },
      boxShadow: {
        "3xl": "0 5px 15px rgba(0, 0, 0, 0.1)",
        "4xl": "0px 5px 15px rgba(48, 48, 48, 0.1)",
        inset: "0px -5px 15px rgba(0, 0, 0, 0.1);",
        dark: "0px 4px 4px  rgba(0, 0, 0, 0.25)",
        header: "0px 0px 10px rgba(0, 0, 0, 0.25);",
        card: "0px 0px 10px rgba(0, 0, 0, 0.10);",
        bottomShadow: "0px 2px 15px rgba(0, 0, 0, 0.10);",
        regular: "0px 1px 5px  rgba(0, 0, 0, 0.25)",
        popup: "0px 1px 15px rgba(0, 0, 0, 0.25)",
        boxed: "0px 0px 5px rgba(0, 0, 0, 0.25)",
        button: "0px 0px 15px rgba(0, 0, 0, 0.25)",
        mapCard: "0px 0px 32px rgba(0, 0, 0, 0.25);",
        pinkShadow: "0px 1.171px 1.171px  rgba(199, 28, 28, 0.25)",
        redShadow: "0px 1px 5px 0px rgba(199, 28, 28, 0.25)",
        digitalBusinessCardShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
        cardShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.25)",
        lightButtonShadow: "0px 1.646px 3.293px 0px rgba(139, 105, 105, 0.43)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
        georgia: ["Georgia"],
        proxima: ["var(--font-proximaNova)"],
      },
      dropShadow: {
        "2xl": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        container: "1512px",
      },
      dropShadow: {
        "3xl": "0px 5px 15px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        custom: "0px 5.542px 5.542px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};