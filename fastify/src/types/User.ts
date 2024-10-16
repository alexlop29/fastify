export type User = {
  id: number;
  name: string;
};

export interface UserV2 extends User {
  firstName: string;
  lastName: string;
  alias: string;
  aliases: string[];
}
