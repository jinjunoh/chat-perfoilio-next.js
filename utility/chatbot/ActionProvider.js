// import { getProgrammingJoke } from 'random-joke-getter';

const intro =
  "I'm an ECE Honors student @ UT Austin and an aspiring software engineer. What do you want to know about me?";
const experience =
  "I am an incoming Software Engineer Intern at LPL Financial and Sage Bionetworks";
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
      "AI chat in development..."
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
    try {
      const jokeData = await (
        await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      ).json();
    } catch{
      const jokeData = "Error Fetching Joke".json();
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
      `Glad you're happy! Let me do a quick self intro: ${intro}`,{
        widget: "personalOptions"
    });
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
