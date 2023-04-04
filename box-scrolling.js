const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
    checkBoxes();
});

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    // console.log(triggerBottom);
    //innerHeight :  property of the "Window" returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.

    boxes.forEach((box) => {
        /* The Element.getBoundingClientRect() :
            method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
        */
        const boxTop = box.getBoundingClientRect().top;
        // console.log(boxTop);
        if (boxTop < triggerBottom) {
            //console.log(boxTop);
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
}
