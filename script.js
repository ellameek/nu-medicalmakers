// Future animations and interactive effects can go here.
document.addEventListener("DOMContentLoaded", () => {
  console.log("Medical Makers site loaded.");
});

const bios = {
  nathaniel: {
    name: "Nathaniel Rogers",
    role: "Project Manager – EEG Wheelchair Team",
    text: "Hi! I’m Nathaniel, and I’m a senior studying Biomedical Engineering and product design through the Segal Design Certificate. I’m deeply interested in all flavors of medical device product design, development, and engineering, though much of my experience falls in the cardiac electrophysiology world. Extracurricularly, I enjoy playing squash, reading, and long walks. I’m also a member of the NU cheerleading team! Please feel free to reach out with any inquiries.",
    image: "images/nathaniel_rogers.jpeg",
    linkedin: "https://www.linkedin.com/in/nathaniel-r0gers/",
    email: "mailto:NathanielRogers2027@u.northwestern.edu"
  },
  ryan: {
    name: "Ryan Xu",
    role: "Treasurer",
    text: "Hi my name is Ryan and I’m from the Bay Area! I’m a Junior and am getting my BS in biomedical engineering. In my spare time I love gardening and practicing kung fu. Feel free to reach out!",
    image: "images/ryan_xu.jpeg",
    linkedin: "https://www.linkedin.com/in/ryan-xu-71983032b",
    email: "mailto:RyanXu2028@u.northwestern.edu"
  },
  jackson: {
    name: "Jackson Wang",
    role: "Project Manager - Team 2",
    text: "Hi, my name is Jackson Wang and I’m from Nashville, TN. I’m a junior studying Biomedical Engineering, and I’m especially interested in prosthetics design, CAD modeling, and 3D printing. In my free time, I like photography, hiking, and exploring new places.",
    image: "images/jackson_wang.jpeg",
    linkedin: "https://www.linkedin.com/in/jackson-wang-899a25172",
    email: "mailto:JacksonWang2028@u.northwestern.edu"
  },
  luca: {
    name: "Luca Endorf",
    role: "Project Manager - EEG Wheelchair Team",
    text: "Hey all, my name is Luca Endorf and I am a junior at NU. I’m a Mechanical engineering student with a concentration in robotics, and in my free time I enjoy reading, going to the gym, hanging with friends, and listening to/playing music. Reach out if you have questions about the EEG team!",
    image: "images/luca_endorf.png",
    linkedin: "https://www.linkedin.com/in/luca-endorf-391053359/",
    email: "mailto:LucaEndorf2028@u.northwestern.edu"
  },
  dev: {
    name: "Dev Jhaveri",
    role: "Secretary",
    text: "Hi, my name is Dev Jhaveri and I’m from Mumbai, India. I am a junior studying ME and in my free time I like to play table tennis and go food exploring.",
    image: "images/dev_jhaveri.jpeg",
    linkedin: "https://www.linkedin.com/in/devjhaveri/",
    email: "mailto:DevJhaveri2028@u.northwestern.edu"
  },
  meghna: {
    name: "Meghna Sundaram",
    role: "Project Manager - Team 2",
    text: "Senior studying Mechanical Engineering. She is specifically interested in design and CAD modeling for robotics and biomedical applications. For fun, she loves to bake, go on long runs and hang out with her friends.",
    image: "images/meghna_sundaram.jpeg",
    linkedin: "https://www.linkedin.com/in/meghna-sundaram-32973b283",
    email: "mailto:MeghnaSundaram2027@u.northwestern.edu"
  },
  travis: {
    name: "Travis Saltzman",
    role: "Co-President",
    text: "Hey! I'm Travis and I'm from Denver, Colorado. I am a Senior majoring in Biomedical Engineering with a pre-medical designation. I'm passionate about work involving medical devices and biosensors, with a specific interest in combating neurological conditions. In my free time, I like to workout, play basketball, or just hang out with friends. If you have any questions, feel free to reach out!",
    image: "images/travis_saltzman.jpeg",
    linkedin: "https://www.linkedin.com/in/travis-saltzman-9a0b7225a",
    email: "mailto:TravisSaltzman2027@u.northwestern.edu"
  },
  ella: {
    name: "Ella Meek",
    role: "Co-President",
    text: "Hi everyone, my name is Ella and I’m a Junior Biomedical Engineering major interested in bionic prostheses. Through Medical Makers and my research efforts, I aim to design medical devices that are accessible to communities in need. Outside of school, I enjoy going to the gym, trying new places to eat, and watching the sunset with friends. Don’t hesitate to reach out with any questions!",
    image: "images/ella_meek.jpeg",
    linkedin: "https://www.linkedin.com/in/ella-meek-64a46631b",
    email: "mailto:EllaMeek2028@u.northwestern.edu"
  },
};

function openBio(key) {
  const bio = bios[key];
  if (!bio) return;

  document.getElementById("bio-pic").style.backgroundImage = `url('${bio.image}')`;

  document.getElementById('bio-name').textContent = bio.name;
  document.getElementById('bio-role').textContent = bio.role;
  document.getElementById('bio-text').textContent = bio.text;
  document.getElementById('bio-linkedin').href = bio.linkedin || "#";
  document.getElementById('bio-email').href = bio.email || "#";

  document.getElementById('bio-overlay').style.display = 'block';
  document.getElementById('bio-popup').style.display = 'block';
  

}

function closeBio() {
  document.getElementById('bio-overlay').style.display = 'none';
  document.getElementById('bio-popup').style.display = 'none';
}


function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}


function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function () {
  const instruction = document.getElementById("tap-instruction");
  if (instruction) {
    instruction.textContent = isMobileDevice()
      ? "Tap on a profile to learn more."
      : "Click on a profile to learn more.";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const instruction = document.getElementById("tap-instruction-project");
  if (instruction) {
    instruction.textContent = isMobileDevice()
      ? "Tap on a project to learn more."
      : "Click on a project to learn more.";
  }
});





