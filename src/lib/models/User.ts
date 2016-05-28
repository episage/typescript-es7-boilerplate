export class User {
    constructor(
        public userId: string,
        
        public email: string,
        public displayName: string,
        public password:string,
        public passwordSalt:string
    ) { }
}
