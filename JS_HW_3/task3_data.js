const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

const employeesCountHelper = function (number) {
  lastNumber = number.toString().split("").pop();
  if (lastNumber && number) {
    if (lastNumber == 1) return `${number} сотрудник`;
    else if (lastNumber > 1 && lastNumber < 5) return `${number} сотрудника`;
    else return `${number} сотрудников`;
  } else return `нет сотрудников`;
};

const getStructure = function (company) {
  company.forEach((comp) => {
    let depts = [];
    let count = 0;
    depts.push(comp.name);
    if (comp.departments) {
      comp.departments.forEach((dept) => {
        count += dept.employees_count;
        depts.push(
          ` - ${dept.name} ${employeesCountHelper(dept.employeesCountHelper)}`
        );
      });
      depts[0] += ` (${employeesCountHelper(count)})`;
    }
    console.log(depts.join('\n'));
  });
};
getStructure(enterprises);