document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all the major elements we need to work with
    const frames = document.querySelectorAll('.storyboard-frame');
    const allButtons = document.querySelectorAll('.nav-button'); // Get all buttons
    const frameArray = Array.from(frames); // Convert NodeList to an Array to use indexOf

    // 2. A function to show a specific frame
    const showFrame = (frameIndex) => {
        // Only try to scroll if the index is valid
        if (frameIndex >= 0 && frameIndex < frames.length) {
            frames[frameIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // 3. A single function to handle any button click
    const handleButtonClick = (event) => {
        // Find the parent ".storyboard-frame" of the button that was clicked
        const currentFrame = event.target.closest('.storyboard-frame');
        
        // Find the index of that frame in our array of frames
        const currentFrameIndex = frameArray.indexOf(currentFrame);

        // Check if the clicked button has the "next-button" class
        if (event.target.classList.contains('next-button')) {
            // If yes, show the next frame
            showFrame(currentFrameIndex + 1);
        } 
        // Check if the clicked button has the "prev-button" class
        else if (event.target.classList.contains('prev-button')) {
            // If yes, show the previous frame
            showFrame(currentFrameIndex - 1);
        }
    };

    // 4. Add a click listener to EVERY button
    allButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    // 5. Ensure the page starts at the very first frame
    showFrame(0);
});