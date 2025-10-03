let selectedCategory = null;
let userData = {
    username: '',
    age: 0
};


function registerUser() {
    const username = document.getElementById('username').value.trim();
    const age = parseInt(document.getElementById('age').value);
    let isValid = true;

    
    if (username.length < 3 || username.length > 20) {
        document.getElementById('username-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('username-error').style.display = 'none';
    }

    
    if (isNaN(age) || age < 15 || age > 50) {
        document.getElementById('age-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('age-error').style.display = 'none';
    }

   
    if (isValid) {
        userData.username = username;
        userData.age = age;
        
        
        document.getElementById('display-username').textContent = username;
        document.getElementById('display-age').textContent = age;
        
       
        document.getElementById('registration-page').style.display = 'none';
        document.getElementById('start-page').style.display = 'block';
    }
}


function showCategoryPage() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('category-page').style.display = 'block';
}

function showStartPage() {
    document.getElementById('category-page').style.display = 'none';
    document.getElementById('start-page').style.display = 'block';
    resetSelection();
}

function selectCategory(category) {
    selectedCategory = category;
    document.getElementById('selected-category').textContent = category;
    document.getElementById('start-quiz-btn').disabled = false;
    document.getElementById('start-quiz-btn').style.background = "rgba(52, 152, 219, 0.8)";
    
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => {
        if (button.classList.contains('topografie')) {
            button.style.borderColor = "#3498db";
            button.style.boxShadow = "0 0 0 4px rgba(52, 152, 219, 0.3), 0 5px 15px rgba(52, 152, 219, 0.5)";
        } else if (button.classList.contains('muziek')) {
            button.style.borderColor = "#8f0d0d";
            button.style.boxShadow = "0 0 0 4px rgba(154, 21, 21, 0.3), 0 5px 15px rgba(166, 23, 23, 0.5)";
        } else if (button.classList.contains('sport')) {
            button.style.borderColor = "#f4f4f4";
            button.style.boxShadow = "0 0 0 4px rgba(198, 198, 198, 0.416), 0 5px 15px rgba(255, 255, 255, 0.371)";
        }
    });
    
    event.currentTarget.style.borderColor = "#ffffffed";
    event.currentTarget.style.boxShadow = "0 0 0 6px rgba(255, 255, 255, 0), 0 5px 15px rgba(255, 255, 255, 0.6)";
}

function resetSelection() {
    selectedCategory = null;
    document.getElementById('start-quiz-btn').disabled = true;
    document.getElementById('start-quiz-btn').style.background = "rgba(52, 152, 219, 0.3)";
    
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => {
        if (button.classList.contains('topografie')) {
            button.style.borderColor = "#3498db";
            button.style.boxShadow = "0 0 0 4px rgba(52, 152, 219, 0.3), 0 5px 15px rgba(52, 152, 219, 0.5)";
        } else if (button.classList.contains('muziek')) {
            button.style.borderColor = "#8f0d0d";
            button.style.boxShadow = "0 0 0 4px rgba(154, 21, 21, 0.3), 0 5px 15px rgba(166, 23, 23, 0.5)";
        } else if (button.classList.contains('sport')) {
            button.style.borderColor = "#f4f4f4";
            button.style.boxShadow = "0 0 0 4px rgba(198, 198, 198, 0.416), 0 5px 15px rgba(255, 255, 255, 0.371)";
        }
    });
}

function startQuiz() {
    if (selectedCategory) {
        alert(`Quiz gestart met categorie: ${selectedCategory}! Gebruiker: ${userData.username}, Leeftijd: ${userData.age}`);
        
    }
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('username').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            registerUser();
        }
    });
    
    document.getElementById('age').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            registerUser();
        }
    });
});