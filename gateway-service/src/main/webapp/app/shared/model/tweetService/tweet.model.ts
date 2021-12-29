export interface ITweet {
  id?: number;
  content?: string | null;
}

export const defaultValue: Readonly<ITweet> = {};
