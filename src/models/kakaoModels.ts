export interface KakaoLoginResponse {
  token: KakaoToken;
  user: KakaoUser;
}

export interface Token {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export interface KakaoToken extends Token {
  refresh_token: string;
  scope: string;
}

export interface KakaoUser {
  id: number;
  connected_at: string;
  kakao_account: KakaoAccount;
}

export interface KakaoAccount {
  profile_image_needs_agreement: boolean;
  profile: KakaoProfile;
  name_needs_agreement: boolean;
  name: string;
  has_email: boolean;
  email_needs_agreement: boolean;
  is_email_valid: boolean;
  is_email_verified: boolean;
  email: string;
  has_birthyear: boolean;
  birthyear_needs_agreement: boolean;
  birthyear: string;
  has_gender: boolean;
  gender_needs_agreement: boolean;
  gender: string;
}

export interface KakaoProfile {
  thumbnail_image_url: string;
  profile_image_url: string;
  is_default_image: boolean;
}
