module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        colors:{
          darkbg:"#1E293B"
        },
        screens: {
          "other": {'min': '340px', 'max': '1200px'},
        }
      },
    },
    plugins: [],
}