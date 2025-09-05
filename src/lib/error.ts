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
};
