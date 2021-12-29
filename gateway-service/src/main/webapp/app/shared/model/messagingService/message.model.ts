export interface IMessage {
  id?: number;
  messageText?: string | null;
}

export const defaultValue: Readonly<IMessage> = {};
