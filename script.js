let condition = false;
let title = document.querySelector(".c-title");
let UniqueId = 0;

class Client {
    constructor(
        fullName = "no data",
        adress = "no data",
        phone = "no data"
    ) {
        this.id = ++UniqueId;
        this.fullName = fullName;
        this.adress = adress;
        this.phone = phone;
    }

    setInfo() {
        let info = {
            id: this.id,
            fullName: this.fullName,
            adress: this.adress,
            phone: this.phone
        };

        localStorage.setItem(this.id, JSON.stringify(info));

        console.log(` ${info.fullName} now lives in cozy localStorage`);
    }

    getInfo() {
        let info = JSON.parse(localStorage.getItem(this.id));

        console.log(`Available user info: Name: ${info.fullName}, adress: ${info.adress}, phone:  ${info.phone}`);
    }

    deleteInfo() {
        localStorage.removeItem(this.id);

        console.log("Operation is successful. User left us:(");
    }
}

class Card {
    constructor(
        number = "no data",
        expiryDate = "no data",
        cvv = "no data",
        client = "no data"
    ) {
        this.number = number;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
        this.client = client;
    }

    setInfo() {
        let info = {
            number: this.number,
            expiryDate: this.expiryDate,
            cvv: this.cvv,
            client: this.client
        };

        localStorage.setItem(this.number, JSON.stringify(info));

        console.log(`the card ${info.number} was added to the profile`);
    }

    getInfo() {
        let info = JSON.parse(localStorage.getItem(this.number));

        console.log(` Card number: ${info.number}; Expiry date: ${info.expiryDate}; cvv is secret, because client ${info.client} hide this information`);
    }

    deleteInfo() {
        localStorage.removeItem(this.number);

        console.log("The card was removed from the profile");
    }
}

class Payment {
    constructor(
        paymentID = "no data",
        senderCard = "no data",
        receiverCard = "no data",
        amount = "no data",
        currency = "no data",
        date = "no data"
    ) {
        this.paymentID = paymentID;
        this.senderCard = senderCard;
        this.receiverCard = receiverCard;
        this.amount = amount;
        this.currency = currency;
        this.date = date;
    }

    setInfo() {
        let info = {
            paymentID: this.paymentID,
            senderCard: this.senderCard,
            receiverCard: this.receiverCard,
            amount: this.amount,
            currency: this.currency,
            date: this.date
        };

        localStorage.setItem(this.paymentID, JSON.stringify(info));

        console.log("Payment sucsessfully stored");
    }

    getInfo() {
        let info = JSON.parse(localStorage.getItem(this.paymentID));

        console.log(`This payment was ${info.date} for ${info.amount} from ${info.senderCard} to ${info.receiverCard}`);
    }

    deleteInfo() {
        localStorage.removeItem(this.paymentID);

        console.log("Payment sucsessfully deleted");
    }
}

function switchCondition() {
    condition = !condition;
}

function changeBackground() {
    if(condition) {
        title.style.backgroundColor = "cyan";
    } else {
        title.style.backgroundColor = "yellow";
    }
}

setInterval(()=>{
    switchCondition();
    changeBackground();
},600);

