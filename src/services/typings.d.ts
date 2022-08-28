// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl: string;
    gender: string;
    email: string;
    userRole: number;
    score: number;
    monthScore: number;
    selfIntroduction: string;
    createTime: Date;
  };

  type ResetScore = {
    id: number;
    userRole: number;
    userPassword: number;
  };
  type SearchTopic = {
    searchTitle: any;
  };

  type SearchUser = {
    current: number,
    pageSize: number,
    username: string;
    userAccount: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type UpdateResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type RegisterResult = string;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };


  type LoginParams = {
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type RegisterParams = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
    type?: string;
  };

  type ChangePasswordParams = {
    id: number,
    oldPassword: string,
    newPassword: string,
    newCheckPassword: string,
  };

  type ChangeScoreParams = {
    score: number;
    id: number;
  };


  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };
  type TopicIdType = {
    topicId: number;
  };
  type UserIdType = {
    userId: number;
  };
  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
