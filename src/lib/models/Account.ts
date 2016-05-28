import {User} from './User';

export default class Account {
    public user: User;

    constructor(
        public accountId: string,
        public userId: string,

        public balance: number
    ) { }
}
