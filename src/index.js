import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import AuthService from './service/auth_service';
import ImgUploader from './service/img_uploader';
import ImgFileInput from './components/img_file_input/img_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imgUploader = new ImgUploader();
const FileInput = memo((props) => (
  <ImgFileInput {...props} imgUploader={imgUploader} />
));
//
// 새로운 props를 전달하고싶다면 하위컴포넌트를 변경할 필요 없이
// 이곳에서만 넣어주면 전달되기 때문에 컴포넌트로 만들어서 전달한다.
// <Dependency Injection>
// 컴포넌트 props인 경우 대문자로 시작

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
