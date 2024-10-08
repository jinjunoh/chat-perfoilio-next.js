import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../../components/molecules/Options';
import ExperienceCards from '../../components/organisms/ExperienceCards';
import ProjectCards from '../../components/organisms/ProjectCards';
import SkillCards from '../../components/organisms/SkillCards';
import BlogCards from '../../components/organisms/BlogCards';

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: 'Doing great! Tell me about yourself',
      handler: () => actionProvider.handleGoodMood(),
      id: 1,
    },
    {
      text: 'Having a bad day...',
      handler: () => actionProvider.handleBadMood(),
      id: 2,
    },
  ];
};

const getJokeOptions = (actionProvider) => {
  return [
    {
      text: "LOL that's funny",
      handler: () => actionProvider.handleGoodMoodFinally(),
      id: 1,
    },
    {
      text: 'Tell me another one',
      handler: () => actionProvider.handleBadMoodAgain(),
      id: 2,
    },
  ];
};

const getPersonalOptions = (actionProvider) => {
  return [
    {
      text: 'Experience',
      handler: () => actionProvider.handleExperience(),
      id: 1,
    },
    {
      text: 'Projects',
      handler: () => actionProvider.handleProjects(),
      id: 2,
    },
    {
      text: 'Skills',
      handler: () => actionProvider.handleSkills(),
      id: 3,
    },
    {
      text: 'Socials',
      handler: () => actionProvider.handleBlogs(),
      id: 4,
    },
  ];
};

const config = {
  botName: "Jin Jun Oh",
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm JJ. Nice to meet you! I How are you doing today? (Click on the mood button to get started)",
      {
        widget: "moodOptions",
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#147efb",
    },
    chatButton: {
      backgroundColor: "#147efb",
    },
  },
  widgets: [
    {
      widgetName: "moodOptions",
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
    {
      widgetName: "jokeOptions",
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
      ),
    },
    {
      widgetName: "personalOptions",
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getPersonalOptions}
        />
      ),
    },
    {
      widgetName: "experienceOptions",
      widgetFunc: ({ actionProvider }) => (
        <div>
          <ExperienceCards />
          <Options
            actionProvider={actionProvider}
            getOptions={getPersonalOptions}
          />
        </div>
      ),
    },
    {
      widgetName: "projectsOptions",
      widgetFunc: ({ actionProvider }) => (
        <div>
          <ProjectCards />
          <Options
            actionProvider={actionProvider}
            getOptions={getPersonalOptions}
          />
        </div>
      ),
    },
    {
      widgetName: "skillsOptions",
      widgetFunc: ({ actionProvider }) => (
        <div>
          <SkillCards />
          <Options
            actionProvider={actionProvider}
            getOptions={getPersonalOptions}
          />
        </div>
      ),
    },
    {
      widgetName: "blogsOptions",
      widgetFunc: ({ actionProvider }) => (
        <div>
          <BlogCards />
          <Options
            actionProvider={actionProvider}
            getOptions={getPersonalOptions}
          />
        </div>
      ),
    },
  ],
};

export default config;
