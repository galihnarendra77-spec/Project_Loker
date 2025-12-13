tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#359EFF",
                "background-light": "#f5f7f8",
                "background-dark": "#0f1923"
            },
            fontFamily: {
                display: "Inter"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            animation: {
                "fade-in": "fadeIn 1s ease-out forwards"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" }
                }
            }
        }
    }
};