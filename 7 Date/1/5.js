// В анкете заполняется информация о 5 сотрудниках:фамилия, дата заключения контракта и срок(в годах), на какой заключён контракт.Напишите сценарий,определяюший сотрудников, контракт с которыми заканчивается в выходной день.

// Sorawnamada 5 dana xızmetker haqqında maǵlıwmatlar ámeldegi: famılıyası, shártnama dúzilgen sánesi hám shártnama dúzilgen dáwir (jıllarda ) Shártnaması dem alıw kúninde tawsılatuǵın xızmetkerlerdi belgileytuǵın skriptti jazıń.

let array = [
    ["Berdaq", '2020.06.18', 5],
    ['Dastan', '2021.07.11', 2],
    ['Jusip', '2022.03.25', 3],
    ['Alpamıs', '2022.08.23', 1],
    ['Ajiniyaz', '2023.10.22', 5]
  ];
  
  function weekDay(date) {
    let dayOfWeek = date.getDay(); 
    return dayOfWeek === 0 || dayOfWeek === 6; 
  }

  for (let i = 0; i < array.length; i++) {
    let employee = array[i];
    let employeeName = employee[0]
    let contractEndDate = new Date(employee[1]);
    let contractYears = employee[2];
  
    contractEndDate.setFullYear(contractEndDate.getFullYear() + contractYears);
    if (weekDay(contractEndDate)) {
      console.log(`Контракт сотрудника ${employeeName} заканчивается в выходной день (${contractEndDate.toLocaleDateString()}).`);
    }
  }
  