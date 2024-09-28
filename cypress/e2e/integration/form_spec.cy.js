describe('フォーム送信テスト', () => {
  it('フォームを送信してGolang APIと連携する', () => {
    cy.visit('http://localhost:3000/');  // フロントエンド（Next.js）にアクセス
    cy.get('input[name="username"]').type('testuser');  // ユーザー名を入力
    cy.get('form').submit();  // フォーム送信

    // ゴランバックエンドAPIとの連携結果を検証
    cy.get('.response-message').should('contain', 'ログイン成功');
  });
});
