var Group = function (options) {
    this.name = options.name;
    this.owner = options.owner;
    this.admins = options.admins;
    this.active = options.active;
    this.members = options.members;
    this.established = options.established;

    this.assignAdmins = function (member) {
        if (this.members.indexOf(member) != -1) {
            this.admins.push(member);
        }
    };

    this.deleteAdmins = function(member){
        this.admins = this.admins.filter(function(el){
            return member != el;
        });
    };
}

var WebGroup = function (Obj){
    Object.setPrototypeOf(WebGroup, Obj);
    Object.setPrototypeOf(WebGroup.prototype, Obj.prototype);

    function WebGroup(options) {
        Object.getPrototypeOf(WebGroup).call(this,options);

        this.status = options.status;

        this.assignAdmins = function (member){
            new Obj(options).assignAdmins.call(this);
            console.log(this.admins);
        };

        this.deleteAdmins = function (member){
            new Obj(options).assignAdmins.call(this);
            console.log(this.admins);
        };
    }
    return WebGroup;
}(Group);

var webGroup = new WebGroup({
    name: 'Web developers',
    owner: 'Admin',
    admins: [],
    active: true,
    status: 'public',
    members: ['John','Tom','Stark'],
    established: new Date(2020,01,01)
});

console.log(webGroup);
webGroup.assignAdmins('John')
webGroup.deleteAdmins('Tom')