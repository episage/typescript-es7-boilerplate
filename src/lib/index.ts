import {CalculatorClass as Calculator} from './CalculatorClass';
import * as Models from './Models';
import {UniqueIdGenerator as Id} from './Utils/UniqueIdGenerator';

let sampleAwaitUsage = async () => {
    let bankClient = new Models.UserModel(
        Id.generate(), 
        "sample@example.io",
        "Tom Boy",
        "123456",
        "r4nd0m s5lt");

    let depositCalculator = new Calculator(500, 10);
    let balance = await depositCalculator.addNumbers();
    
    let thisGuysAccount = new Models.AccountModel(
        Id.generate(),
        bankClient.userId,
        balance
    );
    
    thisGuysAccount.user = bankClient;
    
    return "something";
}

sampleAwaitUsage();
