describe('フォーム送信テスト', () => {
  it('フォームを送信してGolang APIと連携する', () => {
    // APIリクエストをキャプチャ
    cy.intercept('POST', '/api/submit').as('formSubmit');

    // フロントエンド（Next.js）にアクセス
    cy.visit('http://localhost:3000/');

    // フォームに入力
    cy.get('input[name="username"]').type('testuser');

    // フォーム送信
    cy.get('form').submit();

    // リクエストの完了を待つ
    cy.wait('@formSubmit').its('response.statusCode').should('eq', 200);

    // APIからのレスポンスが正しいか確認
    cy.get('.response-message').should('contain', 'フォームデータが送信されました！');
  });
});
