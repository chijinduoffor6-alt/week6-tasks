// ============================================================
// TASK 1 — Student Profile
// ============================================================

let firstName = "Offor";        // let — can change to a nickname
let lastName = "Chijindu";      // let — could change in some profiles
const age = 21;                  // const — age value for this profile snapshot
const studentId = "STU-00123"; // const — ID should never change
const gpa = 3.75;                // const — this value should never change
let isEnrolled = true;           // let — enrollment status can change
let graduationDate = null;       // let — will be updated later

console.log("===== TASK 1: Student Profile =====");
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);
console.log("Student ID:", studentId);
console.log("GPA:", gpa);
console.log("Is Enrolled:", isEnrolled);
console.log("Graduation Date:", graduationDate);

firstName = "Lex"; // reassign firstName to a nickname
console.log("\n--- After Nickname Reassignment ---");
console.log("First Name (updated):", firstName);


// ============================================================
// TASK 2 — Score Tracker
// ============================================================

console.log("\n\n===== TASK 2: Score Tracker =====");

let totalScore = 0;
console.log("Initial totalScore:", totalScore);

totalScore += 45;  // First test score
console.log("After first test (+45):", totalScore);

totalScore += 30;  // Second test score
console.log("After second test (+30):", totalScore);

totalScore -= 5;   // Error deduction
console.log("After error deduction (-5):", totalScore);

totalScore *= 2;   // Bonus round — doubled
console.log("After bonus round (×2):", totalScore);

totalScore++;      // Increment by 1
console.log("After increment (+1):", totalScore);

console.log("Remainder when divided by 7:", totalScore % 7);


// ============================================================
// TASK 3 — Type Conversion
// ============================================================

console.log("\n\n===== TASK 3: Type Conversion =====");

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

// parseInt() — converts string to a whole number (integer), ignores decimals
let convertedAge = parseInt(studentAge);

// parseFloat() — converts string to a decimal number, preserves fractional part
let convertedExamScore = parseFloat(examScore);

// Number() — converts string directly to a number type (works with whole numbers too)
let convertedPassMark = Number(passMark);

// String() — converts any value to its string representation
let convertedStudentName = String(studentName);

console.log("convertedAge — value:", convertedAge, "| type:", typeof convertedAge);
console.log("convertedExamScore — value:", convertedExamScore, "| type:", typeof convertedExamScore);
console.log("convertedPassMark — value:", convertedPassMark, "| type:", typeof convertedPassMark);
console.log("convertedStudentName — value:", convertedStudentName, "| type:", typeof convertedStudentName);

// Check if examScore > passMark using the converted values
console.log("Is examScore > passMark?", convertedExamScore > convertedPassMark);


// ============================================================
// TASK 4 — Conditional Statements
// ============================================================

console.log("\n\n===== TASK 4 — Part A: Grading System (if/else if/else) =====");

function getGrade(score) {
    if (score >= 70) {
        return "A — Distinction";
    } else if (score >= 60) {
        return "B — Merit";
    } else if (score >= 50) {
        return "C — Pass";
    } else if (score >= 40) {
        return "D — Near Pass";
    } else {
        return "F — Fail";
    }
}

// Test 1
let score1 = 73;
console.log(`Score: ${score1} | Grade: ${getGrade(score1)}`);

// Test 2
let score2 = 64;
console.log(`Score: ${score2} | Grade: ${getGrade(score2)}`);

// Test 3
let score3 = 28;
console.log(`Score: ${score3} | Grade: ${getGrade(score3)}`);


console.log("\n\n===== TASK 4 — Part B: Month Name (switch) =====");

function getMonthName(monthNumber) {
    let monthName;
    switch (monthNumber) {
        case 1:  monthName = "January";   break;
        case 2:  monthName = "February";  break;
        case 3:  monthName = "March";     break;
        case 4:  monthName = "April";     break;
        case 5:  monthName = "May";       break;
        case 6:  monthName = "June";      break;
        case 7:  monthName = "July";      break;
        case 8:  monthName = "August";    break;
        case 9:  monthName = "September"; break;
        case 10: monthName = "October";   break;
        case 11: monthName = "November";  break;
        case 12: monthName = "December";  break;
        default: monthName = "Invalid month number — please enter a value between 1 and 12";
    }
    return monthName;
}

// Test with valid month
console.log("Month 3:", getMonthName(3));

// Another valid month
console.log("Month 9:", getMonthName(9));

// Invalid month value
console.log("Month 13:", getMonthName(13));