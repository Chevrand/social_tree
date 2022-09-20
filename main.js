const user = "chevrand";

async function getUser(user) {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${user}`)
        
        userLogin.textContent = `@${data.login}`;
        userAvatar.src = data.avatar_url;
    } catch(error) {
        console.error(error)
    }
};

getUser(user);