class Student {
    constructor(rlno, name, branch, s1, s2, s3) {
        this.rlno = rlno;
        this.name = name;
        this.branch = branch;
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
        this.calcAvg();  // call method to calculate average
    }

    // Method to calculate average
    calcAvg() {
        this.avg = (this.s1 + this.s2 + this.s3) / 3;
    }

    // Read-only property for average
    get average() {
        return this.avg;
    }

    // Display details
    showDetails() {
        console.log("Roll No is : " + this.rlno);
        console.log("Name is : " + this.name);
        console.log("Branch is : " + this.branch);
        console.log("Avg Marks is : " + this.average);
        console.log('-----------------------');
    }
}

// Main code
const s1 = new Student(1111, "Deep", "CE", 77, 23, 96);
s1.showDetails();

const s2 = new Student(2222, "Kris", "IT", 80, 70, 60);
s2.showDetails();
