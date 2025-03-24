// Add this at the beginning of the file
document.addEventListener("DOMContentLoaded", function () {
  const startGameBtn = document.getElementById("start-game");
  const introSection = document.querySelector(".intro-section");
  const gameContainer = document.querySelector(".game-container");

  startGameBtn.addEventListener("click", function () {
    introSection.style.display = "none";
    gameContainer.style.display = "block";
    // Initialize the game here if needed
  });
});

// Game state
const gameState = {
  currentScene: "childhood",
  traits: {
    wisdom: 0,
    fire: 0,
    heart: 0,
  },
  history: [],
};

// Scene images
const sceneImages = {
  childhood:
    "https://images.speakingtree.iimg.in/files/rsz/crop_fc_1000x550/02-2015/180363/3c59dc048e8850243be8079a5c74d079_1423223386.jpg",
  prophecy:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeofvsmleev-GMeXnTDJ5VzJLSyhwXpJBmlA&s",
  swayamvara:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPTvWeLHJiIK1flDwJGQvIAOr8ZRE8wGKapg&s",
  marriage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOk6sEkv01FZITqiAPd8WpCRYjVCNUpajuvA&s",
  indraprastha:
    "https://www.thenationalnews.com/resizer/EEoftjuT-1IIgerwx0pT6KGfm9w=/arc-photo-thenational/eu-central-1-prod/public/IEZ6QVUELDEN5GVWXIZ7MDKDUI.jpg",
  karna_meeting:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7pDHhcrEje2YyplTHNKJUtDkcbxlrSVnQQ&s",
  maya_sabha:
    "https://m.media-amazon.com/images/M/MV5BMDM4NzQ1MTYtNWQwMy00NDQ2LWI4MmItYzg0NGFmYTM0MzIzXkEyXkFqcGc@._V1_.jpg",
  dice_game:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQCPhjwKcRcRXu1bZ49XisOyQHK69L0h-mAA&s",
  disrobing:
    "https://i.pinimg.com/474x/32/8f/10/328f107dc2e662533013ef65ef02921e.jpg",
  exile: "https://www.sawanonlinebookstore.com/zubyheet/2022/03/53-12.jpg",
  war_preparations:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDJliR0tC9fa8Dh_UZd-H1uyKvgPtBlh0EQ&s",
  kurukshetra:
    "https://www.savaari.com/blog/wp-content/uploads/2023/05/6158863713_1297f37ffb_e1.webp",
  aftermath:
    "https://www.indiafacts.org.in/wp-content/uploads/2018/06/Some-Lessons-from-Mahabharata.jpg",
  final_journey:
    "https://i.pinimg.com/564x/49/13/f4/4913f454c18714eda413fff0b8f4b5f9.jpg",
};

// Game scenes with choices that reflect the novel more closely
const scenes = {
  childhood: {
    text: "You are Panchaali, born from the sacred fire of a royal yajna, alongside your brother Dhristadyumna. Your birth was no accident - you were created for vengeance, to bring about the downfall of Drona who humiliated your father. From your first breath, you are different - dark-skinned and fiery, destined for greatness, but also for tragedy. Growing up in your father's palace, you find yourself often overlooked, your education neglected in favor of your brother's.",
    quote:
      "I was born from fire, from a word and a wish, but it was a wish that had gone wrong.",
    choices: [
      {
        text: "Secretly study the scriptures and political treaties in your father's library, as you did in the novel",
        nextScene: "prophecy",
        traits: { wisdom: 2, fire: 0, heart: 0 },
      },
      {
        text: "Convince your friend Dhai Ma to tell you stories of great queens and heroines of the past",
        nextScene: "prophecy",
        traits: { wisdom: 1, fire: 0, heart: 2 },
      },
      {
        text: "Observe your brother's training with Drona, learning the arts of war and strategy from afar",
        nextScene: "prophecy",
        traits: { wisdom: 1, fire: 2, heart: 0 },
      },
    ],
  },
  prophecy: {
    text: "The palace seer has prophesied that you will change the course of history. 'You will marry five men,' he says, 'and be the cause of a great war that will destroy a generation of men.' The words haunt you as you prepare for your swayamvara. Your father has built a grand hall for the ceremony, hoping to secure a powerful alliance through your marriage.",
    quote:
      "A queen. An empress. I would be mistress of the greatest palace in the world. I would be mother to a hundred brave sons.",
    choices: [
      {
        text: "Embrace the prophecy, determined to fulfill your destiny as a catalyst for change",
        nextScene: "swayamvara",
        traits: { wisdom: 0, fire: 2, heart: 0 },
      },
      {
        text: "Seek guidance from Krishna, your sakha who has always shown special interest in your fate",
        nextScene: "swayamvara",
        traits: { wisdom: 2, fire: 0, heart: 1 },
      },
      {
        text: "Pray to the goddess Kali, asking for strength to face whatever comes",
        nextScene: "swayamvara",
        traits: { wisdom: 1, fire: 1, heart: 1 },
      },
    ],
  },
  swayamvara: {
    text: "The great hall is filled with princes and kings from across Bharatvarsha. The challenge has been set - to string a mighty bow and hit a rotating fish target by looking only at its reflection. Your eyes are drawn to Karna, whose presence stirs something deep within you. But he is dismissed as a charioteer's son, not worthy of your hand. Arjuna, disguised as a Brahmin, succeeds at the challenge.",
    quote:
      "I had always dreamed of a husband who would be perfect. But I had not expected to feel this strange pull toward the one man forbidden to me.",
    choices: [
      {
        text: "Accept Arjuna as your winner, following tradition and duty as in the novel",
        nextScene: "marriage",
        traits: { wisdom: 1, fire: 0, heart: 0 },
      },
      {
        text: "Feel a pang of regret for Karna, but accept your fate with dignity",
        nextScene: "marriage",
        traits: { wisdom: 1, fire: 0, heart: 2 },
      },
      {
        text: "Silently question the rules that prevented Karna from competing, planting seeds of rebellion in your heart",
        nextScene: "marriage",
        traits: { wisdom: 0, fire: 2, heart: 1 },
      },
    ],
  },
  marriage: {
    text: "You are now wife to the five Pandava brothers, sharing your time equally among them. When Arjuna brought you home, Kunti mistakenly told her sons to share whatever they had brought - and they followed her words literally. Yudhishthira is wise but distant, Bhima fiercely protective, Arjuna passionate but distracted, and the twins Nakula and Sahadeva kind but often overlooked.",
    quote:
      "Five husbands! It was unheard of. But then, I was no ordinary woman, and my life was not meant to follow ordinary paths.",
    choices: [
      {
        text: "Create a schedule as you did in the novel, becoming a different woman for each husband",
        nextScene: "indraprastha",
        traits: { wisdom: 2, fire: 0, heart: 1 },
      },
      {
        text: "Form a special bond with Bhima, who alone among your husbands truly understands your fire",
        nextScene: "indraprastha",
        traits: { wisdom: 0, fire: 1, heart: 2 },
      },
      {
        text: "Focus on becoming a queen first and a wife second, developing your political acumen",
        nextScene: "indraprastha",
        traits: { wisdom: 1, fire: 2, heart: 0 },
      },
    ],
  },
  indraprastha: {
    text: "The Pandavas establish a new kingdom at Indraprastha, after clearing the Khandava forest. Through Maya, the divine architect saved from the forest fire, they build a magnificent palace unlike any other - your Palace of Illusions. It becomes a symbol of your power and prosperity, but also of the growing jealousy of your cousins, the Kauravas.",
    quote:
      "The Palace of Illusions was magnificent, but I should have remembered that illusions, no matter how beautiful, are dangerous things to build one's life upon.",
    choices: [
      {
        text: "Take pride in your palace, making it a center of culture and learning as in the novel",
        nextScene: "maya_sabha",
        traits: { wisdom: 2, fire: 0, heart: 1 },
      },
      {
        text: "Use your position to help the women of your kingdom, creating schools and hospitals",
        nextScene: "maya_sabha",
        traits: { wisdom: 1, fire: 0, heart: 2 },
      },
      {
        text: "Strengthen your kingdom's defenses, wary of the Kauravas' growing envy",
        nextScene: "maya_sabha",
        traits: { wisdom: 1, fire: 2, heart: 0 },
      },
    ],
  },
  maya_sabha: {
    text: "Duryodhana visits your palace and is humiliated by its illusions - mistaking a crystal floor for water and falling in. You laugh at his mishap, a moment of thoughtless pride that plants a seed of vengeful hatred in him. Shortly after, he invites Yudhishthira to a game of dice at Hastinapura.",
    quote:
      "My laughter echoed through the hall, sweet with triumph. I didn't know it would echo through my nightmares for years to come.",
    choices: [
      {
        text: "Urge Yudhishthira to decline the invitation, sensing a trap as you did in the novel",
        nextScene: "dice_game",
        traits: { wisdom: 2, fire: 0, heart: 0 },
      },
      {
        text: "Apologize to Duryodhana privately, attempting to mend the rift before it widens",
        nextScene: "dice_game",
        traits: { wisdom: 1, fire: 0, heart: 2 },
      },
      {
        text: "Prepare for the worst, secretly asking Krishna to be vigilant during the visit to Hastinapura",
        nextScene: "dice_game",
        traits: { wisdom: 1, fire: 1, heart: 1 },
      },
    ],
  },
  dice_game: {
    text: "The dice game becomes a nightmare. Yudhishthira, in his obsession with honor and gambling addiction, loses everything - your kingdom, your wealth, his brothers, himself, and finally, you. Shakuni's loaded dice ensure his defeat. Dushasana drags you into the court by your hair while you are in your monthly cycles, wearing only a single garment.",
    quote:
      "As they dragged me into the court, I realized that a woman's honor is always a pawn in the games that men play.",
    choices: [
      {
        text: "Question the elders in the court about dharma, challenging them as you did in the novel",
        nextScene: "disrobing",
        traits: { wisdom: 2, fire: 1, heart: 0 },
      },
      {
        text: "Call upon Krishna in your moment of desperate need, your faith unwavering",
        nextScene: "disrobing",
        traits: { wisdom: 1, fire: 0, heart: 2 },
      },
      {
        text: "Stand defiant, your eyes burning with the fire of your birth",
        nextScene: "disrobing",
        traits: { wisdom: 0, fire: 3, heart: 0 },
      },
    ],
  },
  disrobing: {
    text: "As Dushasana attempts to disrobe you, you pray desperately to Krishna. Miraculously, your garment becomes endless, protecting your modesty. When the attempt fails, you stand tall and make a terrible vow - your hair will remain unbound until it is washed in Dushasana's blood. You curse the entire assembly for witnessing your humiliation in silence.",
    quote:
      "I would not stop until the world had paid for what was done to me. I would be the flame that consumed the forest of Kuru.",
    choices: [
      {
        text: "Embrace your rage, letting it fuel your determination for revenge as in the novel",
        nextScene: "exile",
        traits: { wisdom: 0, fire: 3, heart: 0 },
      },
      {
        text: "Find strength in Krishna's protection, your faith deepened by this miracle",
        nextScene: "exile",
        traits: { wisdom: 1, fire: 0, heart: 2 },
      },
      {
        text: "Vow to become more than just an instrument of vengeance - you will reshape the very concept of dharma",
        nextScene: "exile",
        traits: { wisdom: 2, fire: 1, heart: 0 },
      },
    ],
  },
  exile: {
    text: "You and the Pandavas are exiled to the forest for thirteen years - twelve years of exile and one year incognito. The hardships of forest life test all of you. During this time, you encounter sages, gods, and ordinary people who teach you valuable lessons. You meet Vyasa, who sees the story of your life unfolding, and the sorceress Hidimbi, who offers you a different path.",
    quote:
      "In the forest, stripped of palaces and jewels, I discovered parts of myself that had been hidden beneath queenly finery.",
    choices: [
      {
        text: "Use the time to strengthen your husbands' resolve for the coming war, as you did in the novel",
        nextScene: "war_preparations",
        traits: { wisdom: 0, fire: 2, heart: 0 },
      },
      {
        text: "Learn from the forest sages, particularly about the illusory nature of the material world",
        nextScene: "war_preparations",
        traits: { wisdom: 3, fire: 0, heart: 0 },
      },
      {
        text: "Form a bond with Hidimbi, learning her woman's magic that exists outside the realm of men",
        nextScene: "war_preparations",
        traits: { wisdom: 1, fire: 1, heart: 1 },
      },
    ],
  },
  war_preparations: {
    text: "The exile ends, but the Kauravas refuse to return your kingdom. War becomes inevitable. Krishna attempts to negotiate peace, but Duryodhana rejects all compromise. As preparations for war begin, you learn that Karna is actually Kunti's firstborn son - a secret that could change everything if revealed.",
    quote:
      "I was no longer just the queen they fought for. I had become the war itself.",
    choices: [
      {
        text: "Keep your unbound hair visible as a reminder of your vow, fueling the Pandavas' resolve as in the novel",
        nextScene: "kurukshetra",
        traits: { wisdom: 0, fire: 3, heart: 0 },
      },
      {
        text: "Urge Krishna to reveal Karna's true identity, hoping to prevent unnecessary bloodshed",
        nextScene: "kurukshetra",
        traits: { wisdom: 1, fire: 0, heart: 2 },
      },
      {
        text: "Prepare the women and children for the aftermath, knowing that victory will come at terrible cost",
        nextScene: "kurukshetra",
        traits: { wisdom: 2, fire: 0, heart: 1 },
      },
    ],
  },
  kurukshetra: {
    text: "The great war of Kurukshetra begins. For eighteen days, the battlefield runs red with the blood of heroes. You receive news daily - of valor, of treachery, of death. Bhishma falls, then Drona. Your brother fulfills his purpose by killing Drona. And Karna, the man who might have been yours in another life, faces Arjuna in a final confrontation.",
    quote:
      "Each night I unbound my hair and felt it heavy with the weight of the day's killings. Each morning I renewed my vow.",
    choices: [
      {
        text: "Pray for Arjuna's victory, remaining loyal to your husbands as in the novel",
        nextScene: "aftermath",
        traits: { wisdom: 1, fire: 1, heart: 1 },
      },
      {
        text: "Mourn for Karna secretly, recognizing the tragedy of his life and death",
        nextScene: "aftermath",
        traits: { wisdom: 1, fire: 0, heart: 2 },
      },
      {
        text: "Begin to question the purpose of this war and the true meaning of victory",
        nextScene: "aftermath",
        traits: { wisdom: 3, fire: 0, heart: 0 },
      },
    ],
  },
  aftermath: {
    text: "The war is over. The Pandavas are victorious, but at terrible cost. Almost all the men of your generation are dead. Your five sons by the Pandavas, who had been fighting on your side, were all killed by Ashwatthama in their sleep. Karna, you learn, was actually the eldest Pandava, born to Kunti before her marriage. He died without knowing his brothers.",
    quote:
      "We had won the war, but as I looked at the pyres stretching to the horizon, I wondered what winning meant.",
    choices: [
      {
        text: "Help rebuild the kingdom as in the novel, focusing on creating a just and peaceful world",
        nextScene: "final_journey",
        traits: { wisdom: 2, fire: 0, heart: 1 },
      },
      {
        text: "Confront Kunti about her secret, demanding to understand why she let Karna die unknowing",
        nextScene: "final_journey",
        traits: { wisdom: 0, fire: 2, heart: 0 },
      },
      {
        text: "Find solace in Krishna's teachings about the eternal nature of the soul beyond death",
        nextScene: "final_journey",
        traits: { wisdom: 1, fire: 0, heart: 2 },
      },
    ],
  },
  final_journey: {
    text: "Years pass. Yudhishthira rules wisely, but the weight of all that has happened never truly leaves any of you. When it is time, you join your husbands on the final journey, climbing toward the Himalayan peaks and heaven beyond. One by one, your companions fall - first Draupadi, then the brothers, until only Yudhishthira and a dog remain.",
    quote:
      "I was ready to leave behind the woman who had been wife to five great men, mother to five dead sons, queen to the most magnificent court, catalyst for the greatest war.",
    ending: "Your journey has come to an end.",
    outcome: determineOutcome(),
    choices: [
      {
        text: "Begin a new journey",
        nextScene: "childhood",
        traits: { wisdom: 0, fire: 0, heart: 0 },
      },
    ],
  },
};

// Initialize the game
function initGame() {
  updateScene();
  updateTraits();

  // Set up event listener for toggle history button
  document
    .getElementById("toggle-history")
    .addEventListener("click", toggleHistory);
}

// Toggle history panel visibility
function toggleHistory() {
  const historyPanel = document.getElementById("history-panel");
  const isVisible = historyPanel.style.display !== "none";

  historyPanel.style.display = isVisible ? "none" : "block";
  document.getElementById("toggle-history").textContent = isVisible
    ? "View Journey History"
    : "Hide Journey History";
}

// Update the scene based on current state
function updateScene() {
  const scene = scenes[gameState.currentScene];
  document.getElementById("scene-image").src =
    sceneImages[gameState.currentScene];
  document.getElementById("scene-text").textContent = scene.text;
  document.getElementById("scene-quote").textContent = scene.quote;

  // Remove any existing context paragraph
  const existingContext = document.querySelector(".scene-context");
  if (existingContext) {
    existingContext.remove();
  }

  // Clear previous choices
  const choicesElement = document.getElementById("choices");
  choicesElement.innerHTML = "";

  // Add context paragraph above choices
  const contextParagraph = document.createElement("div");
  contextParagraph.className = "scene-context";

  // Get context based on current scene
  let contextText = "";
  switch (gameState.currentScene) {
    case "childhood":
      contextText =
        "Growing up in the palace, you are aware that you were born for a purpose - to help avenge your father. But as a princess, your education is neglected while your brother trains for war. How will you prepare yourself for your destiny?";
      break;
    case "prophecy":
      contextText =
        "The prophecy that you will marry five men and cause a devastating war weighs heavily on your mind. Your swayamvara approaches, where princes from across the land will compete for your hand. How will you face this turning point in your fate?";
      break;
    case "swayamvara":
      contextText =
        "In the grand hall, you watch as Arjuna succeeds at the impossible challenge. Yet your eyes are drawn to Karna, who was not allowed to compete because of his supposed low birth. Your heart is conflicted as you face your first major crossroads.";
      break;
    case "marriage":
      contextText =
        "Through a misunderstanding, you find yourself married to all five Pandava brothers. This unprecedented arrangement requires you to navigate complex relationships while establishing your role in this unusual household.";
      break;
    case "indraprastha":
      contextText =
        "The Palace of Illusions stands as a testament to your family's power. As queen of this magnificent kingdom, you must decide how to use your influence, knowing that the jealous Kauravas watch your prosperity with envy.";
      break;
    case "maya_sabha":
      contextText =
        "After Duryodhana's humiliation in your palace, when he mistook the crystal floor for water and fell, tension between your family and the Kauravas has reached new heights. Now they have invited your husband to a game of dice, and you sense danger.";
      break;
    case "dice_game":
      contextText =
        "Yudhishthira has lost everything in the rigged dice game - your kingdom, your wealth, his brothers, himself, and finally, you. Dragged into court by your hair while in your monthly cycle, you face the assembled kings and elders who do nothing as you are humiliated.";
      break;
    case "disrobing":
      contextText =
        "Krishna's divine intervention has saved you from being disrobed in court. Standing with your endless garment, you are filled with rage at your treatment and the silence of those who should have protected you. This moment will shape the rest of your life.";
      break;
    case "exile":
      contextText =
        "Exiled to the forest for thirteen years, you and the Pandavas face hardship far from palace comforts. This time of trial offers unexpected opportunities for growth and connection with divine forces who take interest in your journey.";
      break;
    case "war_preparations":
      contextText =
        "The exile has ended, but the Kauravas refuse to return your kingdom. As war looms, you learn that Karna - who has always been your enemy - is actually Kunti's firstborn son, which would make him your husband's brother. The battlefield will reshape all your lives.";
      break;
    case "kurukshetra":
      contextText =
        "The great war has begun. Each day brings news of death as heroes fall on both sides. Your brother has fulfilled his purpose by killing Drona, and now Karna and Arjuna will face each other in a battle only one can survive.";
      break;
    case "aftermath":
      contextText =
        "The war is over, but at devastating cost. Your five sons are dead, killed in their sleep. The revelation that Karna was a Pandava adds another layer of tragedy to what has already been lost. In this moment of grief, you must decide how to move forward.";
      break;
    case "final_journey":
      contextText =
        "Years have passed since the war. Now elderly, you and your husbands have renounced the kingdom to make the final pilgrimage toward the Himalayan peaks and heaven beyond. Your life's journey approaches its end, leaving behind a legacy that will be remembered for ages.";
      break;
    default:
      contextText = "";
  }

  contextParagraph.textContent = contextText;

  // Insert context before choices
  const decisionsHeader = document.querySelector(".decisions-header");
  if (decisionsHeader) {
    decisionsHeader.parentNode.insertBefore(contextParagraph, decisionsHeader);
  }

  // Add outcome if it's the final scene
  if (scene.outcome) {
    document.getElementById("outcome").textContent = scene.outcome;
    document.getElementById("outcome").style.display = "block";
  } else {
    document.getElementById("outcome").style.display = "none";
  }

  // Add new choices (without internal context)
  scene.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.textContent = choice.text;
    button.addEventListener("click", () => makeChoice(choice));
    choicesElement.appendChild(button);
  });
}

// Handle player choice
function makeChoice(choice) {
  // Record this choice in history
  gameState.history.push({
    scene: gameState.currentScene,
    sceneName: getSceneName(gameState.currentScene),
    choice: choice.text,
  });

  // Update history panel
  updateHistoryPanel();

  // Update traits
  gameState.traits.wisdom += choice.traits.wisdom || 0;
  gameState.traits.fire += choice.traits.fire || 0;
  gameState.traits.heart += choice.traits.heart || 0;

  // Update current scene
  gameState.currentScene = choice.nextScene;

  // If it's the final scene, determine the outcome
  if (gameState.currentScene === "final_journey") {
    scenes.final_journey.outcome = determineOutcome();
  }

  // Update the display
  updateScene();
  updateTraits();
}

// Update history panel with past choices
function updateHistoryPanel() {
  const historyPanel = document.getElementById("history-panel");
  historyPanel.innerHTML = "";

  if (gameState.history.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "history-item";
    emptyMessage.textContent = "Your journey has just begun...";
    historyPanel.appendChild(emptyMessage);
    return;
  }

  // Add each history item
  gameState.history.forEach((item, index) => {
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";

    const sceneElement = document.createElement("div");
    sceneElement.className = "history-item-scene";
    sceneElement.textContent = item.sceneName;

    const choiceElement = document.createElement("div");
    choiceElement.className = "history-item-choice";
    choiceElement.textContent = item.choice;

    historyItem.appendChild(sceneElement);
    historyItem.appendChild(choiceElement);
    historyPanel.appendChild(historyItem);
  });

  // Scroll to the bottom
  historyPanel.scrollTop = historyPanel.scrollHeight;
}

// Get a friendly name for each scene
function getSceneName(sceneId) {
  const sceneNames = {
    childhood: "Childhood in the Palace",
    prophecy: "The Prophecy",
    swayamvara: "The Swayamvara",
    marriage: "Marriage to the Pandavas",
    indraprastha: "Building Indraprastha",
    karna_meeting: "Encounter with Karna",
    maya_sabha: "The Palace of Illusions",
    dice_game: "The Game of Dice",
    disrobing: "The Disrobing",
    exile: "Exile in the Forest",
    war_preparations: "Preparing for War",
    kurukshetra: "The Battle of Kurukshetra",
    aftermath: "Aftermath of War",
    final_journey: "The Final Journey",
  };

  return sceneNames[sceneId] || sceneId;
}

// Update trait display
function updateTraits() {
  document.getElementById("wisdom-value").textContent = gameState.traits.wisdom;
  document.getElementById("fire-value").textContent = gameState.traits.fire;
  document.getElementById("heart-value").textContent = gameState.traits.heart;
}

// Determine the ending based on traits
function determineOutcome() {
  const wisdom = gameState.traits.wisdom;
  const fire = gameState.traits.fire;
  const heart = gameState.traits.heart;

  if (wisdom > fire && wisdom > heart) {
    return "The sages write of you as Panchaali the Wise, who walked through fire and emerged with understanding beyond mortal measure. In your final moments, as you fell upon the mountain path, you realized that the Palace of Illusions was not just your physical home, but the world itself - a divine play of maya. You understood at last that you were never just a pawn of fate, but a conscious participant in the cosmic dance. Future generations will study your words as they do the Upanishads.";
  } else if (fire > wisdom && fire > heart) {
    return "History remembers you as Draupadi the Fierce, whose oath of vengeance ignited the greatest war the world had known. They say that as you climbed the final mountain, your unbound hair still fluttered behind you like a battle standard, even though your vow had been fulfilled when Bhima tore open Dushasana's chest. For generations, your name becomes a battle cry for those who refuse to accept injustice, a symbol of righteous fury that can reshape the world.";
  } else if (heart > wisdom && heart > fire) {
    return "The bards sing of Panchaali of the Great Heart, who loved deeply despite tragedy. They tell how in your final moments, you forgave even those who wronged you, understanding at last the complex tapestry of fate that bound you all together. Your story is told as one of transcendent love that survived the worst of human cruelty. In the heavens, they say, you were reunited with all those you loved - your five husbands, your sons, and perhaps even Karna, the sun's son who might have been yours in another life.";
  } else {
    return "The world remembers you as Draupadi, the woman born of fire, who changed the course of history. Neither entirely victim nor entirely victor, you walked a complex path between duty and desire, between vengeance and compassion. In the stories they tell of you, you remain enigmatic - a woman who contained multitudes, who could never be reduced to a simple moral. And perhaps that complexity is your greatest legacy, a reminder that even divine plans are worked out through human hearts.";
  }
}

// Start the game
initGame();
