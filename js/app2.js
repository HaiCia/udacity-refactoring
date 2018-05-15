let model = {
    currentStudent: null,
    days: 12,
    students: [{
            name: "Slappy the Frog",
            missedDays: 12
        },
        {
            name: "Lilly the Lizzard",
            missedDays: 12
        },
        {
            name: "Paulrus the Walrus",
            missedDays: 12
        },
        {
            name: "Gregory the Goat",
            missedDays: 12
        },
        {
            name: "Adam the Anaconda",
            missedDays: 12
        }
    ]
}

let octopus = {
    init: function () {
        headerView.init();
        dataView.init();
    },

    getStudents: function () {
        return model.students;
    },

    getCurrentStudent: function() {
        return model.currentStudent;
    },

    numberOfDays: function () {
        return model.days;
    }
}

let headerView = {
    init: function () {
        this.render();
    },

    render: function () {
        const numberOfDays = octopus.numberOfDays();

        let headerRow = document.getElementById('headerRow');
        let headerCell;
        headerCell = document.createElement('th');

        headerRow.appendChild(headerCell).textContent = 'Students Name';
        for (let i = 1; i <= numberOfDays; i++) {
            headerCell = document.createElement('th');
            ;
            headerRow.appendChild(headerCell).textContent = i;
            //console.log(i);
        }
        headerCell = document.createElement('th');
        headerCell.classList.add('missed-col');
        headerRow.appendChild(headerCell).textContent = 'Missed Days';

    }
}

let dataView = {
    init: function () {
        this.render();
    },

    render: function () {
        let student, studentRow;
        let students = octopus.getStudents();
        const numberOfDays = octopus.numberOfDays();
        const tableBody = document.getElementById('tableBody');
        
        
        for (let i = 0; i < students.length; i++) {

            student = students[i];
            studentRow = document.createElement('tr');
            studentCell = document.createElement('td');
            //studentCell.classList.add('stu');
            tableBody.appendChild(studentRow).appendChild(studentCell).textContent = student.name;
            for( let j = 0; j < numberOfDays; j++) {
                studentCell = document.createElement('td');
                studentRow.appendChild(studentCell).outerHTML = '<td class="attend-col"><input type="checkbox"></td>';
            }
            studentCell = document.createElement('td');
            studentCell.classList.add('missed-col');
            tableBody.appendChild(studentRow).appendChild(studentCell).textContent = 'sum';
            

        }console.log(tableBody);
    }
}

octopus.init();