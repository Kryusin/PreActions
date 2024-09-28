"use client"
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // フォームデータの作成
    const formData = {
      username,
      email,
      password,
    };

    try {
      // Golang の API にデータを送信
      const response:any = await axios.post('http://localhost:8080/api/submit', formData);
      setMessage(response.message);
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  return (
    <div>
      <h1>フォーム送信</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ユーザー名:</label>
          <input
            name='username'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>メールアドレス:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>パスワード:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">送信</button>
      </form>
      <div className='response-message'>{message}</div>
    </div>
  );
}

