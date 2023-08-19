let group = Object.create({},{
    groupName: {
        value: 'Web developers',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    owner:{
        value: 'Admin',
        enumerable: true,
    },
    admins:{
        value:[],
        writable: true,
        enumerable: true,
        configurable: true,
    },
    established:{
        valure: new Date(2020,01,01),
        enumerable: true,
    },
    active:{
        value:true,
        writable:true,
        enumerable: true,
        configurable: true,
    },
    status:{
        value: ['Aaa','Bbb','Ccc'],
        writable: true,
        enumerable: true,
        configurable: true,
    },
    members: {
        value: ['Aaa','Bbb','Ccc'],
        writable: true,
        enumerable: true,
        configurable: true,
    },
    
    assignAdmins:{
        value: function(member){
            if (this.members.indexOf(member) != -1) {
                this.admins.push(member);
            }
        },
        writable: true,
        enumerable: true,
        configurable: true,
    },

    deleteAdimns: {
        value: function (member){
            this.admins = this.admins.filter(function (el){
                return member != el;
            })
        },
        writable: true,
        enumerable: true,
        configurable: true,
    }
});

group.assignAdmins('Aaa');
group.assignAdmins('Bbb');
console.log(JSON.stringify(group, null, 2));

group.deleteAdimns('Aaa');
console.log(JSON.stringify(group, null, 2));