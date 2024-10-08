// import { getProgrammingJoke } from 'random-joke-getter';

const intro =
  "I'm an ECE Honors student @ UT Austin and an aspiring software engineer. What do you want to know about me?";
const experience =
  "I interned summer 2024 @ LPL Financial where I utilized .NET and Angular to manage services that are consumed daily by Financial Advisors. I also interned Spring 2024 @ Texas Luminescence where I improved testing efficiency and updated legacy systems utilizing Typescript, React, and Playwright.";
const projects =
  "I'm love spotting problems from people around me and building solutions that make their lives easier.";
const skills =
  "I have two years of experience in fullstack development. I'm a MERN stack lover (MongoDB, Express, React, Node.js).";
const blogs = "Check out my Socials!";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      "AI chat in development... (Click on the mood button to continue)"
    );
    this.updateChatbotState(greetingMessage);
  }

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, {
      widget: "personalOptions",
    });
    this.updateChatbotState(message);
  }

  async handleBadMood() {
    // Declare jokeData with a default value
    let jokeData = { joke: "Sorry, I couldn't fetch a joke for you." };

    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Any?type=single"
      );
      if (response.ok) {
        const data = await response.json();
        // Update jokeData only if the fetch was successful
        jokeData = data;
      } else {
        console.error("Fetch error: ", response.status);
      }
    } catch (error) {
      // Error handling
      console.error("Error fetching joke:", error);
    } finally {
      const message = this.createChatBotMessage(
        `Let me tell you a joke: ${jokeData.joke}`,
        {
          widget: "jokeOptions",
        }
      );
      this.updateChatbotState(message);
    }
  }

  async handleBadMoodAgain() {
    const jokeData = await (
      await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    ).json();
    const message = this.createChatBotMessage(
      `Here's another one: ${jokeData.joke}`,
      {
        widget: "jokeOptions",
      }
    );
    this.updateChatbotState(message);
  }

  handleGoodMoodFinally() {
    const message = this.createChatBotMessage(
      `Glad you're happy! Let me do a quick self intro: ${intro}`,
      {
        widget: "personalOptions",
      }
    );
    this.updateChatbotState(message);
  }

  createPersonalOptionsMessage() {
    return this.createChatBotMessage("What else would you like to know?", {
      widget: "personalOptions",
    });
  }

  handleExperience() {
    const message = this.createChatBotMessage(experience, {
      widget: "experienceOptions",
    });
    this.updateChatbotState(message);
  }

  handleProjects() {
    const message = this.createChatBotMessage(projects, {
      widget: "projectsOptions",
    });
    this.updateChatbotState(message);
  }

  handleSkills() {
    const message = this.createChatBotMessage(skills, {
      widget: "skillsOptions",
    });
    this.updateChatbotState(message);
  }

  handleBlogs() {
    const message = this.createChatBotMessage(blogs, {
      widget: "blogsOptions",
    });
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
