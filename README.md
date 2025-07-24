# Clinical Skills Storyboard

A simple, mobile-friendly web-based storyboard for teaching clinical skills. This project provides a clean, full-screen, step-by-step viewer that works on any device. It is designed to be easy to use and customise.

The interface presents one step at a time, with a clear image, a short description, and a step number. Users navigate between steps using "Previous" and "Next" buttons, ensuring a focused, deliberate learning experience.

![Project Screenshot](https://i.imgur.com/example-screenshot.png)

## Features

*   **Full-Screen Slides:** Each step fills the screen to minimise distractions.
*   **Simple Navigation:** Clear "Previous" and "Next" buttons for easy progression.
*   **Mobile-First Responsive Design:** Looks great on desktops, tablets, and mobile phones.
*   **Customisable Content:** Easily change the images, text, and number of steps.
*   **Branding Ready:** Includes a placeholder for your organisation's logo.
*   **Lightweight:** Built with standard HTML, CSS, and JavaScript. No complex frameworks.
*   **Docker Support:** Includes an Nginx configuration for easy deployment.

## Getting Started

There are two ways to get this project running: opening the files directly in a browser, or using the more robust Docker setup.

### Prerequisites

*   For the simple method: A modern web browser.
*   For the Docker method: [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

### Option 1: Running Locally (Simple Method)

This is the quickest way to see the project.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repository-name/src
    ```
3.  **Open the `index.html` file** in your web browser.

### Option 2: Running with Docker and Nginx (Recommended)

This method simulates a real web server environment and is the best way to run the project. The project is already configured for this setup.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  **Navigate to the project's root directory:**
    ```sh
    cd your-repository-name
    ```
3.  **Build and run the container** using Docker Compose:
    ```sh
    docker-compose up -d
    ```
4.  **Open your web browser** and go to `http://localhost:8080`.

The storyboard should now be running. To stop the server, run `docker-compose down` from the same directory.

## How to Customise the Storyboard

All content and structural changes are made in the `src/index.html` file.

### Editing Steps

Each step is contained within a `<section class="storyboard-frame">` tag. To edit a step, find the relevant section and change:
*   The step number in `<div class="step-number">Step X</div>`.
*   The image source in the `<img src="...">` tag.
*   The descriptive text in the `<p class="frame-text">...</p>` tag.

### Adding a New Step

1.  Copy an entire `<section>` block for an existing step.
2.  Paste it where you want the new step to appear.
3.  Update the content (step number, image, text) for your new step.

### Removing a Step

Simply delete the entire `<section>` block for the step you wish to remove.

### Changing the Logo

1.  Place your logo image file in the `src` directory.
2.  In `index.html`, find all instances of `<img src="https://i.imgur.com/v15G2sJ.png" alt="UHB Logo" class="uhb-logo">`.
3.  Change the `src` path to point to your new logo file (e.g., `src="my-logo.png"`).

## File Structure

The project is organised into two main parts: the source code (`src`) and the server configuration (`nginx.conf`, `docker-compose.yml`).


## Built With

*   **HTML5**
*   **CSS3**
*   **JavaScript (ES6)**

## Contributing

Contributions are welcome. If you have suggestions for improvements, please feel free to fork the repository and submit a pull request.

## Licence

This project is licensed under the MIT Licence. See the `LICENSE` file for details.
