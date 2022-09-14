import bcrypt from "bcrypt";
import appconfig from "../config/appconfig";


class Bcrypt {
    
    saltRound: number | string

    constructor(saltRound: string | number) {
        this.saltRound = saltRound;
    }

    async hash(plainText: string, saltRound: number | undefined): Promise<string> {
        return await bcrypt.hash(plainText, saltRound || this.saltRound)
    }

    async compare(plainText: string, hashedText: string): Promise<boolean> {
        return await bcrypt.compare(plainText, hashedText);
    }
}

export default new Bcrypt(appconfig.auth.saltRounds);