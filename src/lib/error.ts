// 定义常见错误类型
// export type AppwriteErrorType =
//   | "user_invalid_credentials"
//   | "user_blocked"
//   | "general_rate_limit_exceeded"
//   | "storage_file_not_found"
//   | "row_not_found";

// 错误映射表
export const errorMessages: Record<string, string> = {
  user_invalid_credentials:
    "The email or password you entered is incorrect. Please try again.",
  user_blocked:
    "Your account has been temporarily suspended. Please contact customer service.",
  general_rate_limit_exceeded: "Please try again after a while.",
  storage_file_not_found: "The file you requested is not available.",
  row_not_found: "The information you are looking for cannot be found.",
  password_recently_used:
    "The password you entered has been used recently. Please choose a different password.",
  user_already_exists:
    "An account with this email already exists. Please use a different email or log in.",
  user_email_already_exists:
    "An account with this email already exists. Please use a different email or log in.",
  user_phone_already_exists:
    "An account with this phone number already exists. Please use a different phone number or log in.",
  team_invite_already_exists:
    "An invitation has already been sent to this email. Please check your inbox or use a different email.",
  team_already_exists:
    "A team with this name already exists. Please choose a different name.",
  general_argument_invalid:
    "Invalid parameters provided. Please check your input and try again.",
  general_exception: "An unexpected error occurred. Please try again later.",
  users_session_not_found: "Session not found. Please log in again.",
  users_email_not_verified:
    "Email not verified. Please verify your email to proceed.",
  users_phone_not_verified:
    "Phone number not verified. Please verify your phone number to proceed.",
  users_invalid_session: "Invalid session. Please log in again.",
  users_invalid_token: "Invalid token. Please request a new one and try again.",
  users_token_expired:
    "Token has expired. Please request a new one and try again.",
  users_user_not_found:
    "User not found. Please check your credentials and try again.",
  users_account_already_verified: "Account already verified. Please log in.",
  users_password_reset_invalid:
    "Invalid password reset request. Please try again.",
  users_oauth_provider_already_linked:
    "This OAuth provider is already linked to your account.",
  users_oauth_account_not_linked:
    "This OAuth account is not linked to any user. Please sign up or link it to your account.",
  users_phone_invalid:
    "Invalid phone number format. Please check and try again.",
  users_email_invalid: "Invalid email format. Please check and try again.",
};
