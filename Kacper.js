let selectedCategory = null;

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
            button.style.borderColor = "#9b59b6";
            button.style.boxShadow = "0 0 0 4px rgba(155, 89, 182, 0.3), 0 5px 15px rgba(155, 89, 182, 0.5)";
        } else if (button.classList.contains('sport')) {
            button.style.borderColor = "#e74c3c";
            button.style.boxShadow = "0 0 0 4px rgba(231, 76, 60, 0.3), 0 5px 15px rgba(231, 76, 60, 0.5)";
        }
    });
    
    event.currentTarget.style.borderColor = "#2ecc71";
    event.currentTarget.style.boxShadow = "0 0 0 6px rgba(46, 204, 113, 0.4), 0 5px 15px rgba(46, 204, 113, 0.6)";
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
            button.style.borderColor = "#9b59b6";
            button.style.boxShadow = "0 0 0 4px rgba(155, 89, 182, 0.3), 0 5px 15px rgba(155, 89, 182, 0.5)";
        } else if (button.classList.contains('sport')) {
            button.style.borderColor = "#e74c3c";
            button.style.boxShadow = "0 0 0 4px rgba(231, 76, 60, 0.3), 0 5px 15px rgba(231, 76, 60, 0.5)";
        }
    });
}

function startQuiz() {
    if (selectedCategory) {
        alert(`Quiz gestart met categorie: ${selectedCategory}!`);
    }
}