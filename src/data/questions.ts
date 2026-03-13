import { QuestionnaireQuestion, QuizQuestion } from '../types';

export const questionnaireQuestions: QuestionnaireQuestion[] = [
  {
    id: 1,
    questionText: "What do you love doing when you have free time?",
    options: [
      { text: "Drawing, painting, or crafting", emoji: "🎨", field: "arts" },
      { text: "Counting things or playing shop", emoji: "💰", field: "finance" },
      { text: "Exploring nature or doing experiments", emoji: "🔬", field: "science" },
      { text: "Running, jumping, or playing games outside", emoji: "⚽", field: "sports" },
    ],
  },
  {
    id: 2,
    questionText: "Which school subject makes you most excited?",
    options: [
      { text: "Art & Music class", emoji: "🎵", field: "arts" },
      { text: "Math class", emoji: "📊", field: "finance" },
      { text: "Science class", emoji: "🧪", field: "science" },
      { text: "PE / Sports class", emoji: "🏃", field: "sports" },
    ],
  },
  {
    id: 3,
    questionText: "If you could have any superpower, which would you choose?",
    options: [
      { text: "Create anything you imagine", emoji: "✨", field: "arts" },
      { text: "Turn everything into gold", emoji: "🪙", field: "finance" },
      { text: "Be super smart and invent things", emoji: "🧠", field: "science" },
      { text: "Be the fastest and strongest", emoji: "💪", field: "sports" },
    ],
  },
  {
    id: 4,
    questionText: "What kind of videos or shows do you enjoy watching?",
    options: [
      { text: "Drawing tutorials or creative shows", emoji: "🖌️", field: "arts" },
      { text: "Shows about business or money", emoji: "📺", field: "finance" },
      { text: "Science documentaries or space shows", emoji: "🚀", field: "science" },
      { text: "Sports matches or highlights", emoji: "🏆", field: "sports" },
    ],
  },
  {
    id: 5,
    questionText: "Which club would you join at school?",
    options: [
      { text: "Art Club or Drama Club", emoji: "🎭", field: "arts" },
      { text: "Math Club or Entrepreneurship Club", emoji: "💡", field: "finance" },
      { text: "Science Club or Robotics Club", emoji: "🤖", field: "science" },
      { text: "Sports Team or Athletics Club", emoji: "🥇", field: "sports" },
    ],
  },
  {
    id: 6,
    questionText: "What kind of books do you like to read?",
    options: [
      { text: "Storybooks with beautiful illustrations", emoji: "📚", field: "arts" },
      { text: "Books about inventors or business people", emoji: "📖", field: "finance" },
      { text: "Books about animals, space, or how things work", emoji: "🌍", field: "science" },
      { text: "Sports stories or adventure books", emoji: "📗", field: "sports" },
    ],
  },
  {
    id: 7,
    questionText: "What would you build if you had unlimited supplies?",
    options: [
      { text: "A giant sculpture or mural", emoji: "🗿", field: "arts" },
      { text: "A lemonade stand empire", emoji: "🍋", field: "finance" },
      { text: "A rocket ship or a robot", emoji: "🛸", field: "science" },
      { text: "The ultimate obstacle course", emoji: "🏅", field: "sports" },
    ],
  },
  {
    id: 8,
    questionText: "What makes you feel proud?",
    options: [
      { text: "Creating something beautiful", emoji: "🌈", field: "arts" },
      { text: "Saving up money for something special", emoji: "🏦", field: "finance" },
      { text: "Figuring out how something works", emoji: "⚙️", field: "science" },
      { text: "Winning a game or race", emoji: "🎯", field: "sports" },
    ],
  },
  {
    id: 9,
    questionText: "Who would you most like to meet?",
    options: [
      { text: "A famous artist or musician", emoji: "🎸", field: "arts" },
      { text: "A successful business person", emoji: "👔", field: "finance" },
      { text: "A scientist or astronaut", emoji: "👩‍🚀", field: "science" },
      { text: "A famous athlete or coach", emoji: "🏀", field: "sports" },
    ],
  },
  {
    id: 10,
    questionText: "What's your dream job when you grow up?",
    options: [
      { text: "Artist, designer, or musician", emoji: "🎤", field: "arts" },
      { text: "Business owner or banker", emoji: "🏢", field: "finance" },
      { text: "Scientist, doctor, or engineer", emoji: "👨‍🔬", field: "science" },
      { text: "Professional athlete or coach", emoji: "⚾", field: "sports" },
    ],
  },
];

export const quizQuestions: QuizQuestion[] = [
  // Arts questions
  {
    id: 1,
    questionText: "Which of these is a primary color?",
    field: "arts",
    options: [
      { text: "Red", isCorrect: true },
      { text: "Green", isCorrect: false },
      { text: "Orange", isCorrect: false },
      { text: "Purple", isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: "What instrument has black and white keys?",
    field: "arts",
    options: [
      { text: "Guitar", isCorrect: false },
      { text: "Piano", isCorrect: true },
      { text: "Drums", isCorrect: false },
      { text: "Flute", isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: "Who painted the Mona Lisa?",
    field: "arts",
    options: [
      { text: "Pablo Picasso", isCorrect: false },
      { text: "Vincent van Gogh", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Claude Monet", isCorrect: false },
    ],
  },
  // Finance questions
  {
    id: 4,
    questionText: "If you have 10 coins and spend 4, how many do you have left?",
    field: "finance",
    options: [
      { text: "5", isCorrect: false },
      { text: "6", isCorrect: true },
      { text: "7", isCorrect: false },
      { text: "4", isCorrect: false },
    ],
  },
  {
    id: 5,
    questionText: "What is it called when you put money in a bank to keep it safe?",
    field: "finance",
    options: [
      { text: "A withdrawal", isCorrect: false },
      { text: "A deposit", isCorrect: true },
      { text: "A loan", isCorrect: false },
      { text: "A refund", isCorrect: false },
    ],
  },
  {
    id: 6,
    questionText: "What do we call money that a company earns after paying all costs?",
    field: "finance",
    options: [
      { text: "Tax", isCorrect: false },
      { text: "Debt", isCorrect: false },
      { text: "Profit", isCorrect: true },
      { text: "Budget", isCorrect: false },
    ],
  },
  // Science questions
  {
    id: 7,
    questionText: "What planet is known as the Red Planet?",
    field: "science",
    options: [
      { text: "Venus", isCorrect: false },
      { text: "Mars", isCorrect: true },
      { text: "Jupiter", isCorrect: false },
      { text: "Saturn", isCorrect: false },
    ],
  },
  {
    id: 8,
    questionText: "What gas do plants need to make food?",
    field: "science",
    options: [
      { text: "Oxygen", isCorrect: false },
      { text: "Nitrogen", isCorrect: false },
      { text: "Carbon Dioxide", isCorrect: true },
      { text: "Hydrogen", isCorrect: false },
    ],
  },
  {
    id: 9,
    questionText: "How many legs does an insect have?",
    field: "science",
    options: [
      { text: "4", isCorrect: false },
      { text: "6", isCorrect: true },
      { text: "8", isCorrect: false },
      { text: "10", isCorrect: false },
    ],
  },
  // Sports questions
  {
    id: 10,
    questionText: "How many players are on a soccer team on the field?",
    field: "sports",
    options: [
      { text: "9", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "11", isCorrect: true },
      { text: "12", isCorrect: false },
    ],
  },
  {
    id: 11,
    questionText: "In which sport do you use a racket and a shuttlecock?",
    field: "sports",
    options: [
      { text: "Tennis", isCorrect: false },
      { text: "Badminton", isCorrect: true },
      { text: "Table Tennis", isCorrect: false },
      { text: "Squash", isCorrect: false },
    ],
  },
  {
    id: 12,
    questionText: "What is the highest score in a single gymnastics routine?",
    field: "sports",
    options: [
      { text: "5", isCorrect: false },
      { text: "8", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "15", isCorrect: false },
    ],
  },
];

export const fieldInfo: Record<string, { name: string; emoji: string; color: string; description: string }> = {
  arts: {
    name: "Arts & Creativity",
    emoji: "🎨",
    color: "#e74c3c",
    description: "Your child shows a strong creative spark! They love expressing themselves through art, music, and storytelling. Consider enrolling them in art classes, music lessons, or drama workshops.",
  },
  finance: {
    name: "Finance & Business",
    emoji: "💰",
    color: "#f39c12",
    description: "Your child has a keen mind for numbers and business! They enjoy problem-solving and understanding how money works. Consider activities like math competitions, junior business programs, or financial literacy games.",
  },
  science: {
    name: "Science & Discovery",
    emoji: "🔬",
    color: "#3498db",
    description: "Your child is a born explorer and thinker! They're curious about how the world works and love experimenting. Consider science camps, robotics clubs, coding classes, or nature exploration activities.",
  },
  sports: {
    name: "Sports & Athletics",
    emoji: "⚽",
    color: "#2ecc71",
    description: "Your child is energetic and loves physical challenges! They thrive in team settings and enjoy competition. Consider joining sports teams, athletics clubs, martial arts, or swimming lessons.",
  },
};