document.querySelector('.se-mere').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.hid');
    const seeMoreText = document.getElementById('se-mere');
    
    hiddenItems.forEach(item => {
        if (item.classList.contains('hidden')) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });

    if (seeMoreText.textContent === 'Se mere') {
        seeMoreText.textContent = 'Se mindre';
    } else {
        seeMoreText.textContent = 'Se mere';
    }
});