export interface IAuthInfo {
  email: String;
  pws: String;
  name: String;
  description: String;
}

export interface IReponseInfo {
  _id: String;
  email: String;
  name: String;
  description: String;
}

export interface IMessageInfo{
  id: String;
  author: String;
  msg: String
}
