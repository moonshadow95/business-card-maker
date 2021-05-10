import {
  facebookProvider,
  firebaseAuth,
  githubProvider,
  googleProvider,
} from './firebase';

class AuthService {
  // 사용자 로그인
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  // 현재 로그인한 사용자 가져오기
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  // 로그아웃
  logout() {
    firebaseAuth.signOut();
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      case 'Facebook':
        return facebookProvider;
      default:
        throw new Error(`Not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
