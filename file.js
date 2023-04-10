let sliderWrapper = document.querySelectorAll('.slider-wrapper');
if (sliderWrapper.length) {
    let totalSlideNumber = document.querySelector('.slider-wrapper .total');
    sliderWrapper.forEach(s => {
        let sliderItems = s.querySelector('.slider-items'),
            sliderItem = s.querySelector('.slider-item'),
            sliderItemsAll = sliderItems.querySelectorAll('.slider-item'),
            slider = s.querySelector('.slider');
        sliderItemsAll.forEach(i => {
            i.style.width = slider.offsetWidth + 'px';
        })
        sliderItems.style.width = sliderItemsAll.length * 100 + '%';
        let totalSlideNumberText = new String(sliderItemsAll.length);
        totalSlideNumber.innerHTML = totalSlideNumberText;


    })

    let itemWidth = document.querySelector('.slider-wrapper .slider-item').offsetWidth,
        step = 0,
        curNumber = Math.abs(step) / itemWidth;
    let currentSlideNumber = document.querySelector('.slider-wrapper .current');
    currentSlideNumber.innerHTML = '01';

    addEventListener('click', function (e) {
        let t = e.target;
        if (t.closest('.slider-nav .left')) {
            step += itemWidth;
            if (step >= 0) {
                step = 0;
            }
            t.closest('.slider-wrapper').querySelector('.slider-items').style.transform = 'translate(' + step + 'px)';
            t.closest('.slider-wrapper').querySelector('.slider-items').style.transition = '0.3s';
            let curNumber = new String(Math.abs(step) / itemWidth + 1);
            if (curNumber < 10) {
                currentSlideNumber.innerHTML = curNumber.padStart(2, '0');
            } else {
                currentSlideNumber.innerHTML = curNumber;
            }
        } else if (t.closest('.slider-nav .right')) {
            step -= itemWidth;
            if (Math.abs(step) >= Math.abs(t.closest('.slider-wrapper').querySelectorAll('.slider-item').length * itemWidth)) {
                step = 0;
            }
            t.closest('.slider-wrapper').querySelector('.slider-items').style.transform = 'translate(' + step + 'px)';
            t.closest('.slider-wrapper').querySelector('.slider-items').style.transition = '0.3s';
            let curNumber = new String(Math.abs(step) / itemWidth + 1);
            if (curNumber < 10) {
                currentSlideNumber.innerHTML = curNumber.padStart(2, '0');
            } else {
                currentSlideNumber.innerHTML = curNumber;
            }

        }
    })
}