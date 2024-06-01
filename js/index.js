document.querySelectorAll('.se-mere').forEach((seeMoreButton, index) => {
    seeMoreButton.addEventListener('click', function() {
        const section = seeMoreButton.closest('section');
        const hiddenItems = section.querySelectorAll('.hid');
        const seeMoreText = seeMoreButton.querySelector('#se-mere');
        const seeMoreTextCan = seeMoreButton.querySelector('#se-mere-cans');
        
        hiddenItems.forEach(item => {
            if (item.classList.contains('hidden')) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        if (seeMoreText && seeMoreText.textContent === 'Se mere') {
            seeMoreText.textContent = 'Se mindre';
        } else if (seeMoreText) {
            seeMoreText.textContent = 'Se mere';
        }

        if (seeMoreTextCan && seeMoreTextCan.textContent === 'Se mere') {
            seeMoreTextCan.textContent = 'Se mindre';
        } else if (seeMoreTextCan) {
            seeMoreTextCan.textContent = 'Se mere';
        }
    });
});