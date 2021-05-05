module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: '/dist',
  },
  plugins: ['plugin-css-export-string'],
};
