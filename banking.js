class BankAccount {
	constructor(firstName, lastName, accountNumber, accountBalance = 1000) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.accountNumber = accountNumber;
		this.accountBalance = accountBalance;
	}

	balance() {
		return this.accountBalance;
	}

	withdraw(amount) {
		//
	}

	deposit(amount) {
		//
	}

}



class SavingsAccount extends BankAccount {

	withdraw(amount) {
		if (amount > this.accountBalance) {
			return "You cannot withdraw more than your account balance";
		}

		else if (amount <= 0) {
			return "Invalid withdrawal amount";
		}

		else {
			this.accountBalance -= amount;
			return this.accountBalance;
		}
	}

	deposit(amount) {
		if (amount <= 0) {
			return "Invalid amount";
		}

		else {
			this.accountBalance += amount;
			return this.accountBalance;
		}
	}

}


class CurrentAccount extends BankAccount {
	withdraw(amount) {
		if (amount > this.accountBalance) {
			return "You cannot withdraw beyond your account balance";
		}

		else if (amount <= 0) {
			return "Invalid amount";
		}

		else {
			this.accountBalance -= amount;
			return this.accountBalance;
		}
	}
}