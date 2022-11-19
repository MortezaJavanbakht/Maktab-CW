class UserApp {
    constructor(appname) {
        this.appName = appname;
        this.users = []
    }

    getData() {
        return this.users ?? []
    }

    setData(data) {
        this.users = data;
        this.render()
    }

    addUser(firstName = "", lastName, mobileNumber, phoneNumber = "", image = "", birthday) {
        const newUser = new User(this.users.length + 1, firstName, lastName, mobileNumber, phoneNumber, image, birthday)
        const users = this.getData();
        users.push(newUser);
        this.setData(users);
        this.render()
    }

    addVIPUser(firstName , lastName, mobileNumber, phoneNumber, image, birthday, email, wallet) {
        const newUser = new vipUser(this.users.length + 1, firstName, lastName, mobileNumber, phoneNumber, image, birthday, email, wallet)
        const users = this.getData();
        users.push(newUser);
        this.setData(users);
        this.render()
    }

    editUser(id, firstName = "", lastName, mobileNumber, phoneNumber = "", image = "", birthday) {
        const users = this.getData();
        const targetUser = users.filter(item => item.id === id)[0];
        // console.log(targetUser);
        targetUser.edit(firstName, lastName, mobileNumber, phoneNumber, image, birthday)
        this.setData(users)
        this.render()
    }

    deleteUser(id) {
        const users = this.getData();
        const newUsers = users && users.filter(item => item.id !== id);
        this.setData(newUsers);
        this.render()
    }

    render(){
        const users = this.getData();
        const tableUsers = document.getElementById('usertable_tbody')
        tableUsers.innerHTML = "";
        users.forEach(item => {
            const trElement = document.createElement('tr');
            const idElem = document.createElement('td')
            idElem.innerText = item.id;
            trElement.append(idElem)
            const firstNameElem = document.createElement('td')
            firstNameElem.innerText = item.fistname;
            trElement.append(firstNameElem)
            const lastNameElem = document.createElement('td')
            lastNameElem.innerText = item.lastname;
            trElement.append(lastNameElem);
            const mobileElem = document.createElement('td')
            mobileElem.innerText = item.mobileNumber;
            trElement.append(mobileElem)
            const isVipElem = document.createElement('td')
            const inputElem = document.createElement('input')
            inputElem.type = "checkbox";
            if(item instanceof vipUser) inputElem.setAttribute('checked', "");
            inputElem.disabled = true;
            isVipElem.append(inputElem)
            trElement.append(isVipElem)
            tableUsers.append(trElement)
        })
    }
}

class User {
    constructor(id, firstName = "", lastName, mobileNumber, phoneNumber = "", image = "", birthday) {
        // this.genID();
        this.id = id
        this.fistname = firstName;
        this.lastname = lastName;
        this.mobileNumber = mobileNumber;
        this.phoneNumber = phoneNumber;
        this.image = image;
        this.birthday = birthday;
    }

    genID() {
        this.id = Date.now().toString(36);
    }

    edit(firstName = "", lastName, mobileNumber, phoneNumber = "", image = "", birthday) {
        this.fistname = firstName;
        this.lastname = lastName;
        this.mobileNumber = mobileNumber;
        this.phoneNumber = phoneNumber;
        this.image = image;
        this.birthday = birthday;
    }
}

class vipUser extends User{
    constructor(firstName, lastName, mobileNumber, phoneNumber, image, birthday, email) {
        super(firstName, lastName, mobileNumber, phoneNumber, image, birthday);
        this.email = email;
        this.wallet = 0;
    }
}

let myapp = new UserApp('myApp');
myapp.addUser("morteza", 'jj', "41646", undefined, undefined, "2011/02/03");
myapp.addUser("shahram", 'hz', "13165464", undefined, undefined, "2022/11/17");
myapp.addUser("nima", 'sm', "465464646", undefined, undefined, "2020/02/07");
myapp.addVIPUser("ali", 'sm', "465464646", "46464654646", "http://sdfsf", "2020/02/07", 'ali@hossie.com', 0);
// console.log(myapp.users);
// myapp.editUser(1, "ali", "ebi", "41646", "4646464", undefined, "2011/03/30")
// myapp.deleteUser(1);
console.log(myapp.users);
// myapp.render();


