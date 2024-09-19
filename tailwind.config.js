/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#4C30FF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        1152: "1152px", //  max-w-1152
      },
      backgroundImage: {
        "text-gradient":
          "linear-gradient(271deg, #80D8F8 0.33%, #6DBEEB 4.26%, #5097D9 11.14%, #3976C9 18.02%, #275DBE 25.89%, #1A4BB5 33.75%, #1241B0 41.61%, #103EAF 51.44%, #143FB1 59.3%, #2244BA 68.15%, #394CC8 77%, #5958DB 86.82%, #8266F4 97.64%, #8969F8 98.62%)",
      },
    },
  },
  plugins: [],
};
