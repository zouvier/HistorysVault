// key for initializing server. 
//TODO: change for production
Moralis.initialize('Izr6Zce1IB7ptfLuLMD8h57idTAMcRW4OfK1zCp4');
Moralis.serverURL = 'https://92cgorxrw6xn.bigmoralis.com:2053/server'

//@dev: authenticates the user and asks them to login with metamask, and also logout
//const userLogOut = async () => await Moralis.User.logOut();
//user = await Moralis.User.current()
//@dev: helper function to hide/show elements
hideElement = (element) => element.style.display = 'none';
showElement = (element) => element.style.display = 'block';

//@dev: this step enables moralis, allows us to use it through the window
//@use: will render on page load
const init = async () => {
    hideElement(userInfo);
    hideElement(userProfileButton);

    
}

initUser = async () => {
    if (await Moralis.User.current()){
        hideElement(userConnectButton);
        showElement(userProfileButton);
        
    }else{
        showElement(userConnectButton);
        hideElement(userProfileButton);
    }
}

const logout = async () => {
    await Moralis.User.logOut();
    hideElement(userInfo);
    initUser();
}

const login = async () => {
    try{
        await Moralis.Web3.authenticate();
        initUser();
    }
    catch(error){
        alert('Connect your metamask wallet!');
    }
}


const openUserInfo = async () => {
    user = await Moralis.User.current()

    if(user){
        showElement(userInfo)
        userUsernameField.value = user.get('username');

        const email = user.get('email');
        if(email) {
            userEmailField.value = email;
        }
        else{
            userEmailField.value = '';
        }

        

        const userAvatar = user.get('avatar')
        showElement(userAvatarImg)
        //hideElement(userAvatarImg)

        if(userAvatar)
        {
            userAvatarImg.src = userAvatar.url();
            showElement(userAvatarImg)
        }
            

        
    }
    else
    {
        login;
    }
}


const saveUserInfo = async () => {
    user = await Moralis.User.current()
    user.set('email', userEmailField.value,{ usePost: true });
    user.set('username', userUsernameField.value,{ usePost: true });

    if (userAvatarFile.files.length > 0) {
        const avatar = new Moralis.File("avatar1.png", userAvatarFile.files[0]);
        user.set('avatar', avatar);
    }

    await user.save();
    alert("User info saved successfully!");
    openUserInfo();
}



const userConnectButton = document.getElementById('btn_connect');
userConnectButton.onclick = login;


const userProfileButton = document.getElementById('btn_user_info');
userProfileButton.onclick = openUserInfo;

const userlogout = document.getElementById('btn_logout');
userlogout.onclick = logout;

const saveUserProfile = document.getElementById('btn_saveUserInfo');
saveUserProfile.onclick = saveUserInfo;

const userInfo = document.getElementById('userInfo');
document.getElementById('btn_closeUserInfo').onclick = () => hideElement(userInfo);

const userUsernameField= document.getElementById('txtUsername');
const userEmailField= document.getElementById('txtemail');
const userAvatarField= document.getElementById('imgAvatar');
const userAvatarFile = document.getElementById('fileAvatar');

init();