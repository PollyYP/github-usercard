/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
    */

const loadOurData = async () => {
  try {
    const response = await axios.get("https://api.github.com/users/PollyYP");
    console.log(`${response.data}`);
  } catch (error) {
    console.log(error);
  }
};

loadOurData();

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createMarkup({ data }) {
  let githubCard = document.createElement("div");
  let image = document.createElement("img");
  let cardInfo = document.createElement("div");
  let name = document.createElement("h3");
  let userName = document.createElement("p");
  let location = document.createElement("p");
  let profile = document.createElement("p");
  let link = document.createElement("a");
  let followerCount = document.createElement("p");
  let followingCount = document.createElement("p");
  let UserBio = document.createElement("p");

  githubCard.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  image.src = data.avatar_url;
  name.textContent = data.name;
  userName.textContent = data.login;
  location.textContent = `Location: ${data.location}`;
  profile.textContent = `Profile: ${link}`;
  link.href = data.html_url;
  link.textContent = link.href;
  followerCount.textContent = data.followers;
  followingCount.textContent = data.following;
  UserBio.textContent = data.bio;

  githubCard.appendChild(image);
  githubCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(link);
  cardInfo.appendChild(followerCount);
  cardInfo.appendChild(followingCount);
  cardInfo.appendChild(UserBio);

  return githubCard;
}

const divCards = document.querySelector("div.cards");
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "PollyYP",
];

followersArray
  .forEach((nameOfUsers) => {
    axios
      .get(`https://api.github.com/users/${nameOfUsers}`)
      .then(({ data }) => {
        const card = createMarkup({ data });
        divCards.appendChild(card);
      });
  })
  .catch((err) => console.log(err));

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
