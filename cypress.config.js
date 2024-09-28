const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // テストするアプリケーションのURL
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // テストファイルのパターン
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true, // ビデオの保存を有効化
  screenshotsFolder: 'cypress/screenshots', // スクリーンショットの保存先
  videosFolder: 'cypress/videos', // ビデオの保存先
  defaultCommandTimeout: 10000, // コマンドのタイムアウト
  requestTimeout: 5000, // HTTPリクエストのタイムアウト
});
