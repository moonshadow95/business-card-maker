import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
// 이런식으로 전달하면 쓸데없이 많은 서비스를 전달하지 않을 수 있다.
// 조금 더 많은 서비스를 필요로 하면 여기에서만 추가해주면 된다.
// *dependency injection*

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
