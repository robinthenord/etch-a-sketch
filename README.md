<h3>Etch-A-Sketch assignment from <a href="https://www.theodinproject.com/lessons/foundations-etch-a-sketch">The Odin Project</a></h3>

In this project i will be creating a browser version of an etch-a-sketch.

<br>
<h3>Assignment:</h3>

<ol>
  <li>Follow our instructions on <a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/recipes#setting-up-your-projects-github-repository" target="_blank" rel="noopener noreferrer">setting up your project’s GitHub repository</a>.</li>
    <li>Create a webpage with a 16x16 grid of square divs.
      <ul>
        <li>Create the divs using JavaScript. Don’t try to create them by hand by copying and pasting them in your HTML file!</li>
        <li>It’s best to put your grid squares inside a “container” div. This div can be written in your HTML file.</li>
        <li>Use Flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in a later lesson after the foundations path. This project is an opportunity specifically to practice Flexbox!</li>
        <li>Be careful with borders and margins, as they can adjust the size of the squares!</li>
        <li>“OMG, why isn’t my grid being created???”
          <ul>
            <li>Did you link your CSS stylesheet?</li>
            <li>Open your browser’s developer tools.</li>
            <li>Check if there are any errors in the JavaScript console.</li>
            <li>Check your “elements” panel to see if the elements have actually shown up but are somehow hidden.</li>
            <li>Go willy-nilly and add  <code>console.log</code> statements in your JavaScript to see if it’s actually being loaded.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
      <ul>
        <li><strong>Hint</strong>: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.</li>
        <li>There are multiple ways to change the color of the divs, including:
          <ul>
            <li>Adding a new class to the div.</li>
            <li>Changing the div’s background color using JavaScript.</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be <em>removed</em>, and a new grid should be generated <em>in the same total space as before</em> (e.g., 960px wide) so that you’ve got a new sketch pad.
      <ul>
        <li><strong>Tip</strong>: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.</li>
        <li>Research <code>button</code> tags in HTML and how you can make a JavaScript function run when one is clicked.</li>
        <li>Also check out <code>prompt</code>s.</li>
        <li>You should be able to enter <code>64</code> and have a brand new 64x64 grid pop up without changing the total amount of pixels used.</li>
      </ul>
    </li>
    <li>Push your project to GitHub!</li>
  </ol>

<h4>Extra credit</h4>

<p>Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.</p>

  <ol>
    <li>Rather than squares being the same color throughout the grid, randomize the squares’ RGB values with each interaction.</li>
    <li>Additionally, implement a progressive darkening effect where each interaction darkens the square by 10%. The objective is to achieve a completely black square in only ten interactions.
      <ul>
        <li><strong>Hint</strong>: The opacity CSS property is useful here. To learn how to use it, check this <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity" target="_blank" rel="noopener noreferrer">MDN docs article about the opacity CSS property</a>.</li>
      </ul>
    </li>
  </ol>

  <p>You can choose to do either one or both of these challenges, it’s up to you.</p>
