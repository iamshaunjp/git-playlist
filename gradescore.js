 // Function to get the user's grade based on their score
 function checkGrade(score) {
    if (score < 0 || score > 100) {
        return 'Invalid score';
    } else if (score >= 80) {
        return 'Your grade is A';
    } else if (score >= 60) {
        return 'Your grade is B';
    } else if (score >= 40) {
        return 'Your grade is C';
    } else {
        return 'Your grade is F';
    }
}

// Assuming subjects are named Subject 1, Subject 2, etc.
const subjects = ['Cosc 408', 'seng 412', 'geds 420', 'cosc 402', 'cosc 424'];

// Loop through each subject to get the score and print the grade
subjects.forEach(subject => {
    const score = prompt(`Please enter your score for ${subject}:`);
    const grade = checkGrade(parseInt(score, 10)); // Parse score as integer
    document.write(`${subject}: ${grade}<br>`); // Print the grade for the subject
});

document.getElementById('anotherone').innerHTML="Made another commit";