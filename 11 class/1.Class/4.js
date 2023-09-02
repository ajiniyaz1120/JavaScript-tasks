class Group {
    constructor(options){
        this.name = options.name;
        this.owner = options.owner;
        this.admins = options.admins;
        this.active = options.active;
        this.members = options.members;
        this.established = options.established;
    }

    assignAdmins(member){
        if (this.members.indexOf(member) != -1) {
            this.admins.push(member);
        }
    }

    deleteAdmins(member){
        this.admins = this.admins.filter(function (el){
            return member != el;
        });
    }
}

class WebGroup extends Group {
    constructor(options){
        super(options);
        this.status = options.status;
    }

    assignAdmins(member){
        super.assignAdmins(member);
        console.log(this.admins);
    }

    deleteAdmins(member){
        super.deleteAdmins(member);
        console.log(this.admins);
    }
}

var webGroup = new WebGroup({
    name: 'Web developers',
    owner: 'Admin',
    admins: [],
    active: true,
    status: 'public',
    members: ['Aaa','Bbb','Ccc'],
    established: new Date(2020, 01, 01)
});

console.log(webGroup.assignAdmins());
console.log(webGroup.deleteAdmins());