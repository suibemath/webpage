/**
 * 额外权限（版主）
 */


/**
 * 当前登录用户信息
 */
export interface CurrentUser {
  id: number;
  username: string;
  userAccount: string;
  avatarUrl: string;
  gender: string;
  email: string;
  userRole: number;
  selfIntroduction: string;
  score: number;
  monthScore: number;
  createTime: Date;
}

/**
 * 简略用户信息（脱敏）
 */
export interface SimpleUser {
  _id: string;
  avatarUrl: string;
  nickName: string;
  score: number;
  authority: string;
}

export interface RankUser extends SimpleUser {
  totalScore: number;
}
